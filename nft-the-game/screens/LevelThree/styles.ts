import styled from 'styled-components/native';
import { responsiveSize } from '../../global/style/responsive';
import theme from '../../global/style/theme';

export const View = styled.View`
  flex: 1;
  background-color: ${theme.colors.mediumGray};
  align-items: center;
  justify-content: center;
  border-radius: ${responsiveSize(10)}px;
  height: ${responsiveSize(400)}px;
`;

export const Button = styled.TouchableOpacity`
  width: 80%;
  margin: ${responsiveSize(8)}px;
  padding: ${responsiveSize(8)}px;
  border-radius: 5px;
  border: 2px;
  border-width: 1px;
  border-color: "grey";
`;

export const TableContainer = styled.ScrollView`
  background-color: ${theme.colors.lightGreen};
  padding-bottom: ${responsiveSize(50)}px;
  border-radius: 8px;
  padding: ${responsiveSize(12)}px;
  flex: 1;
`;

export const TableTitle = styled.Text`
  padding: ${responsiveSize(8)}px;
  color: ${theme.colors.darkGray};
  font-family: ${theme.fonts.bold};
  font-size: ${responsiveSize(24)}px;
  font-weight: 700;
`;

export const LevelText = styled.Text`
  padding: ${responsiveSize(8)}px;
  color: ${theme.colors.darkGray};
  font-family: ${theme.fonts.bold};
  font-size: ${responsiveSize(16)}px;
  font-weight: 500;
`;

export const CardQuestion = styled.View`
  font-family: ${theme.fonts.bold};
  font-size: ${responsiveSize(16)}px;
`;

export const ArrowContainer = styled.Image`
  width: ${responsiveSize(16)}px;
  height: ${responsiveSize(16)}px;
  align-self: center;
  justify-content: center;
`;

export const IconContainer = styled.Image`
  width: ${responsiveSize(100)}px;
  height: ${responsiveSize(100)}px;
  margin: ${responsiveSize(8)}px;
`;

export const HeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: ${responsiveSize(32)}px;
  margin-bottom: ${responsiveSize(24)}px;
  margin-right: ${responsiveSize(32)}px;
`;

export const RowContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  justify-content: space-evenly;
`;

export const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

