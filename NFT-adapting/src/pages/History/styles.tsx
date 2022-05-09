/* eslint-disable import/prefer-default-export */
import styled from 'styled-components/native';
import { responsiveSize } from '../../global/styles/responsive';
import theme from '../../global/styles/theme';

type TabTitleProps = {
  onFocus?: boolean;
};

export const TabButton = styled.TouchableOpacity<TabTitleProps>``;

export const TabContainer = styled.View`
  align-content: center;
  justify-content: center;
  background-color: ${theme.colors.white};
  border-radius: ${responsiveSize(8)}px;
  margin-top: ${responsiveSize(32)}px;
  margin-bottom: ${responsiveSize(8)}px;
`;

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

export const TableInfoContainer = styled.View`
  background-color: ${theme.colors.white};
`;
