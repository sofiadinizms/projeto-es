import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { responsiveSize } from '../../global/style/responsive';
import theme from '../../global/style/theme';

export const ScreenContainer = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Constants.statusBarHeight}px;
`;

export const View = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.background};
`;
