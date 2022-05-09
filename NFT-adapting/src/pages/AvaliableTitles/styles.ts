import styled from 'styled-components/native';
import { responsiveSize } from '../../global/styles/responsive';
import theme from '../../global/styles/theme';

export const View = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LogoContainer = styled.Image`
  width: 260px;
  height: 90px;
  align-self: center;
  margin-top: 150px;
  margin-bottom: 140px;
`;

export const LoginInfo = styled.View`
  width: 100%;
  background-color: #FEFEFE;
  padding: 40px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  align-self: center;
`;

export const TitleContainer = styled.View`
  margin-bottom: 60px;
`;

export const InputContainer = styled.View`
  margin-bottom: 60px;
`;

export const CardTitle = styled.Text`
  font-family: OpenSans_600SemiBold;
  font-size: ${responsiveSize(24)}px;
  color: #373435;
  align-self: flex-start;
  margin-bottom: ${responsiveSize(24)}px;
`;

export const CardSubtitle = styled.Text`
  font-family: OpenSans_400Regular;
  font-size: ${responsiveSize(16)}px;
  color: #373435;
  align-self: flex-start;
  margin-bottom: ${responsiveSize(16)}px;
`;

export const CardButtonContainer = styled.View`
  margin: 0 0 ${responsiveSize(24)}px;
  align-items: center;
  width: 100%;
`;

export const TableInfoContainer = styled.View`
  background-color: ${theme.colors.white};
  align-items: center;
`;

export const TableContainer = styled.View`
  background-color: ${theme.colors.white};
  border-radius: 8px;
  padding: ${responsiveSize(8)}px;
  margin-top: ${responsiveSize(24)}px;
  margin-bottom: ${responsiveSize(148)}px;
`;

export const TableTitle = styled.Text`
  margin-top: ${responsiveSize(8)}px;
  margin-bottom: ${responsiveSize(8)}px;
  margin-right: ${responsiveSize(32)}px;
  color: ${theme.colors.darkGray};
  font-family: ${theme.fonts.bold};
  font-size: ${responsiveSize(16)}px;
`;

export const ButtonContainer = styled.View`
  margin: ${responsiveSize(40)}px 0 ${responsiveSize(24)}px 0;
`;

export const CardsContainer = styled.View`
  margin: ${responsiveSize(4)}px 0 ${responsiveSize(400)}px 0;
`;

export const ControlsContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FilterButton = styled.Text`
  font-family: OpenSans_400Regular;
  font-size: ${responsiveSize(16)}px;
  color: #373435;
  align-self: center;
  margin: ${responsiveSize(8)}px;
`;
