import styled from 'styled-components/native';
import { responsiveSize } from '../../global/style/responsive';
import theme from '../../global/style/theme';

export const View = styled.View`
  flex: 1;
  background-color: ${theme.colors.mediumGreen};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  margin: ${responsiveSize(24)}px ${responsiveSize(12)}px;
  font-size: ${responsiveSize(24)};
  font-weight: 700;
`;

export const Answer = styled.Text`
  font-size: ${responsiveSize(16)};
  font-weight: 400;
`;

export const Button = styled.TouchableOpacity`
  width: 80%;
  align-items: left;
  margin: ${responsiveSize(8)}px;
  padding: ${responsiveSize(8)}px;
  border-radius: 5px;
  border: 2px;
  border-width: 1px;
  border-color: "grey";
`;
