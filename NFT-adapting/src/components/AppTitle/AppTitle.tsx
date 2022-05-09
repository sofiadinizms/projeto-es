import React from 'react';
import { TheTitle } from './styles';

type TitleProps = {
  titleText: string;
};

const AppTitle: React.FC<TitleProps> = ({ titleText }) => (
  <>
    <TheTitle>{titleText}</TheTitle>
  </>
);

export default AppTitle;
