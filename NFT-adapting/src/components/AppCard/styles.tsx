/* eslint-disable import/prefer-default-export */
import styled from 'styled-components/native';
import { BlurView } from 'expo-blur';
import { responsiveSize } from '../../global/styles/responsive';
import theme from '../../global/styles/theme';

export const CardContainer = styled(BlurView).attrs({
  intensity: 80,
  tint: 'dark',
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const CardContent = styled.View`
  height: 70%;
  width: 90%;
  margin: ${responsiveSize(16)}px;
  padding: ${responsiveSize(16)}px;
  background-color: ${theme.colors.white};
  border-radius: ${responsiveSize(8)}px;
  align-items: center;
`;
