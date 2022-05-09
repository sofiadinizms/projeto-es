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
  font-family: OpenSans_400Regular;
  font-size: 14px;
  color: #373435;
`;

export const CardValue = styled.Text`
  font-family: KlavikaBold;
  font-size: ${responsiveSize(30)}px;
  color:  #373435;
  align-self: flex-start;
`;

export const LimitCard = styled.View`
  width: 100%;
  background-color: #FEFEFE;
  margin: ${responsiveSize(24)}px 0 ${responsiveSize(24)}px 0;
  padding: ${responsiveSize(10)}px;
  display: flex;
  flex-direction: row;
  border-radius: 12px;
  align-self: center;
  justify-content: space-between;
`;

export const CardVerticalDivisor = styled.View`
  width: 1px;
  height: ${responsiveSize(78)}px;
  background-color: #707070;
`;

export const CardInfo = styled.View`
  flex-direction: column;
  padding: ${responsiveSize(10)}px;
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
  margin-bottom: ${responsiveSize(150)}px;
`;

export const TableTitle = styled.Text`
  margin-top: ${responsiveSize(8)}px;
  margin-bottom: ${responsiveSize(8)}px;
  margin-right: ${responsiveSize(32)}px;
  color: ${theme.colors.darkGray};
  font-family: ${theme.fonts.bold};
  font-size: ${responsiveSize(16)}px;
`;

export const CardsContainer = styled.View`
  margin: ${responsiveSize(40)}px 0 ${responsiveSize(4)}px 0;
`;
