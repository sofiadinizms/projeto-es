/* eslint-disable global-require */
/* eslint-disable no-shadow */
/* eslint-disable react/require-default-props */
import React from 'react';
import {
  ButtonContainer, LineContainer, CollumnText, IconContainer,
} from './styles';

type CardTableProps = {
  startGreen?: boolean,
  ButtonAction?: () => void,
  CollumnOne: string;
  CollumnTwo: string;
  CollumnThree: string;
};

const CardTable: React.FC<CardTableProps> = ({
  startGreen,
  ButtonAction,
  CollumnOne,
  CollumnTwo,
  CollumnThree,
}) => (
  <LineContainer>
    <CollumnText isBold={startGreen} isGreen={startGreen}>{CollumnOne}</CollumnText>
    <CollumnText>{CollumnTwo}</CollumnText>
    <CollumnText>{CollumnThree}</CollumnText>
    {ButtonAction && (
      <ButtonContainer onPress={ButtonAction}>
        <IconContainer source={require('../../assets/icons/close.png')} />
      </ButtonContainer>
    )}
  </LineContainer>
);

export default CardTable;
