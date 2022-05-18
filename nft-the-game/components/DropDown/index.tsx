/* eslint-disable global-require */
/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import {
  Answer,
  AnswerContainer,
  ArrowContainer,
  CardContainer,
  CardQuestion,
  QuestionContainer,
} from './styles';

type CardsProps = {
    question: string;
    answer: string;
};

const DropDown: React.FC<CardsProps> = ({
  question,
  answer,
}) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <TouchableWithoutFeedback onPress={() => setShowAnswer(!showAnswer)}>
      <CardContainer>
        <QuestionContainer>
          <CardQuestion>{question}</CardQuestion>
          {(showAnswer ? <ArrowContainer source={require('../../assets/images/arrow-down.png')} /> : <ArrowContainer source={require('../../assets/images/arrow-up.png')} />)}
        </QuestionContainer>
        {showAnswer && (
          <AnswerContainer>
            <Answer>{answer}</Answer>
          </AnswerContainer>
        )}
      </CardContainer>
    </TouchableWithoutFeedback>
  );
};

export default DropDown;
