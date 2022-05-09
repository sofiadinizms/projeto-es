/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components/native';
import theme from '../../global/styles/theme';
import { responsiveSize } from '../../global/styles/responsive';

type TextProps = {
  space?: number
}
type ButtonProps = {
  space?: number
}

export const LineContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
`;

export const CollumnText = styled.Text<TextProps>`
  margin: 8px ${(props) => (props.space ? responsiveSize(props.space) : responsiveSize(8))}px;
  font-family: ${theme.fonts.regular};
  font-size: ${responsiveSize(12)}px;
  color: ${theme.colors.darkGray};
  width: ${responsiveSize(110)}px;
`;

export const HeaderContainer = styled.View`
  background-color: ${theme.colors.white};
`;

export const ButtonContainer = styled.View<ButtonProps>`
  margin-right: ${(props) => (props.space ? responsiveSize(props.space) : responsiveSize(8))}px;
`;

export const CheckboxContainer = styled.View`
  margin-left: ${responsiveSize(3)}px;
`;
