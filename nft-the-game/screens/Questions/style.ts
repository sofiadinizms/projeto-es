/* eslint-disable import/prefer-default-export */
import styled from 'styled-components/native';
import { responsiveSize } from '../../global/style/responsive';
import theme from '../../global/style/theme';

export const TableContainer = styled.View`
  background-color: ${theme.colors.white};
  border-radius: 8px;
  margin-top: ${responsiveSize(24)}px;
  margin-bottom: ${responsiveSize(100)}px;
`;

export const TableTitle = styled.Text`
  padding: ${responsiveSize(8)}px;
  margin-top: ${responsiveSize(8)}px;
  margin-bottom: ${responsiveSize(8)}px;
  margin-right: ${responsiveSize(32)}px;
  color: ${theme.colors.darkGray};
  font-family: ${theme.fonts.bold};
  font-size: ${responsiveSize(16)}px;
`;

export const CardQuestion = styled.View`
  font-family: ${theme.fonts.bold};
  font-size: ${responsiveSize(14)}px;
`;
