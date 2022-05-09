/* eslint-disable import/extensions */
/* eslint-disable global-require */
import React, { useState } from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import EmailValidator from 'email-validator';
import { useAuth } from '../../hooks/auth';
import authApi from '../../services/auth';

import {
  AppInput,
  GenericLogoScreen,
} from '../../components';
import {
  InputContainer,
} from './styles';

interface userData {
  idPessoa: string;
  accessToken: string;
  details: {
    name: string;
    email: string;
    senhaTemporaria: string;
    cedentes:any;
  }
}

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const { signIn } = useAuth();
  const navigation = useNavigation();
  const [userData, setUserData] = useState<userData>();

  const handleSubmit = async () => {
    try {
      if (EmailValidator.validate(email) === false) {
        Alert.alert(
          'Email inválido',
          'Assegure-se de preencher um email válido.',
          [{ text: 'OK' }],
        );
        return;
      } if (
        email === ''
        || email === null
        || password === ''
        || password === null
      ) {
        Alert.alert(
          'Preencha todos os dados',
          'Assegure-se de preencher todos os dados.',
          [{ text: 'OK' }],
        );
        return;
      }
      await signIn({ email, password });
      // const result = authApi.print(email, password);
      // console.log('Resultado:', result);
      // if (result.status === 200) {
      //   if (result.data.details.senhaTemporaria === 'S' ||
      //  result.data.details.senhaTemporaria === 's') {
      //     navigation.navigate('AvaliableTitles');
      //   } else {
      //     navigation.navigate('AvaliableTitles');
      //   }
      // }
    } catch (error) {
      console.log('\nerro:', error);
      Alert.alert(
        'Dados incorretos',
        'Assegure-se de preencher todos os dados corretamente.',
        [{ text: 'OK' }],
      );
    }
  };

  return (
    <GenericLogoScreen
      title="Login"
      primaryButtonLabel="Entrar"
      primaryButtonAction={() => handleSubmit()}
      secondaryButtonLabel="Esqueceu a senha?"
      secondaryButtonAction={() => navigation.navigate('ForgotPassword')}
    >
      <InputContainer>
        <AppInput
          typeOfTextContent="emailAddress"
          caps="none"
          typeOfKeyboard="email-address"
          placeHolder="E-mail"
          complete="email"
          fillInput={setEmail}
          label="Email"
        />
        <AppInput
          caps="none"
          autoCorrection={false}
          hidePassword={showPassword}
          placeHolder="Senha"
          complete="password"
          fillInput={setPassword}
          label="Senha"
        />
        <BouncyCheckbox
          size={16}
          fillColor="#115F49"
          unfillColor="#FEFEFE"
          text="Mostrar senha"
          iconStyle={{ borderColor: '#373435', borderRadius: 4 }}
          textStyle={{
            fontFamily: 'OpenSans_400Regular',
            fontSize: 12,
            color: 'rgba(55, 52, 53, 0.7)',
            textDecorationLine: 'none',
          }}
          onPress={(isChecked: boolean) => { setShowPassword(!isChecked); }}
        />
      </InputContainer>
    </GenericLogoScreen>
  );
};

export default Login;
