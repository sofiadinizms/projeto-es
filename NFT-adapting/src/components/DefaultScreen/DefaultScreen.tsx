/* eslint-disable react/require-default-props */
/* eslint-disable global-require */
import React, { useState } from 'react';
import { FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  AppButton,
  AppCard,
  AppDivisor,
  AppScreen,
  AppTitle,
} from '../index';
import { useAuth } from '../../hooks/auth';
import {
  AppSubtitle,
  CardButton,
  CardTitle,
  CardButtonContainer,
  FilterButton,
  LogoContainer,
  ExitContainer,
  HeaderContainer,
  ExitLabel,
  ExitBox,
} from './styles';

interface Cendentes {
  cnpj: string,
  idCedente: string,
  razaoSocial: string,
}

type DefaultScreenProps = {
  title: string,
  subtitle?: string,
  children?: React.ReactNode,
  exit?: boolean,
};

const DefaultScreen: React.FC<DefaultScreenProps> = ({
  title,
  subtitle,
  children,
  exit,
}) => {
  const { user, setUserData, signOut } = useAuth();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [allCedentes, setAllCedentes] = useState<Cendentes[]>(() => [] as Cendentes[]);
  const [hideView, setHideView] = useState(false);

  const turnIntoCedentes = () => {
    const teste = JSON.parse(user.arrayCedentes);
    setAllCedentes(teste);
    setShowFilterModal(!showFilterModal);
  };

  const cutName = (fullName: string) => {
    let cuttedName = fullName.substring(0, 12);
    if (fullName.length > 12) {
      cuttedName += '...';
    }
    return cuttedName;
  };

  const [displayCedenteName, setDisplayCedenteName] = useState(`${cutName(user.currentRazaoSocial)}`);
  const [displayCedenteId, setDisplayCedenteId] = useState(user.currentIdCedente);

  const changeCedente = async (idCedente: string, razaoSocialCedente: string) => {
    const name = razaoSocialCedente.slice(1);

    await AsyncStorage.removeItem('@PassAqui:currentIdCedente');
    await AsyncStorage.removeItem('@PassAqui:currentRazaoSocial');
    await AsyncStorage.setItem('@PassAqui:currentIdCedente', idCedente.toString());
    await AsyncStorage.setItem('@PassAqui:currentRazaoSocial', name);
    setDisplayCedenteName(razaoSocialCedente);
    setDisplayCedenteId(idCedente);
    setUserData();
    setShowPasswordModal(!showPasswordModal);
    setShowFilterModal(!showFilterModal);
  };

  return (
    <AppScreen>
      <HeaderContainer>
        <LogoContainer source={require('../../assets/logo.png')} />
        {exit ? (
          <ExitBox onPress={() => signOut()}>
            <>
              <ExitContainer source={require('../../assets/icons/exit.png')} />
              <ExitLabel>Sair</ExitLabel>
            </>
          </ExitBox>
        ) : (
          <>
            <ExitBox onPress={() => turnIntoCedentes()}>
              <>
                <ExitContainer source={require('../../assets/icons/exchange.png')} />
                <ExitLabel>{cutName(displayCedenteName)}</ExitLabel>
              </>
            </ExitBox>
          </>
        )}
      </HeaderContainer>
      <AppTitle titleText={title} />
      <AppSubtitle>{subtitle}</AppSubtitle>
      <>
        {children}
      </>
      <AppCard isVisible={showFilterModal}>
        <CardTitle>Selecione o cedente desejado</CardTitle>
        <CardButtonContainer>
          <FlatList
            data={allCedentes}
            scrollEnabled
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <AppDivisor width={100} height={1} color="#EBEBEB" />}
            renderItem={({ item }) => (
              <CardButton onPress={() => {
                changeCedente(item.idCedente, item.razaoSocial);
              }}
              >
                <FilterButton>{item.razaoSocial}</FilterButton>
              </CardButton>
            )}
          />
          <AppButton
            title="Voltar"
            width={70}
            background
            backgroundColor="#CFDFDA"
            handleButton={() => {
              setShowFilterModal(!showFilterModal);
            }}
          />
        </CardButtonContainer>
      </AppCard>
    </AppScreen>
  );
};

export default DefaultScreen;
