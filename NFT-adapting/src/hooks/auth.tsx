/* eslint-disable arrow-body-style */
import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import base64 from 'react-native-base64';

interface User {
  name: string;
  email: string;
  senhaTemporaria: string;
  currentIdCedente: string,
  currentRazaoSocial: string,
  arrayCedentes: string,
}

interface Cendentes {
  cnpj: string,
  idCedente: string,
  razaoSocial: string,
}

interface AuthState {
  user: User;
  idPessoa: string;
  accessToken: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}
interface AuthContextProps {
  user: User;
  idPessoa: string;
  accessToken: string;
  setUserData(): void;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}
const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    return {} as AuthState;
  });

  const setUserData = async () => {
    const idPessoa = await AsyncStorage.getItem('@PassAqui:idPessoa');
    const name = await AsyncStorage.getItem('@PassAqui:name');
    const email = await AsyncStorage.getItem('@PassAqui:email');
    const senhaTemporaria = await AsyncStorage.getItem('@PassAqui:senhaTemporaria');
    const currentIdCedente = await AsyncStorage.getItem('@PassAqui:currentIdCedente');
    const currentRazaoSocial = await AsyncStorage.getItem('@PassAqui:currentRazaoSocial');
    const accessToken = await AsyncStorage.getItem('@PassAqui:accessToken');
    const arrayCedentes = await AsyncStorage.getItem('@PassAqui:arrayCedentes');

    const user = {
      name: name || '',
      email: email || '',
      senhaTemporaria: senhaTemporaria || 'N',
      currentIdCedente: currentIdCedente || '',
      currentRazaoSocial: currentRazaoSocial || '',
      arrayCedentes: arrayCedentes || '',
    };

    if (user !== null && accessToken && idPessoa) {
      setData({
        user,
        accessToken,
        idPessoa,
      });
    }
  };

  useEffect(() => {
    setUserData();
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    const response = axios.post('http://159.65.188.149/auth/login', {}, {
      headers: {
        Authorization: `Basic ${base64.encode(`${email}:${password}`)}`,
      },
    });
    const {
      idPessoa,
      accessToken,
      details: {
        name,
        senhaTemporaria,
        cedentes,
      },
    } = (await response).data;

    const cedentesArray: Cendentes[] = Object.values(cedentes);
    const user = {
      name,
      email,
      senhaTemporaria,
      currentIdCedente: cedentesArray[0].idCedente,
      currentRazaoSocial: cedentesArray[0].razaoSocial,
      arrayCedentes: JSON.stringify(cedentesArray),
    };

    const { idCedente, razaoSocial } = cedentesArray[0];

    await AsyncStorage.setItem('@PassAqui:idPessoa', JSON.stringify(idPessoa));
    await AsyncStorage.setItem('@PassAqui:name', JSON.stringify(name));
    await AsyncStorage.setItem('@PassAqui:email', JSON.stringify(email));
    await AsyncStorage.setItem('@PassAqui:senhaTemporaria', JSON.stringify(senhaTemporaria));
    await AsyncStorage.setItem('@PassAqui:accessToken', accessToken);
    await AsyncStorage.setItem('@PassAqui:currentIdCedente', idCedente.toString());
    await AsyncStorage.setItem('@PassAqui:currentRazaoSocial', razaoSocial);
    await AsyncStorage.setItem('@PassAqui:arrayCedentes', JSON.stringify(cedentesArray));

    setData({
      user,
      accessToken,
      idPessoa,
    });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.removeItem('@PassAqui:idPessoa');
    await AsyncStorage.removeItem('@PassAqui:name');
    await AsyncStorage.removeItem('@PassAqui:email');
    await AsyncStorage.removeItem('@PassAqui:senhaTemporaria');
    await AsyncStorage.removeItem('@PassAqui:accessToken');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        idPessoa: data.idPessoa,
        user: data.user,
        accessToken: data.accessToken,
        setUserData,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
};
