import React, { useEffect, useState } from 'react';
import { RootTabScreenProps } from '../../types';
import { Text } from '../../components/Themed';
import {
  FlatList,
  StyleSheetProperties,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  View,
  Button,
  LevelText,
  ArrowContainer,
  HeaderContainer,
  TableContainer,
  TableTitle,
  IconContainer,
  RowContainer,
} from './styles';

export default function LevelTwoScreen({ navigation }: RootTabScreenProps<'LevelTwo'>) {
  const [explanation, setExplanation] = useState("Selecione os elementos do museu");
  const [statue, setStatue] = useState(false);
  const [portrait, setPortrait] = useState(false);
  const [grade, setGrade] = useState(false);
  const [nextLevel, setNextLevel] = useState(false);

  const selectStatue = () => {
    setStatue(true);
    setExplanation("NFTs está ligados a tokens não fungível representa algo específico e individual");
    NextLevel();
  }

  const selectPortrait = () => {
    setPortrait(true);
    setExplanation("Atualmente, existem plataformas que fazem a conversão de moedas fiduciárias diretamente no site. Ou seja, você coloca em real, dolar, euro ou qualquer outra.");
    NextLevel();
  }

  const selectGrade = () => {
    setGrade(true);
    setExplanation("Esqueça isso de que o NFT só pode trazer experiências no mundo virtual. Existem diversos tokens não fungíveis que dão acessos à shows, brindes e muito mais! ​");
    NextLevel();
  }

  const NextLevel = () => {
    if(statue && portrait && grade){
      setNextLevel(true);
    }
  }

  return (
    <TableContainer>
    <HeaderContainer>
      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <ArrowContainer source={require('../../assets/images/arrow-left.png')} />
      </TouchableWithoutFeedback>
      <TableTitle>Nível Dois</TableTitle>
    </HeaderContainer>
    <LevelText>{explanation}</LevelText>
      <View>
        <TouchableWithoutFeedback onPress={() => selectStatue()}>
          <IconContainer source={require('../../assets/images/planeta.png')} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => selectGrade()}>
          <IconContainer source={require('../../assets/images/stars.png')} /> 
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => selectPortrait()}>
          <IconContainer source={require('../../assets/images/planeta-terra.png')} />
        </TouchableWithoutFeedback>
      </View>
      {nextLevel && (<Button onPress={() => {navigation.navigate("LevelThree")}}>
        <RowContainer>
        <Text>
          Próximo Nível
        </Text>
        <ArrowContainer source={require('../../assets/images/arrow-right.png')} />
        </RowContainer>
      </Button>)}
  </TableContainer>
  );
};
