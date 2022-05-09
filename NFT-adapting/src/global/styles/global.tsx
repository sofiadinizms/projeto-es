/* eslint-disable import/prefer-default-export */
import Constants from 'expo-constants';
import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const SafeScreen = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.backgroundGray};
  color: ${(props) => props.theme.colors.black};
  padding-top: ${Number(
    Platform.OS === 'android' ? Constants.statusBarHeight : 0,
  )}px;
`;
