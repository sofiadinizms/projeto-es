/* eslint-disable import/prefer-default-export */
import styled from 'styled-components/native';
import { responsiveSize } from '../../global/styles/responsive';
import theme from '../../global/styles/theme';

type TabTitleProps = {
  onFocus?: boolean;
};

export const TabContainer = styled.View<TabTitleProps>`
  align-content: center;
  justify-content: center;
  background-color: ${theme.colors.white};
  border-radius: ${responsiveSize(8)}px;
  margin-top: ${responsiveSize(32)}px;
  margin-bottom: ${responsiveSize(8)}px;
`;

export const DefaultLabel = styled.Text`
margin: ${responsiveSize(8)}px 0;
  font-family: OpenSans_600SemiBold;
  font-size:  ${responsiveSize(16)}px;;
  color: ${theme.colors.darkGreen};
`;

export const TabButton = styled.TouchableOpacity<TabTitleProps>``;

export const TabTitle = styled.Text<TabTitleProps>`
  background-color: ${(props) => (props.onFocus ? `${theme.colors.mediumGreen}` : `${theme.colors.white}`)};
  font-family:  ${(props) => (props.onFocus ? 'OpenSans_600SemiBold' : 'OpenSans_400Regular')};
  font-size: ${responsiveSize(16)}px;
  align-items: center;
  justify-content: center;
  width: ${responsiveSize(105)}px;
  padding: ${responsiveSize(14)}px ${responsiveSize(4)}px;
  border-radius: ${responsiveSize(8)}px;
`;

export const InfoCard = styled.View`
  background-color: ${theme.colors.white};
  border-radius: ${responsiveSize(8)}px;
  margin: ${responsiveSize(24)}px 0;
`;

export const CardContent = styled.View`
  margin: ${responsiveSize(24)}px;
  align-content: space-between;
`;

export const CardTitle = styled.Text`
  margin: ${responsiveSize(24)}px;
  font-family: OpenSans_600SemiBold;
  font-size:  ${responsiveSize(16)}px;;
  color: #373435;
  align-self: flex-start;
`;

export const IconContainer = styled.Image`
  width: ${responsiveSize(16)}px;
  height: ${responsiveSize(16)}px;
  margin: 0 ${responsiveSize(8)}px;
  align-self: center;
`;

export const IconLabel = styled.Text`
  margin-right: ${responsiveSize(24)}px;
  font-family: OpenSans_400Regular;
  font-size:  ${responsiveSize(16)}px;;
  color: #373435;
  align-self: center;
`;

export const ButtonContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const HeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const AppPickerContainer = styled.View`
  margin: ${responsiveSize(24)}px;
`;
