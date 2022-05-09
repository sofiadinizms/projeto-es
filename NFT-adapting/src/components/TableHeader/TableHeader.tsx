/* eslint-disable no-shadow */
/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { ButtonContainer, CheckboxContainer, LineContainer, CollumnText, HeaderContainer } from './styles';
import AppButton from '../AppButton';

type TableHeaderProps = {
  checkbox?: boolean;
  handleCheckboxChange?: () => void;
  primaryButtonLabel?: string;
  primaryButtonAction?: () => void,
  secondaryButtonLabel?: string;
  secondaryButtonAction?: () => void,
  HideButton?: boolean;
  AddSpace?: boolean;
  DateSecondCollumn?: boolean;
  CollumnOne: string;
  CollumnTwo: string;
  CollumnThree: string;
  CollumnFour: string;
  CollumnFive: string;
  CollumnSix: string;
  CollumnSeven?: string;
  MarginOne: number;
  MarginTwo: number;
  MarginThree: number;
  MarginFour: number;
  MarginFive: number;
  MarginSix: number;
  MarginSeven?: number;
};

const TableHeader: React.FC<TableHeaderProps> = ({
  checkbox,
  handleCheckboxChange,
  primaryButtonLabel,
  primaryButtonAction,
  secondaryButtonLabel,
  secondaryButtonAction,
  HideButton,
  AddSpace,
  DateSecondCollumn,
  CollumnOne,
  CollumnTwo,
  CollumnThree,
  CollumnFour,
  CollumnFive,
  CollumnSix,
  CollumnSeven,
  MarginOne,
  MarginTwo,
  MarginThree,
  MarginFour,
  MarginFive,
  MarginSix,
  MarginSeven,
}) => {
  const [data, setData] = useState('valor');

  return (
    <HeaderContainer>
      <LineContainer>
        {checkbox && (
          <CheckboxContainer>
            <BouncyCheckbox
              size={16}
              fillColor="#115F49"
              unfillColor="#FEFEFE"
              iconStyle={{ borderColor: '#373435', borderRadius: 4 }}
              onPress={handleCheckboxChange}
            />
          </CheckboxContainer>
        )}
        <CollumnText space={MarginOne}>{CollumnOne}</CollumnText>
        {DateSecondCollumn && (<CollumnText space={MarginSix}>{CollumnSix}</CollumnText>)}
        <CollumnText space={MarginTwo}>{CollumnTwo}</CollumnText>
        <CollumnText space={MarginThree}>{CollumnThree}</CollumnText>
        <CollumnText space={MarginFour}>{CollumnFour}</CollumnText>
        <CollumnText space={MarginFive}>{CollumnFive}</CollumnText>
        {!DateSecondCollumn && (<CollumnText space={MarginSix}>{CollumnSix}</CollumnText>)}
        {CollumnSeven && (
          <CollumnText space={MarginSeven}>{CollumnSeven}</CollumnText>
        )}
        {primaryButtonLabel && (
          <AppButton
            title={primaryButtonLabel}
            shadow
            background={!HideButton}
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
              background={!HideButton}
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
          title=" "
          shadow
          handleButton={primaryButtonAction}
          width={8}
          height={10}
        />
        )}
      </LineContainer>
    </HeaderContainer>
  );
};

export default TableHeader;
