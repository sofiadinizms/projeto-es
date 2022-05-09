/* eslint-disable import/prefer-default-export */
import styled from 'styled-components/native';
import { responsiveSize } from '../../global/styles/responsive';
import theme from '../../global/styles/theme';

type ButtonProps = {
  placeholderSize?: number;
  height?: number;
  edit?: boolean;
};

export const ChooseButton = styled.TouchableOpacity<ButtonProps>`
  background-color: ${theme.colors.mediumGreen};
  font-size: ${responsiveSize(16)}px;
  padding: 0 ${responsiveSize(10)}px;
  border-radius: 8px;
  width: ${(props) => (props.edit ? responsiveSize(300) : responsiveSize(200))}px;
  height: ${(props) => (props.height ? responsiveSize(props.height) : responsiveSize(32))}px;
  margin: ${(props) => (props.edit ? responsiveSize(24) : 0)}px ;
  justify-content: center;
`;

export const ButtonText = styled.Text<ButtonProps>`
  font-family: OpenSans_400Regular;
  font-size: ${(props) => (props.placeholderSize ? responsiveSize(props.placeholderSize) : responsiveSize(16))}px;
  color: rgba(19, 19, 19, 0.5);
  align-self: flex-start;
  justify-content: center;
  width: 90%;
`;

export const ButtonContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Arrow = styled.Image`
  width: ${responsiveSize(16)}px;
  height: ${responsiveSize(16)}px;
  align-self: center;
  justify-content: flex-end;
`;

export const ImageContainer = styled.View`
  align-self: center;
  margin-left: 5px;
`;
