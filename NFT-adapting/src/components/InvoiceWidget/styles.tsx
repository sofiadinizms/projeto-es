/* eslint-disable no-nested-ternary */
import styled from 'styled-components/native';
import { responsiveSize } from '../../global/styles/responsive';

export const Container = styled.TouchableOpacity`
  padding: 8px;
  height: ${responsiveSize(100)}px;
  width: 100%;
  border-radius: 6px;
  background-color: #CFDFDA;
`;

export const InfoContainer = styled.TouchableOpacity`
  border: 2px dashed #115F49;
  border-radius: 6px;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ButtonTitle = styled.Text`
  color: #115F49;
  font-size: 14px;
  font-family: 'OpenSans_600SemiBold';
`;
