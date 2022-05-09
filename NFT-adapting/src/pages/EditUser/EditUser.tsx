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
import {
  AppButton,
  AppInput,
  AppDivisor,
  AppPicker,
  DefaultScreen,
  TableHeader,
  TableLine,
  DropDown,
} from '../../components';
import {
  Access,
  AccessButton,
  AccessContainer,
  PrimaryButtonContainer,
  PickerLabel,
  SecondaryButtonContainer,
  CardContent,
  CardTitle,
  TabContainer,
  TabTitle,
  InfoCard,
  IconContainer,
  IconLabel,
  HeaderContainer,
  PickerContainer,
} from './styles';

const KindOfAccess = [
  {
    id: '1',
    access: 'Tipo de acesso 1',
  },
  {
    id: '1',
    access: 'Tipo de acesso 2',
  },
  {
    id: '1',
    access: 'Tipo de acesso 3',
  },
  {
    id: '1',
    access: 'Tipo de acesso 4',
  },
  {
    id: '1',
    access: 'Tipo de acesso 5',
  },
];

const EditUser: React.FC = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('Nome Sobrenome');
  const [phone, setPhone] = useState('(81) 99999-9999');
  const [email, setEmail] = useState('email@empres.com.br');
  const [showAccess, setShowAccess] = useState(false);
  const [selectedAccess, setSelectedAccess] = useState('Tipo de acesso 1');

  return (
    <DefaultScreen
      title="Editar usuário"
    >
      <InfoCard>
        <CardContent>
          <AppInput
            typeOfTextContent="name"
            caps="words"
            typeOfKeyboard="default"
            placeHolder={name}
            fillInput={setName}
            label="Nome do usuário"
          />
          <AppInput
            typeOfTextContent="name"
            caps="words"
            typeOfKeyboard="default"
            placeHolder={email}
            fillInput={setEmail}
            label="Email"
          />
          <AppInput
            typeOfTextContent="name"
            caps="words"
            typeOfKeyboard="default"
            placeHolder={phone}
            fillInput={setPhone}
            label="Celular"
          />
          <PickerContainer>
            <PickerLabel>Tipo de acesso</PickerLabel>
            <AppPicker
              edit
              title={selectedAccess}
              handleTouch={() => setShowAccess(!showAccess)}
            />
          </PickerContainer>
          { showAccess && (
          <AccessContainer>
            <FlatList
              data={KindOfAccess}
              scrollEnabled
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={() => <AppDivisor width={100} height={1} color="#FEFEFE" />}
              renderItem={({ item }) => (
                <AccessButton onPress={() => {
                  setSelectedAccess(item.access);
                  setShowAccess(!showAccess);
                }}
                >
                  <Access>{item.access}</Access>
                </AccessButton>
              )}
            />
          </AccessContainer>
          )}
          <PrimaryButtonContainer>
            <AppButton
              title="Atualizar"
              background
              backgroundColor="#CFDFDA"
              handleButton={() => navigation.goBack()}
            />
          </PrimaryButtonContainer>
          <SecondaryButtonContainer>
            <AppButton
              title="Cancelar"
              background
              backgroundColor="#EBEBEB"
              handleButton={() => navigation.goBack()}
            />
          </SecondaryButtonContainer>
        </CardContent>
      </InfoCard>
    </DefaultScreen>
  );
};

export default EditUser;
