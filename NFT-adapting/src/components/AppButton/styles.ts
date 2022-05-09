/* eslint-disable no-nested-ternary */
import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

type ButtonProps = {
  width?: number;
  height?: number;
  backgroundColor?: string;
  shadow?: boolean;
  background?: boolean;
};

export const Container = styled.TouchableOpacity<ButtonProps>`
  padding: 12px 16px;
  height: ${(props) => (props.height ? props.height : 40)}px;
  width: ${(props) => (props.width ? props.width : 100)}%;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: ${(props) => (props.background ? props.backgroundColor
    : 'transparent')};
`;

export const ButtonTitle = styled.Text<ButtonProps>`
  color: #373435;
  font-size: 14px;
  font-family: 'OpenSans_600SemiBold';
`;
