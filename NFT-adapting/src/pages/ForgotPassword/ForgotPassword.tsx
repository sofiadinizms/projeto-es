/* eslint-disable import/order */
/* eslint-disable global-require */
import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, SimpleText } from './styles';
import EmailValidator from 'email-validator';
import {
  AppInput,
  GenericLogoScreen,
} from '../../components';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const sendEmail = () => {
    try {
      if (EmailValidator.validate(email) === false) {
        Alert.alert(
          'Email inválido',
          'Assegure-se de preencher um email válido.',
          [{ text: 'OK' }],
        );
        return;
      }
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      const raw = JSON.stringify({
        email: `${email}`,
      });

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      fetch('http://159.65.188.149/auth/forgot-password', requestOptions)
        .then((response) => Alert.alert(
          'Esqueci minha senha',
          'Se o usuário existir, será enviada uma senha temporária para o e-mail informado',
          [{ text: 'OK' }],
        ))
        .catch((error) => console.log('error', error));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <GenericLogoScreen
      title="Esqueceu a senha?"
      primaryButtonLabel="Enviar"
      primaryButtonAction={() => sendEmail()}
      secondaryButtonLabel="Voltar ao login"
      secondaryButtonAction={() => navigation.navigate('Login')}
    >
      <Container>
        <SimpleText>
          Para criar uma nova senha insira abaixo seu endereço de e-mail
          que vamos enviar um código para ele para que você seja redirecionado
          para a criação de uma nova senha.
        </SimpleText>
        <AppInput
          typeOfTextContent="emailAddress"
          caps="none"
          typeOfKeyboard="email-address"
          placeHolder="E-mail"
          complete="email"
          fillInput={setEmail}
          label="Email"
        />
      </Container>
    </GenericLogoScreen>
  );
};

export default ForgotPassword;
