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

export default function LevelOneScreen({ navigation }: RootTabScreenProps<'LevelOne'>) {
  const [explanation, setExplanation] = useState("Selecione os elementos do museu");
  const [statue, setStatue] = useState(false);
  const [portrait, setPortrait] = useState(false);
  const [grade, setGrade] = useState(false);
  const [nextLevel, setNextLevel] = useState(false);

  const selectStatue = () => {
    setStatue(true);
    setExplanation("Você sabe como o que é NFT? Non Fungible Token, isso significa que cada NFT é único");
    NextLevel();
  }

  const selectPortrait = () => {
    setPortrait(true);
    setExplanation("Você sabia que obras de arte podem ser comparadas aos NFTs, uma vez que são elemetos insubstituíveis");
    NextLevel();
  }

  const selectGrade = () => {
    setGrade(true);
    setExplanation("Você sabia que memes também podem ser NFTs? Sim! Além disso, NFT's também podem dar acesso à Shows, brindes e ingressos");
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
      <TableTitle>Nível Um</TableTitle>
    </HeaderContainer>
    <LevelText>{explanation}</LevelText>
      <View>
        <TouchableWithoutFeedback onPress={() => selectStatue()}>
          <IconContainer source={require('../../assets/images/estatua.png')} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => selectGrade()}>
          <IconContainer source={require('../../assets/images/galeria.png')} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => selectPortrait()}>
          <IconContainer source={require('../../assets/images/monalisa.png')} /> 
        </TouchableWithoutFeedback>
      </View>
      {nextLevel && (<Button onPress={() => {navigation.navigate("LevelTwo")}}>
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
