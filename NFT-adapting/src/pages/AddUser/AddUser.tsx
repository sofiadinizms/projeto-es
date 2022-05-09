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
  CollumnContainer,
  TabContainer,
  TabTitle,
  InfoCard,
  IconContainer,
  IconLabel,
  HeaderText,
  PickerContainer,
  SmallTitle,
  SmallInfo,
  InfoContainer,
} from './styles';

const AccountNickname = [
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

const AddUser: React.FC = () => {
  const navigation = useNavigation();
  const [showAccess, setShowAccess] = useState(false);
  const [selectedAccess, setSelectedAccess] = useState('Tipo de acesso 1');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  return (
    <DefaultScreen
      title="Adicionar usuário"
    >
      <InfoCard>
        <CardContent>
          <AppInput
            typeOfTextContent="name"
            caps="words"
            typeOfKeyboard="default"
            fillInput={setName}
            label="Nome do usuário"
          />
          <AppInput
            typeOfTextContent="name"
            caps="words"
            typeOfKeyboard="default"
            fillInput={setEmail}
            label="Email"
          />
          <AppInput
            typeOfTextContent="name"
            caps="words"
            typeOfKeyboard="default"
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
              data={AccountNickname}
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
              title="Adicionar"
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

export default AddUser;
