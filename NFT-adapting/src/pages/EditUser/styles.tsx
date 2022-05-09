/* eslint-disable import/prefer-default-export */
import styled from 'styled-components/native';
import { responsiveSize } from '../../global/styles/responsive';
import theme from '../../global/styles/theme';

type TabTitleProps = {
  onFocus?: boolean;
};

export const TabContainer = styled.View`
  background-color: ${theme.colors.white};
  align-content: space-around;
  border-radius: ${responsiveSize(8)}px;
  padding: ${responsiveSize(2)}px ${responsiveSize(12)}px;
  margin-top: ${responsiveSize(32)}px;
  margin-bottom: ${responsiveSize(12)}px;
`;

export const TabTitle = styled.Text<TabTitleProps>`
  font-family:  ${(props) => (props.onFocus ? 'OpenSans_600SemiBold' : 'OpenSans_400Regular')};
  font-size: ${responsiveSize(16)}px;
  align-items: center;
  justify-content: center;
  width: ${responsiveSize(100)}px;
  margin: ${responsiveSize(12)}px ${responsiveSize(2)}px;
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

export const HeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const AccessContainer = styled.View`
  background-color: ${theme.colors.backgroundGray};
  border-radius: ${responsiveSize(8)}px;
  margin-top: ${responsiveSize(8)}px;
  padding: ${responsiveSize(8)}px;
`;

export const Access = styled.Text`
  color: ${theme.colors.darkGray};
  font-size: ${responsiveSize(12)}px;
  font-family: OpenSans_400Regular;
`;

export const AccessButton = styled.TouchableOpacity`
  padding: ${responsiveSize(8)}px 0;
`;

export const PrimaryButtonContainer = styled.View`
  margin: ${responsiveSize(80)}px 0 0 0;
`;

export const SecondaryButtonContainer = styled.View`
  margin: ${responsiveSize(24)}px 0 ${responsiveSize(50)}px 0;
`;

export const PickerLabel = styled.Text`
  font-size: 12px;
  font-Family: 'OpenSans_400Regular';
  color: 'rgba(55, 52, 53, 0.7)';
`;

export const PickerContainer = styled.View`
  justify-content: flex-start;
`;
