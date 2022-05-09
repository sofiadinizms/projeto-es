import styled from 'styled-components/native';
import { responsiveSize } from '../../global/styles/responsive';

export const View = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LogoContainer = styled.Image`
  width: ${responsiveSize(260)}px;
  height: ${responsiveSize(90)}px;
  align-self: center;
  margin-top: ${responsiveSize(115)}px;
  margin-bottom: ${responsiveSize(140)}px;
`;

export const LoginInfo = styled.View`
  width: 100%;
  background-color: #FEFEFE;
  padding: ${responsiveSize(40)}px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  align-self: center;
`;

export const TitleContainer = styled.View`
  margin-bottom: ${responsiveSize(30)}px;
`;
