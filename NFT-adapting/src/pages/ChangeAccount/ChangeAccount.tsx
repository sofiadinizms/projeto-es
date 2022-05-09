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

const ChangeAccount: React.FC = () => {
  const navigation = useNavigation();
  const [showAccess, setShowAccess] = useState(false);
  const [selectedAccess, setSelectedAccess] = useState('Apelido 1');

  return (
    <DefaultScreen
      title="Deseja alterar a conta?"
    >
      <InfoCard>
        <CardContent>
          <HeaderText>
            Você só vai alterar a conta desse recebimento,
            para definir outra conta como padrão ir em configurações.
          </HeaderText>
          <CardTitle>Adiantamento</CardTitle>
          <InfoContainer>
            <CollumnContainer>
              <SmallTitle>ID da operação</SmallTitle>
              <SmallInfo>78549661879</SmallInfo>
            </CollumnContainer>
            <CollumnContainer>
              <SmallTitle>Valor da total</SmallTitle>
              <SmallInfo>1.500</SmallInfo>
            </CollumnContainer>
          </InfoContainer>
          <PickerContainer>
            <PickerLabel>Apelido da conta</PickerLabel>
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
                  setSelectedAccess(item.nickname);
                  setShowAccess(!showAccess);
                }}
                >
                  <Access>{item.nickname}</Access>
                </AccessButton>
              )}
            />
          </AccessContainer>
          )}
          <PrimaryButtonContainer>
            <AppButton
              title="Alterar"
              background
              backgroundColor="#CFDFDA"
              handleButton={() => navigation.navigate('CurrentOperations')}
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

export default ChangeAccount;
