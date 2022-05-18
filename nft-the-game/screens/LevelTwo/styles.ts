import styled from 'styled-components/native';
import { responsiveSize } from '../../global/style/responsive';
import theme from '../../global/style/theme';

export const View = styled.View`
  flex: 1;
  background-color: #888;
  align-items: center;
  justify-content: center;
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
