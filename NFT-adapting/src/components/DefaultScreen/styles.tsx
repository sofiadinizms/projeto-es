import styled from 'styled-components/native';
import { responsiveSize } from '../../global/styles/responsive';
import theme from '../../global/styles/theme';

export const LogoContainer = styled.Image`
  width: ${responsiveSize(120)}px;
  height: ${responsiveSize(40)}px;
  margin-top: ${responsiveSize(20)}px;
  margin-bottom: ${responsiveSize(35)}px;
`;

export const ExitContainer = styled.Image`
  width: ${responsiveSize(24)}px;
  height: ${responsiveSize(26)}px;
  margin-top: ${responsiveSize(20)}px;
  margin-bottom: ${responsiveSize(35)}px;
`;

export const ScreenTitle = styled.Text`
  font-family: KlavikaBold;
  font-size: 25px;
  color:  #373435;
  align-self: flex-start;
`;

export const AppSubtitle = styled.Text`
  font-family: OpenSans_400Regular;
  font-size: 14px;
  color: #373435;
  align-self: flex-start;
`;

export const HeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ExitLabel = styled.Text`
  font-family: OpenSans_400Regular;
  font-size:${responsiveSize(16)}px;
  color: ${theme.colors.darkGray};
  margin: 0 0 14px 4px;
`;

export const ExitBox = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FilterButton = styled.Text`
  font-family: OpenSans_400Regular;
  font-size: ${responsiveSize(16)}px;
  color: #373435;
  align-self: center;
  margin: ${responsiveSize(8)}px;
`;

export const CardButton = styled.TouchableOpacity``;

export const CardTitle = styled.Text`
  font-family: OpenSans_600SemiBold;
  font-size: ${responsiveSize(24)}px;
  color: #373435;
  align-self: flex-start;
  margin-bottom: ${responsiveSize(24)}px;
`;

export const CardButtonContainer = styled.View`
  margin: ${responsiveSize(24)}px 0 0;
  align-items: center;
  width: 100%;
`;

export const InputContainer = styled.View`
  justify-content: center;
  margin: ${responsiveSize(8)}px;
`;
