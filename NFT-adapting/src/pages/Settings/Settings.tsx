/* eslint-disable global-require */
import React, { useState, useRef } from 'react';
import {
  Animated,
  Button,
  Dimensions,
  FlatList,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';
import {
  AppInput,
  AppDivisor,
  AppPicker,
  DefaultScreen,
  TableHeader,
  TableLine,
} from '../../components';
import {
  AppPickerContainer,
  ButtonContainer,
  CardContent,
  CardTitle,
  TabButton,
  TabContainer,
  TabTitle,
  InfoCard,
  IconContainer,
  IconLabel,
  HeaderContainer,
  DefaultLabel,
} from './styles';

const avaliableTitlesInfo = [
  {
    Id: 'Nome do sacado',
    Nota: '123854',
    LiquidValue: '1.300',
    FaceValue: '1.500',
    Emission: 'Emissão',
    Deadline: '15/07/2021',
    Status: 'Status',
  },
  {
    Id: 'Nome do sacado',
    Nota: '123854',
    LiquidValue: '1.300',
    FaceValue: '1.500',
    Emission: 'Emissão',
    Deadline: '15/07/2021',
    Status: 'Status',
  },
  {
    Id: 'Nome do sacado',
    Nota: '123854',
    LiquidValue: '1.300',
    FaceValue: '1.500',
    Emission: 'Emissão',
    Deadline: '15/07/2021',
    Status: 'Status',
  },
  {
    Id: 'Nome do sacado',
    Nota: '123854',
    LiquidValue: '1.300',
    FaceValue: '1.500',
    Emission: 'Emissão',
    Deadline: '15/07/2021',
    Status: 'Status',
  },
  {
    Id: 'Nome do sacado',
    Nota: '123854',
    LiquidValue: '1.300',
    FaceValue: '1.500',
    Emission: 'Emissão',
    Deadline: '15/07/2021',
    Status: 'Status',
  },
  {
    Id: 'Nome do sacado',
    Nota: '123854',
    LiquidValue: '1.300',
    FaceValue: '1.500',
    Emission: 'Emissão',
    Deadline: '15/07/2021',
    Status: 'Status',
  },
  {
    Id: 'Nome do sacado',
    Nota: '123854',
    LiquidValue: '1.300',
    FaceValue: '1.500',
    Emission: 'Emissão',
    Deadline: '15/07/2021',
    Status: 'Status',
  },
  {
    Id: 'Nome do sacado',
    Nota: '123854',
    LiquidValue: '1.300',
    FaceValue: '1.500',
    Emission: 'Emissão',
    Deadline: '15/07/2021',
    Status: 'Status',
  },
  {
    Id: 'Nome do sacado',
    Nota: '123854',
    LiquidValue: '1.300',
    FaceValue: '1.500',
    Emission: 'Emissão',
    Deadline: '15/07/2021',
    Status: 'Status',
  },
  {
    Id: 'Nome do sacado',
    Nota: '123854',
    LiquidValue: '1.300',
    FaceValue: '1.500',
    Emission: 'Emissão',
    Deadline: '15/07/2021',
    Status: 'Status',
  },
  {
    Id: 'Nome do sacado',
    Nota: '123854',
    LiquidValue: '1.300',
    FaceValue: '1.500',
    Emission: 'Emissão',
    Deadline: '15/07/2021',
    Status: 'Status',
  },
  {
    Id: 'Nome do sacado',
    Nota: '123854',
    LiquidValue: '1.300',
    FaceValue: '1.500',
    Emission: 'Emissão',
    Deadline: '15/07/2021',
    Status: 'Status',
  },
];

const TabOptions = [
  {
    id: '1',
    title: 'Informações do perfil',
  },
  {
    id: '2',
    title: 'Dados bancários',
  },
  {
    id: '3',
    title: 'Acessos a plataforma',
  },
];

const tableContent = {
  colorOne: '#0f0',
  colorTwo: '#f00',
  colorThree: '#00f',
};

const data = Object.keys(tableContent).map((i) => ({
  key: i,
  title: i,
  color: tableContent[i],
}));

const Tabs = ({ tableContent, scrollX }) => (
  <View
    style={{
      backgroundColor: `${tableContent}`,
      width: 50,
      height: 50,
    }}
  />
);

const Settings: React.FC = () => {
  const navigation = useNavigation();
  const [screen, setScreen] = useState('1');
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const [name, setName] = useState('Nome Sobrenome');
  const [phone, setPhone] = useState('(81) 99999-9999');
  const [email, setEmail] = useState('email@empres.com.br');
  const [password, setPassword] = useState('Senha');
  const [company, setCompany] = useState('Nome da empresa');
  const [CNPJ, setCNPJ] = useState('03.938.957/0001-71');
  const [nickname, setNickname] = useState('Apelido da conta');
  const { signOut } = useAuth();

  return (
    <DefaultScreen
      exit
      title="Configurações"
      subtitle="Informações do seu perfil e configurações de acesso."
    >
      <TabContainer>
        <FlatList
          data={TabOptions}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <TabButton onPress={() => setScreen(item.id)}>
              <TabTitle onFocus={item.id === screen}>
                {item.title}
              </TabTitle>
            </TabButton>
          )}
        />
      </TabContainer>
      {screen === '1' && (
      <>
        <InfoCard>
          <HeaderContainer>
            <CardTitle>Dados pessoais</CardTitle>
            <ButtonContainer onPress={() => navigation.navigate('EditUser')}>
              <>
                <IconContainer source={require('../../assets/icons/edit.png')} />
                <IconLabel>Editar</IconLabel>
              </>
            </ButtonContainer>
          </HeaderContainer>
          <AppDivisor width={100} height={1} color="#EBEBEB" />
          <CardContent>
            <AppInput
              edit={false}
              typeOfTextContent="name"
              caps="words"
              typeOfKeyboard="default"
              placeHolder={name}
              fillInput={setName}
              label="Nome"
            />
            <AppInput
              edit={false}
              typeOfTextContent="name"
              caps="words"
              typeOfKeyboard="default"
              placeHolder={phone}
              fillInput={setPhone}
              label="Celular"
            />
            <AppInput
              edit={false}
              typeOfTextContent="name"
              caps="words"
              typeOfKeyboard="default"
              placeHolder={email}
              fillInput={setEmail}
              label="Email"
            />
            <AppInput
              edit={false}
              typeOfTextContent="name"
              caps="words"
              typeOfKeyboard="default"
              placeHolder={password}
              fillInput={setPassword}
              label="Senha"
            />
          </CardContent>
        </InfoCard>
        <InfoCard>
          <HeaderContainer>
            <CardTitle>Dados da empresa</CardTitle>
          </HeaderContainer>
          <AppDivisor width={100} height={1} color="#EBEBEB" />
          <CardContent>
            <AppInput
              edit={false}
              typeOfTextContent="name"
              caps="words"
              typeOfKeyboard="default"
              placeHolder={company}
              fillInput={setCompany}
              label="Empresa"
            />
            <AppInput
              edit={false}
              typeOfTextContent="name"
              caps="words"
              typeOfKeyboard="default"
              placeHolder={CNPJ}
              fillInput={setCNPJ}
              label="CNPJ"
            />
          </CardContent>
        </InfoCard>
      </>
      )}
      {screen === '2' && (
      <InfoCard>
        <HeaderContainer>
          <CardTitle>Conta Bancária</CardTitle>
        </HeaderContainer>
        <AppDivisor width={100} height={1} color="#EBEBEB" />
        <AppPickerContainer>
          <DefaultLabel>Padrão</DefaultLabel>
          <AppPicker
            title={nickname}
            handleTouch={() => navigation.navigate('ChangeAccount')}
          />
        </AppPickerContainer>
        <AppDivisor width={100} height={1} color="#EBEBEB" />
        <CardContent>
          <AppInput
            edit={false}
            typeOfTextContent="name"
            caps="words"
            typeOfKeyboard="default"
            placeHolder={company}
            fillInput={setCompany}
            label="Apelido pra conta"
          />
          <AppInput
            edit={false}
            typeOfTextContent="name"
            caps="words"
            typeOfKeyboard="default"
            placeHolder={CNPJ}
            fillInput={setCNPJ}
            label="Banco"
          />
          <AppInput
            edit={false}
            typeOfTextContent="name"
            caps="words"
            typeOfKeyboard="default"
            placeHolder={company}
            fillInput={setCompany}
            label="Tipo de conta"
          />
          <AppInput
            edit={false}
            typeOfTextContent="name"
            caps="words"
            typeOfKeyboard="default"
            placeHolder={CNPJ}
            fillInput={setCNPJ}
            label="Agência"
          />
          <AppInput
            edit={false}
            typeOfTextContent="name"
            caps="words"
            typeOfKeyboard="default"
            placeHolder={company}
            fillInput={setCompany}
            label="Número da conta"
          />
          <AppInput
            edit={false}
            typeOfTextContent="name"
            caps="words"
            typeOfKeyboard="default"
            placeHolder={CNPJ}
            fillInput={setCNPJ}
            label="CPF/CNPJ"
          />
          <AppInput
            edit={false}
            typeOfTextContent="name"
            caps="words"
            typeOfKeyboard="default"
            placeHolder={company}
            fillInput={setCompany}
            label="Nome completo"
          />
        </CardContent>
      </InfoCard>
      )}
      {screen === '3' && (
      <InfoCard>
        <HeaderContainer>
          <CardTitle>Usuários Cadastrados</CardTitle>
          <ButtonContainer onPress={() => navigation.navigate('AddUser')}>
            <>
              <IconContainer source={require('../../assets/icons/plus.png')} />
              <IconLabel>Adicionar</IconLabel>
            </>
          </ButtonContainer>
        </HeaderContainer>
        <AppDivisor width={100} height={1} color="#EBEBEB" />
        <AppDivisor width={100} height={1} color="#EBEBEB" />
        <TableHeader
          CollumnOne="Nome do usuário"
          CollumnTwo="Email"
          CollumnThree="Valor Líquido"
          CollumnFour="Valor de face"
          CollumnFive="Emissão"
          CollumnSix="Vencimento"
          CollumnSeven="Status"
          MarginOne={24}
          MarginTwo={84}
          MarginThree={4}
          MarginFour={4}
          MarginFive={4}
          MarginSix={32}
          MarginSeven={18}
          primaryButtonLabel="Antecipar"
          primaryButtonAction={() => console.log('Antecipei')}
        />
        <AppDivisor width={100} height={1} color="#EBEBEB" />
        <FlatList
          data={avaliableTitlesInfo}
          scrollEnabled
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <AppDivisor width={100} height={1} color="#EBEBEB" />}
          renderItem={({ item }) => (
            <TableLine
              CollumnOne="Nome do usuário"
              CollumnTwo="email@empresa.com.br"
              CollumnThree="1.300"
              CollumnFour="1.500"
              CollumnFive="Emissão"
              CollumnSix="15/07/2021"
              CollumnSeven="Status"
              primaryButtonLabel="Antecipar"
              primaryButtonAction={() => console.log('Alterar Conta')}
            />
          )}
        />
      </InfoCard>
      )}
    </DefaultScreen>
  );
};

export default Settings;
