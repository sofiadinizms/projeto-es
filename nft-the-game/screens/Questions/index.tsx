/* eslint-disable global-require */
import React from 'react';
import {
  Button,
  FlatList,
  StyleSheetProperties,
  TouchableWithoutFeedback,
} from 'react-native';
import DropDown from '../../components/DropDown';
import { RootTabScreenProps } from '../../types';
import {
  ArrowContainer,
  HeaderContainer,
  TableContainer,
  TableTitle,
} from './style';

const QuestionsInfo = [
  {
    question: 'O que significa NFT?',
    answer: 'Token não-fungível',
  },
  {
    question: 'Quais das seguintes indústrias estão envolvidas com NFTs?',
    answer: 'Entretenimento, moda, arte e etc',
  },
  {
    question: 'O que significa "mintear um NFT"?',
    answer: 'Criar um NFT',
  },
  {
    question: 'Qual dos métodos abaixo é uma maneira insegura de se manter um NFT?',
    answer: 'Servidor centralizado',
  },
  {
    question: 'Qual é o padrão técnico para NFTs na blockchain Ethereum?',
    answer: 'ERC-721',
  },
  {
    question: 'Qual das opções a seguir é o método padrão para informar aos aplicativos onde encontrar os metadados de um determinado item?',
    answer: 'TokenURI',
  },
  {
    question: 'O que é uma criptomoeda ?',
    answer: 'Um tipo de dinheiro',
  },
  {
    question: 'O que é uma blockchain ?',
    answer: 'Um tipo criptomoeda',
  },
  {
    question: ' É possível comprar memes com criptomoedas?',
    answer: 'Sim',
  },{
    question: 'NFT diz respeito a que?',
    answer: 'Uma categoria de CRIPTOMOEDAS, focadas em ativos únicos.',
  },{
    question: 'NFT  está relacionado a que?',
    answer: 'A Tokens não fungível representa algo específico e individual',
  },{
    question: 'Quem pode investir em NFT?',
    answer: ' É necessário entender que o investimento está sujeito à alta volatilidade tanto do jogo, por exemplo, quanto do mercado.',
  },
  {
    question: 'Qual o principal valor do NFT?',
    answer: 'O valor da confiança na autenticidade',
  },{
    question: 'Existe relação entre dados e valores realizada pela NFT ?',
    answer: 'Sim, é possível por causa de uma tecnologia chamada Blockchain',
  },{
    question: 'Quem pode criar um NFT?',
    answer: 'Pode ser criado por qualquer pessoa, afinal praticamente tudo no meio digital pode virar um NFT',
  },{
    question: 'Os NFTs podem ser copiados?',
    answer: 'Não, são projetados para dar a você algo que não pode ser copiado',
  },{
    question: 'O que NFT representa virtualmentes?',
    answer: 'Podem representar virtualmente qualquer tipo de item, seja ele real ou intangível',
  },
];
export default function QuestionsScreen({ navigation }: RootTabScreenProps<'Questions'>) {

  return (
    <TableContainer>
      <HeaderContainer>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <ArrowContainer source={require('../../assets/images/arrow-left.png')} />
        </TouchableWithoutFeedback>
        <TableTitle>Perguntas e respostas</TableTitle>
      </HeaderContainer>
      <FlatList
        data={QuestionsInfo}
        scrollEnabled
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <DropDown
            question={item.question}
            answer={item.answer}
          />
        )}
      />
    </TableContainer>
  );
};
