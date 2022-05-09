/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/prefer-default-export */
import { Dimensions } from 'react-native';

export const responsiveSize = (fontPx: number) => {
  const font = (fontPx * 4.05) / 30;
  const { width } = Dimensions.get('window');
  const tempHeight = (16 / 9) * width;
  return Math.sqrt(tempHeight ** 2 + width ** 2) * (font / 100);
};
