/* eslint-disable import/prefer-default-export */
import styled from 'styled-components/native';
import { responsiveSize } from '../../global/styles/responsive';

export const SimpleText = styled.Text`
    font-size: 12px;
    font-family: OpenSans_400Regular;
    color: #373435;
    text-align: left;
    margin-bottom: ${responsiveSize(40)}px;
`;

export const Container = styled.View`
    margin-bottom: ${responsiveSize(60)}px;
`;
