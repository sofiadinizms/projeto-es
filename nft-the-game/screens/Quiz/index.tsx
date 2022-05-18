import React, { useEffect, useState } from 'react';
import { RootTabScreenProps } from '../../types';
import { Text } from '../../components/Themed';
import {
  Answer,
  View,
  Title,
  Button,
} from './styles';

export default function QuizScreen({ navigation }: RootTabScreenProps<'Quiz'>) {
  const [points, setPoints] = useState(0);
  const [question, setQuestion] = useState(1);

  const RightAnswer = () => {
    setQuestion(question + 1);
    setPoints(points + 1);
  }

  const WrongAnswer = () => {
    setQuestion(question + 1);
  }

  return (
    <View>
      {question === 1 && (
        <>
        <Title>
          {question} - O que significa NFT?
        </Title>
        <Button onPress={() => {WrongAnswer()}}>
            <Answer>
              a) Taxa Funcionamento de Network
            </Answer>
          </Button>
          <Button onPress={() => {WrongAnswer()}}>
            <Answer>
              b) Nova forma de transmissão
            </Answer>
          </Button><Button onPress={() => {RightAnswer()} }>
            <Answer>
              c) Token não-fungível
            </Answer>
          </Button><Button onPress={() => {WrongAnswer()}}>
            <Answer>
              d) Near Fungible Token
            </Answer>
          </Button>
          <Button onPress={() => {WrongAnswer()}}>
            <Answer>
              e) Nova tecnologia de ferramentas
            </Answer>
          </Button>
          </>
        )}
        {question === 2 && (
        <><Title>
          {question} - Quais das seguintes indústrias estão envolvidas com NFTs?
        </Title><Button onPress={() => {WrongAnswer()}}>
            <Answer>
              a) Entretenimento
            </Answer>
          </Button><Button onPress={() => {WrongAnswer()}}>
            <Answer>
              b) Moda
            </Answer>
          </Button><Button onPress={() => {WrongAnswer()} }>
            <Answer>
              c) Arte
            </Answer>
          </Button><Button onPress={() => {RightAnswer()}}>
            <Answer>
              d) Todas as opções
            </Answer>
          </Button></>
        )}
        {question === 3 && (
        <><Title>
          {question} - O que significa "mintear um NFT"?
        </Title><Button onPress={() => {RightAnswer()}}>
            <Answer>
              a) Criar um NFT
            </Answer>
          </Button><Button onPress={() => {WrongAnswer()}}>
            <Answer>
              b) Investir em crypto minteação
            </Answer>
          </Button><Button onPress={() => {WrongAnswer()} }>
            <Answer>
              c) Adquirir novos NFTs
            </Answer>
          </Button><Button onPress={() => {WrongAnswer()}}>
            <Answer>
              d) Vender um NFT em um marketplace
            </Answer>
          </Button></>
        )}
        {question === 4 && (
        <>
        <Title>
          {question} - Qual dos métodos abaixo é uma maneira
          insegura de se manter um NFT?
        </Title>
        <Button onPress={() => {WrongAnswer()}}>
            <Answer>
              a) Blockchain Ethereum
            </Answer>
          </Button><Button onPress={() => {WrongAnswer()}}>
            <Answer>
              b) IPFS
            </Answer>
          </Button><Button onPress={() => { RightAnswer() } }>
            <Answer>
              c) Servidor centralizado
            </Answer>
            </Button>
            </>
        )}
        {question === 5 && (
        <><Title>
          {question} - Qual é o padrão técnico para NFTs na blockchain Ethereum?
        </Title><Button onPress={() => {WrongAnswer()}}>
            <Answer>
              a) ERC-127
            </Answer>
          </Button><Button onPress={() => {WrongAnswer()}}>
            <Answer>
              b) NFT-101
            </Answer>
          </Button><Button onPress={() => {RightAnswer()}}>
            <Answer>
              c) ERC-721
            </Answer>
          </Button><Button onPress={() => {WrongAnswer()}}>
            <Answer>
              d) ETH-10K
            </Answer>
          </Button></>
        )}
        {question === 6 && (
        <><Title>
          {question} - Qual das opções a seguir é o método padrão para informar aos aplicativos onde encontrar os metadados de um determinado item?
        </Title><Button onPress={() => {RightAnswer()}}>
            <Answer>
              a) TokenURI
            </Answer>
          </Button><Button onPress={() => {WrongAnswer()}}>
            <Answer>
              b) TokenReturnNow
            </Answer>
          </Button><Button onPress={() => { 
            WrongAnswer() } }>
            <Answer>
              c) ERC-721
            </Answer>
          </Button><Button onPress={() => {WrongAnswer()}}>
            <Answer>
              d) {`metadata`}
            </Answer>
          </Button></>
        )}
        {question === 7 && (
        <><Title>
          {question} - O que é uma criptomoeda ?
        </Title><Button onPress={() => {WrongAnswer()}}>
            <Answer>
              a) Um tipo de portal
            </Answer>
          </Button><Button onPress={() => {WrongAnswer()}}>
            <Answer>
              b) Um vírus de computador
            </Answer>
          </Button><Button onPress={() => { 
            RightAnswer() } }>
            <Answer>
              c) Um tipo de dinheiro
            </Answer>
          </Button></>
        )}
        {question === 8 && (
        <><Title>
          {question} - O que é uma blockchain ?
        </Title><Button onPress={() => {WrongAnswer()}}>
            <Answer>
              a) Um tipo de corrente
            </Answer>
          </Button><Button onPress={() => {WrongAnswer()}}>
            <Answer>
              b) Um vírus de computador
            </Answer>
          </Button><Button onPress={() => { 
            RightAnswer() } }>
            <Answer>
              c) Um tipo criptomoeda
            </Answer>
          </Button></>
        )}
        {question === 9 && (
        <><Title>
          {question} - É possível comprar memes com criptomoedas?
        </Title><Button onPress={() => { RightAnswer()}}>
            <Answer>
              a) Sim
            </Answer>
          </Button><Button onPress={() => {WrongAnswer()}}>
            <Answer>
              b) Não
            </Answer>
          </Button></>
        )}
        {question === 10 && (
        <>
          <Title>
            {question} - NFT diz respeito a que?
          </Title>
          <Button onPress={() => { RightAnswer()}}>
            <Answer>
              a) Uma categoria de CRIPTOMOEDAS, focadas em ativos únicos.
            </Answer>
          </Button>
          <Button onPress={() => {WrongAnswer()}}>
            <Answer>
              b) Nova forma de transmissão de dados, segura.
            </Answer>
          </Button>
          <Button onPress={() => {WrongAnswer()}}>
            <Answer>
              c) Ferramenta utilizada unicamente em jogos virtuais.
            </Answer>
          </Button>
          </>
        )}
        {question === 11 && (
        <>
          <Title>
            {question} - NFT  está relacionado a que?
          </Title>
          <Button onPress={() => {WrongAnswer()}}>
            <Answer>
              a) Transmissão instantânea de mensagens.
            </Answer>
          </Button>
          <Button onPress={() => { RightAnswer()}}>
            <Answer>
              b) A Tokens não fungível representa algo específico e individual
            </Answer>
          </Button>
          <Button onPress={() => {WrongAnswer()}}>
            <Answer>
              c) A formação de uma internet de ponta que revolucionará o mundo
            </Answer>
          </Button>
          </>
        )}
        {question === 12 && (
        <>
          <Title>
            {question} - Quem pode investir em NFT?
          </Title>
          <Button onPress={() => {WrongAnswer()}}>
            <Answer>
              a) Só grandes investidores mundiais
            </Answer>
          </Button>
          <Button onPress={() => { RightAnswer()}}>
            <Answer>
              b) É necessário entender que o investimento está sujeito à alta volatilidade tanto do jogo, por exemplo, quanto do mercado.
            </Answer>
          </Button>
          <Button onPress={() => {WrongAnswer()}}>
            <Answer>
              c) Qualquer pessoa, é fácil
            </Answer>
          </Button>
          </>
        )}
        {question === 13 && (
        <>
          <Title>
            {question} - Qual o principal valor do NFT?
          </Title>
          <Button onPress={() => {WrongAnswer()}}>
            <Answer>
              a) O valor emocional agregado
            </Answer>
          </Button>
          <Button onPress={() => { RightAnswer()}}>
            <Answer>
              b) O valor da confiança na autenticidade
            </Answer>
          </Button>
          <Button onPress={() => {WrongAnswer()}}>
            <Answer>
              c) Poder ser copiado e transmitido para todos.
            </Answer>
          </Button>
          </>
        )}
        {question === 14 && (
        <>
          <Title>
            {question} - Existe relação entre dados e valores realizada pela NFT ?
          </Title>
          <Button onPress={() => {WrongAnswer()}}>
            <Answer>
              a) Não, impossível
            </Answer>
          </Button>
          <Button onPress={() => {WrongAnswer()}}>
            <Answer>
              b) Às vezes.
            </Answer>
          </Button>
          <Button onPress={() => { RightAnswer()}}>
            <Answer>
              c) Sim, é possível por causa de uma tecnologia chamada Blockchain
            </Answer>
          </Button>
          </>
        )}
        {question === 15 && (
        <>
          <Title>
            {question} - Quem pode criar um NFT?
          </Title>
          <Button onPress={() => {WrongAnswer()}}>
            <Answer>
              a) Somente o especialista da área de Tecnologia digital.
            </Answer>
          </Button>
          <Button onPress={() => {WrongAnswer()}}>
            <Answer>
              b) Apenas os programadores de jogos virtuais
            </Answer>
          </Button>
          <Button onPress={() => { RightAnswer()}}>
            <Answer>
              c) Pode ser criado por qualquer pessoa, afinal praticamente tudo no meio digital pode virar um NFT
            </Answer>
          </Button>
          </>
        )}
        {question === 16 && (
        <>
          <Title>
            {question} - Os NFTs podem ser copiados?
          </Title>
          <Button onPress={() => {WrongAnswer()}}>
            <Answer>
              a) Sim, foram criados para isso.
            </Answer>
          </Button>
          <Button onPress={() => {WrongAnswer()}}>
            <Answer>
              b) Somente quando perdem o valor
            </Answer>
          </Button>
          <Button onPress={() => { RightAnswer()}}>
            <Answer>
              c) Não, são projetados para dar a você algo que não pode ser copiado
            </Answer>
          </Button>
          </>
        )}
        {question === 17 && (
        <>
          <Title>
            {question} - O que NFT representa virtualmentes?
          </Title>
          <Button onPress={() => {RightAnswer()}}>
            <Answer>
              a) Podem representar virtualmente qualquer tipo de item, seja ele real ou intangível
            </Answer>
          </Button>
          <Button onPress={() => {WrongAnswer()}}>
            <Answer>
              b) Apenas emoticons trocados em mensagens instantâneas
            </Answer>
          </Button>
          <Button onPress={() => {WrongAnswer()}}>
            <Answer>
              c) Todo tipo de mensagem trocada
            </Answer>
          </Button>
          </>
        )}
        {question === 18 && (
        <>
        {
          points === 0 && (
            <Title>
            Poxa! É sempre tempo de aprender.
            Tente novamente
          </Title>
          )
        }
        {
          points <= 5 && (
            <Title>
            Você acertou {points} perguntas.
            Tente novamente
          </Title>
          )
        }
        {
          points > 5 && points <= 10 && (
          <Title>
            Boa! Você acertou {points} perguntas
          </Title>
          )
        }
        {
          points > 10 && points <= 15 && (
          <Title>
            Muito bem! Você acertou {points} perguntas
          </Title>
          )
        }
        {
          points > 15 && (
          <Title>
            Parabéns! Você é um gênio e acertou {points} perguntas
          </Title>
          )
        }
          <Button onPress={() => {navigation.navigate("TabOne")}}>
            <Answer>
              Voltar
            </Answer>
          </Button>
        </>
        )}
    </View>
  );
};
