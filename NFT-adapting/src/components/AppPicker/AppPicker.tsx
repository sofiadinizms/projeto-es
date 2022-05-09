/* eslint-disable react/require-default-props */
/* eslint-disable global-require */
import React from 'react';

import {
  Arrow,
  ChooseButton,
  ButtonText,
  ButtonContent,
  ImageContainer,
} from './styles';

type SelectForwarderButtonProps = {
  handleTouch?: () => void;
  title: string;
  placeholderSize?: number;
  height?: number;
  edit?: boolean;
};

const AppPicker: React.FC<SelectForwarderButtonProps> = ({
  handleTouch,
  title,
  placeholderSize,
  height,
  edit,
}) => (
  <>
    <ChooseButton
      onPress={handleTouch}
      placeholderSize={placeholderSize}
      height={height}
    >
      <ButtonContent>
        <ButtonText numberOfLines={1} placeholderSize={placeholderSize} edit={edit}>
          {title}
        </ButtonText>
        <ImageContainer>
          <Arrow source={require('../../assets/icons/arrowDown.png')} />
        </ImageContainer>
      </ButtonContent>
    </ChooseButton>
  </>
);

export default AppPicker;
