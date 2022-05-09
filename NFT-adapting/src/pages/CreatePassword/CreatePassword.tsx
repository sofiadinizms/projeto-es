/* eslint-disable quote-props */
/* eslint-disable new-cap */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import axios from 'axios';
import { Container, SimpleText, InputContainer } from './styles';
import {
  AppInput,
  GenericLogoScreen,
} from '../../components';

const CreatePassword: React.FC = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [confirmationPassword, setConfirmationPassword] = useState('');
  const [showConfirmationPassword, setShowConfirmationPassword] = useState(true);
  const navigation = useNavigation();

  const savePasswords = () => {
    const passwordValidator = require('password-validator');
    const schema = new passwordValidator();
    schema.is().min(8).has().not()
      .spaces();
    if (password !== confirmationPassword) {
      Alert.alert(
        'Senhas não coincidem',
        'Assegure-se de que os campos de Senha e Confirmação de senha coincidem.',
        [{ text: 'OK' }],
      );
    } else if (!schema.validate(password)) {
      Alert.alert(
        'Senha inválida',
        'Assegure-se de que a sua senha possui pelo menos oito dígitos e não conter espaços vazios.',
        [{ text: 'OK' }],
      );
    } else {
      try {
        const data = JSON.stringify({
          'password': password,
          'passwordRepeat': confirmationPassword,
        });
        // const response = axios.post('http://159.65.188.149/auth/change-password', { data }, {
        //   headers: {
        //     Authorization: 'YmV0by5maWxpcGVAZ21haWwuY29tOjEyMw==',
        //   },
        // });
        // console.log('Criar senha:', response);
        navigation.navigate('AvaliableTitles');
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <GenericLogoScreen
      title="Criar nova senha"
      primaryButtonLabel="Salvar"
      primaryButtonAction={() => savePasswords()}
    >
      <Container>
        <SimpleText>
          Crie uma nova senha para voltar a ter acesso a sua conta.
        </SimpleText>
        <InputContainer>
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
        <AppInput
          caps="none"
          autoCorrection={false}
          hidePassword={showConfirmationPassword || false}
          placeHolder="Confirmação de senha"
          complete="password"
          fillInput={setConfirmationPassword}
          label="Confirmação de senha"
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
          onPress={(isChecked: boolean) => { setShowConfirmationPassword(!isChecked); }}
        />
      </Container>
    </GenericLogoScreen>
  );
};

export default CreatePassword;
