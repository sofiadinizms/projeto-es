/* eslint-disable react/require-default-props */
import React from 'react';

import { Container, ButtonTitle } from './styles';

type AppButtonProps = {
  width?: number;
  height?: number;
  backgroundColor?: string;
  shadow?: boolean;
  background?: boolean;
  title: string;
  handleButton?: () => void;
};

const AppButton: React.FC<AppButtonProps> = ({
  handleButton,
  title,
  backgroundColor,
  width,
  height,
  shadow,
  background,
}) => (
  <>
    <Container
      onPress={handleButton}
      backgroundColor={backgroundColor}
      width={width}
      height={height}
      shadow={shadow}
      background={background}
    >
      <ButtonTitle numberOfLines={1}>
        {title}
      </ButtonTitle>
    </Container>
  </>
);

export default AppButton;
