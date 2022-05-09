/* eslint-disable import/prefer-default-export */
import styled from 'styled-components/native';
import { responsiveSize } from '../../global/styles/responsive';
import theme from '../../global/styles/theme';

type TextProps = {
  isBold?: boolean,
  isGreen?: boolean,
}

export const CardContainer = styled.View`
  flex: 1;
`;

export const CardContent = styled.View`
  margin: ${responsiveSize(4)}px 0;
  background-color: ${theme.colors.white};
  justify-content: space-between;
  border-radius: ${responsiveSize(8)}px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 8px;
`;

export const CardText = styled.Text<TextProps>`
  font-family: ${(props) => (props.isBold ? theme.fonts.bold : theme.fonts.regular)};
  font-size: ${responsiveSize(12)}px;
  color: ${(props) => (props.isGreen ? theme.colors.darkGreen : theme.colors.darkGray)};
`;

export const CardCollumn = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
`;

export const CardLine = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;
