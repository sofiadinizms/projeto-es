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

export default function LevelThreeScreen({ navigation }: RootTabScreenProps<'LevelThree'>) {
  const [explanation, setExplanation] = useState("Selecione a criptomoeda das estrelas");
  const [nextLevel, setNextLevel] = useState(false);

  const selectStatue = () => {
    setExplanation("NFT não estão limitados a experiências virtuais como a maioria das pessoas imaginam");
    NextLevel();
  }

  const NextLevel = () => {
    setNextLevel(true);
  }

  return (
    <TableContainer>
    <HeaderContainer>
      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <ArrowContainer source={require('../../assets/images/arrow-left.png')} />
      </TouchableWithoutFeedback>
      <TableTitle>Nível Três</TableTitle>
    </HeaderContainer>
    <LevelText>{explanation}</LevelText>
      <View>
        <TouchableWithoutFeedback>
          <RowContainer>
            <IconContainer source={require('../../assets/images/stars.png')} /> 
            <IconContainer source={require('../../assets/images/stars.png')} />
            <IconContainer source={require('../../assets/images/stars.png')} />
          </RowContainer>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback >
          <IconContainer source={require('../../assets/images/rocket.png')} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => NextLevel()}>
          <IconContainer source={require('../../assets/images/estrela.png')} />
        </TouchableWithoutFeedback>
      </View>
      {nextLevel && (<Button onPress={() => {navigation.navigate("Quiz")}}>
        <RowContainer>
        <Text>
          Parabéns, você está pronto para fazer nosso Quiz!
        </Text>
        <ArrowContainer source={require('../../assets/images/arrow-right.png')} />
        </RowContainer>
      </Button>)}
  </TableContainer>
  );
};
