/* eslint-disable no-shadow */
/* eslint-disable react/require-default-props */
import React, { Component, useState } from 'react';
import { DataTable } from 'react-native-paper';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {
  FlatList, StyleSheet, View, ScrollView,
} from 'react-native';
import { ButtonContainer, LineContainer, CollumnText } from './styles';
import AppButton from '../AppButton';

type TableLineProps = {
  checkbox?: boolean;
  handleCheckboxChange?: () => void;
  primaryButtonLabel?: string;
  primaryButtonAction?: () => void,
  secondaryButtonLabel?: string;
  secondaryButtonAction?: () => void,
  DateSecondCollumn?: boolean;
  AddSpace?: boolean;
  CollumnOne: string;
  CollumnTwo: string;
  CollumnThree: string;
  CollumnFour: string;
  CollumnFive: string;
  CollumnSix: string;
  CollumnSeven: string;
};

const TableLine: React.FC<TableLineProps> = ({
  checkbox,
  handleCheckboxChange,
  primaryButtonLabel,
  primaryButtonAction,
  secondaryButtonLabel,
  secondaryButtonAction,
  DateSecondCollumn,
  AddSpace,
  CollumnOne,
  CollumnTwo,
  CollumnThree,
  CollumnFour,
  CollumnFive,
  CollumnSix,
  CollumnSeven,
}) => {
  const [data, setData] = useState('valor');

  return (
    <LineContainer>
      {checkbox && (
        <BouncyCheckbox
          size={16}
          fillColor="#115F49"
          unfillColor="#FEFEFE"
          iconStyle={{ borderColor: '#373435', borderRadius: 4 }}
          onPress={handleCheckboxChange}
        />
      )}
      <CollumnText isBold isGreen>{CollumnOne}</CollumnText>
      {DateSecondCollumn && (<CollumnText>{CollumnSix}</CollumnText>)}
      <CollumnText>{CollumnTwo}</CollumnText>
      <CollumnText isGreen>{CollumnThree}</CollumnText>
      <CollumnText isGreen>{CollumnFour}</CollumnText>
      <CollumnText>{CollumnFive}</CollumnText>
      {!DateSecondCollumn && (<CollumnText>{CollumnSix}</CollumnText>)}
      <CollumnText>{CollumnSeven}</CollumnText>
      {primaryButtonLabel && (
        <AppButton
          title={primaryButtonLabel}
          shadow
          background
          backgroundColor="#EBEBEB"
          handleButton={primaryButtonAction}
          width={15}
          height={10}
        />
      )}
      <ButtonContainer />
      {secondaryButtonLabel && (
        <>
          <AppButton
            title={secondaryButtonLabel}
            shadow
            background
            backgroundColor="#CFDFDA"
            handleButton={secondaryButtonAction}
            width={16}
            height={10}
          />
          <ButtonContainer />
        </>
      )}
      {AddSpace && (
        <AppButton
          title="aaaaaaaaaaaaaaaaaaaa"
          shadow
          handleButton={primaryButtonAction}
          width={15}
          height={10}
        />
      )}
    </LineContainer>
  );
};

export default TableLine;
