/* eslint-disable react/require-default-props */
import React from 'react';
import { DivisorLine, DivisorContainer } from './styles';

type DivisorProps = {
  width?: number;
  height?: number;
  color?: string;
};

const AppDivisor: React.FC<DivisorProps> = ({ width, height, color }: DivisorProps) => (
  <>
    <DivisorContainer>
      <DivisorLine width={width} height={height} color={color} />
    </DivisorContainer>
  </>
);

export default AppDivisor;
