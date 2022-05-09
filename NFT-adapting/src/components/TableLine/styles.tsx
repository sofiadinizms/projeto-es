/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components/native';
import theme from '../../global/styles/theme';
import { responsiveSize } from '../../global/styles/responsive';

type TextLineProps = {
  isBold?: boolean,
  isGreen?: boolean,
}

export const LineContainer = styled.View`
  background-color: ${theme.colors.white};
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  padding: 8px 0;
`;

export const CollumnText = styled.Text<TextLineProps>`
  padding: 0 24px;
  font-family: ${(props) => (props.isBold ? theme.fonts.bold : theme.fonts.regular)};
  font-size: ${responsiveSize(12)}px;
  color: ${(props) => (props.isGreen ? theme.colors.darkGreen : theme.colors.darkGray)};
  width: ${responsiveSize(150)}px;
`;

export const ButtonContainer = styled.View`
  margin-right: 24px;
`;
