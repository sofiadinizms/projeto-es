/* eslint-disable global-require */
import React from 'react';
import { Button, FlatList, StyleSheetProperties } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DefaultScreen, DropDown, AppDivisor } from '../../components';
import { TableContainer, TableTitle } from './styles';

const QuestionsInfo = [
  {
    question: 'O que é a Passaqui Antecipa?',
    answer: 'Somos uma plataforma de antecipação de recebíveis para fornecedores diversos. Através de uma ferramenta de usabilidade simples e eficaz, nossos clientes conseguem acompanhar o processo do início ao fim através do portal ou dispositivo móvel.',
  },
  {
    question: 'Porque utilizar o Passaqui Antecipa?',
    answer: 'Além de taxas atrativas, a Passaqui disponibiliza o valor solicitado de maneira rápida, utilizando tecnologia, segurança e transparência, tudo isso na palma da sua mão.',
  },
  {
    question: 'O que preciso para me cadastrar?',
    answer: 'Para realizar o cadastro no Passaqui Antecipa, você precisará apenas informar seu e-mail e o CNPJ, faremos uma análise e após conclusão, você receberá a aprovação em seu email.',
  },
  {
    question: 'De que maneira nossas notas fiscais são disponibilizadas para antecipação?',
    answer: 'Através das nossas APIs, todas as notas fiscais são disponibilizadas para o portal do cedente, 100% de forma automática sem intervenção humana.',
  },
  {
    question: 'Quais são as taxas ofertadas?',
    answer: 'A Passaqui não possui uma taxa pré definida, após análises e acordos comerciais, disponibilizamos taxas atrativas inferiores ao que são encontradas no mercado.',
  },
  {
    question: 'Como receberei o valor que optei por antecipar?',
    answer: 'O dinheiro será transferido para sua conca corrente, da mesma forma que você receberia quando o seu cliente efetuasse o pagamento do boleto.',
  },
  {
    question: 'Essa plataforma é segura?',
    answer: 'Sim, a Passaqui utiliza as melhores práticas de segurança de dados, estamos hospedados na Microsoft Azure e em conformidade com as exigências do BACEN. Além disso a empresa também está adequada a Lei Geral de Proteção de Dados.',
  },
];

const Questions: React.FC = () => {
  const navigation = useNavigation();

  return (
    <DefaultScreen
      title="Perguntas frequentes"
      subtitle="Repostas as perguntas frequentes que nossos clientes costumam ter. Caso a dúvida permaneça entre em contato."
    >
      <TableContainer>
        <TableTitle>Perguntas frequentes</TableTitle>
        <AppDivisor width={100} height={1} color="#EBEBEB" />
        <FlatList
          data={QuestionsInfo}
          scrollEnabled
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <AppDivisor width={100} height={1} color="#EBEBEB" />}
          renderItem={({ item }) => (
            <DropDown
              question={item.question}
              answer={item.answer}
            />
          )}
        />
      </TableContainer>
    </DefaultScreen>
  );
};

export default Questions;
