/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import base64 from 'react-native-base64';
import axios from 'axios';
import React, { createContext, useContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthProvider } from './auth';
import api from '../services/api';

interface UserContextProps {
  children?: React.ReactNode;
}
interface User {
  idPessoa: string;
  name: string;
  email: string;
  senhaTemporaria: string;
}
interface AuthState {
  user: User;
  token: string;
}
interface AuthContextProps {
  user: User;
  token: string;
}
const UserContext = createContext<AuthContextProps>({} as AuthContextProps);

const UserProvider: React.FC = ({ children }: UserContextProps) => {
  const [UserInfos, setUserInfos] = useState({
    idPessoa: '',
    name: '',
    email: '',
    senhaTemporaria: '',
    acessToken: '',
  });

  const changeValue = async (newValue: AuthContextProps) => {
    try {
      await AsyncStorage.getItem('@passAqui:user');
      await AsyncStorage.getItem('@passAqui:token');
      setUserInfos(newValue);
    } catch (err) {
      console.log('Erro:', err);
    }
  };

  return (
    <UserContext.Provider value={{ UserInfos, changeValue}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);

export default UserProvider;
