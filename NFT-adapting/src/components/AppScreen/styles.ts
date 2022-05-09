import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { responsiveSize } from '../../global/styles/responsive';

export const ScreenContainer = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Constants.statusBarHeight}px;
`;

export const View = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  padding-right: ${responsiveSize(24)}px;
  padding-left: ${responsiveSize(24)}px;
  padding-bottom: ${responsiveSize(40)}px;
  background-color: #EBEbEb;
`;
