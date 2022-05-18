/* eslint-disable global-require */
import React from 'react';
import { Button, FlatList, StyleSheetProperties } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DropDown } from '../../components';
import { TableContainer, TableTitle } from './style';

const QuestionsInfo = [
  {
    question: 'Lorem ipsum dolor ?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    question: 'Lorem ipsum dolor ?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    question: 'Lorem ipsum dolor ?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    question: 'Lorem ipsum dolor ?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    question: 'Lorem ipsum dolor ?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    question: 'Lorem ipsum dolor ?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    question: 'Lorem ipsum dolor ?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

const Questions: React.FC = () => {
  const navigation = useNavigation();

  return (
    <TableContainer>
      <TableTitle>Perguntas e respostas</TableTitle>
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
  );
};

export default Questions;
