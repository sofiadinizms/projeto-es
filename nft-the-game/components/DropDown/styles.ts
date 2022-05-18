/* eslint-disable import/prefer-default-export */
import styled from 'styled-components/native';
import { responsiveSize } from '../../global/style/responsive';
import theme from '../../global/style/theme';

export const CardContainer = styled.View`
  background-color: ${theme.colors.white};
  margin: ${responsiveSize(8)}px;
`;

export const CardQuestion = styled.Text`
  color: ${theme.colors.darkGreen};
  font-size: ${responsiveSize(14)}px;
  font-family: OpenSans_600SemiBold;
  width: 100%;
`;

export const Answer = styled.Text`
  color: ${theme.colors.darkGray};
  font-size: ${responsiveSize(12)}px;
  font-family: OpenSans_400Regular;
`;

export const AnswerContainer = styled.View`
  background-color: ${theme.colors.background};
  border-radius: ${responsiveSize(8)}px;
  margin-top: ${responsiveSize(8)}px;
  padding: ${responsiveSize(8)}px;
`;

export const ArrowContainer = styled.Image`
  width: ${responsiveSize(16)}px;
  height: ${responsiveSize(16)}px;
  margin: 0 ${responsiveSize(8)}px;
  align-self: center;
  justify-content: flex-end;
`;

export const QuestionContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 90%;
`;
