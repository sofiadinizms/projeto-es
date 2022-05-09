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
  CardTable,
  DefaultScreen,
  TableHeader,
  TableLine,
  DropDown,
} from '../../components';
import {
  Access,
  AccessButton,
  AccessContainer,
  CardButtonContainer,
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
    nickname: 'Apelido 1',
  },
  {
    id: '1',
    nickname: 'Apelido 2',
  },
  {
    id: '1',
    nickname: 'Apelido 3',
  },
  {
    id: '1',
    nickname: 'Apelido 4',
  },
  {
    id: '1',
    nickname: 'Apelido 5',
  },
];

const OperationID: React.FC = () => {
  const navigation = useNavigation();
  const [showAccess, setShowAccess] = useState(false);
  const [selectedAccess, setSelectedAccess] = useState('Apelido 1');

  return (
    <DefaultScreen
      title="ID da operação: 78549661879"
    >
      <InfoCard>
        <CardContent>
          <HeaderText>
            Títulos
          </HeaderText>
          <AppDivisor width={100} height={1} color="#EBEBEB" />
          <CardButtonContainer>
            <CardTable
              CollumnOne="Número da nota"
              CollumnTwo="Valor a ser adiantado"
              CollumnThree="Valor da nota"
            />
            <AppDivisor width={100} height={1} color="#EBEBEB" />
            <CardTable
              startGreen
              CollumnOne="28745938"
              CollumnTwo="1.300"
              CollumnThree="2.000"
            />
            <AppDivisor width={100} height={1} color="#EBEBEB" />
            <CardTable
              startGreen
              CollumnOne="28745938"
              CollumnTwo="1.300"
              CollumnThree="2.000"
            />
            <AppDivisor width={100} height={1} color="#EBEBEB" />
            <CardTable
              startGreen
              CollumnOne="28745938"
              CollumnTwo="1.300"
              CollumnThree="2.000"
            />
            <AppDivisor width={100} height={1} color="#EBEBEB" />
            <CardTable
              startGreen
              CollumnOne="3 notas"
              CollumnTwo="3.900"
              CollumnThree="6.000"
            />
          </CardButtonContainer>
          <PrimaryButtonContainer>
            <AppButton
              title="Assinar"
              background
              backgroundColor="#CFDFDA"
              handleButton={() => navigation.goBack()}
            />
          </PrimaryButtonContainer>
          <SecondaryButtonContainer>
            <AppButton
              title="Alterar conta"
              background
              backgroundColor="#EBEBEB"
              handleButton={() => navigation.navigate('ChangeAccount')}
            />
          </SecondaryButtonContainer>
        </CardContent>
      </InfoCard>
    </DefaultScreen>
  );
};

export default OperationID;
