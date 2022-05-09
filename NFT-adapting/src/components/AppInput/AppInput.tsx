/* eslint-disable react/require-default-props */
import React from 'react';
import AppDivisor from '../AppDivisor';
import { Container, InputLabel, MainInput } from './styles';

type PlaceHolderProps = {
  placeHolder?: string;
  fillInput: (value: string) => void;
  caps?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  hidePassword?: boolean;
  autoCorrection?: boolean;
  typeOfKeyboard?: 'default' | 'email-address' | 'numeric' | undefined;
  typeOfTextContent?: 'none' | 'name' | 'emailAddress' | undefined;
  valueToShow?: string;
  complete?: 'name' | 'email' | 'password' | 'tel' | 'off' | undefined;
  label?: string;
  edit?: boolean | true;
};

const AppInput: React.FC<PlaceHolderProps> = ({
  placeHolder,
  edit,
  caps,
  autoCorrection,
  hidePassword,
  typeOfKeyboard,
  typeOfTextContent,
  valueToShow,
  complete,
  label,
  fillInput,
}) => {
  const handleChange = (text: string) => {
    fillInput(text);
  };
  return (
    <Container>
      {label ? <InputLabel>{label}</InputLabel> : <></>}
      <MainInput
        autoCompleteType={complete}
        value={valueToShow}
        placeholder={placeHolder}
        autoCapitalize={caps}
        autoCorrect={autoCorrection}
        secureTextEntry={hidePassword}
        keyboardType={typeOfKeyboard}
        textContentType={typeOfTextContent}
        onChangeText={handleChange}
        editable={edit}
      />
      <AppDivisor color="#7f7f7f" height={1.5} width={100} />
    </Container>
  );
};

export default AppInput;
