/* eslint-disable react/require-default-props */
/* eslint-disable global-require */
import React from 'react';
import {
  AppScreen, AppButton, AppDivisor, AppTitle,
} from '../index';
import {
  LogoContainer, LoginInfo, TitleContainer,
} from './styles';

type GenericLogoScreenProps = {
  title: string,
  primaryButtonLabel: string,
  primaryButtonAction: () => void,
  secondaryButtonLabel?: string,
  secondaryButtonAction?: () => void,
  children: React.ReactNode,
};

const GenericLogoScreen: React.FC<GenericLogoScreenProps> = ({
  title,
  primaryButtonLabel,
  primaryButtonAction,
  secondaryButtonLabel,
  secondaryButtonAction,
  children,
}) => (
  <AppScreen>
    <LogoContainer source={require('../../assets/logo.png')} />
    <LoginInfo>
      <TitleContainer>
        <AppTitle titleText={title} />
        <AppDivisor width={16} />
      </TitleContainer>
      <>{children}</>
      <AppButton
        title={primaryButtonLabel}
        background
        backgroundColor="#CFDFDA"
        handleButton={primaryButtonAction}
      />
      {secondaryButtonLabel && (
      <AppButton
        title={secondaryButtonLabel}
        background={false}
        handleButton={secondaryButtonAction}
      />
      )}
    </LoginInfo>
  </AppScreen>
);

export default GenericLogoScreen;
