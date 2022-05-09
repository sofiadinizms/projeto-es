/* eslint @typescript-eslint/no-empty-interface: "off" */

import 'styled-components';

import theme from './theme';

export type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    colors: {
      darkGreen: string;
      lightGreen: string;
      white: string;
      black: string;
      darkGray: string;
      mediumGray: string;
      backgroundGray: string;
    };

    fonts: {
      titleText: {
        family: string;
        size: string;
      };
      text: {
        family: string;
        size: string;
      };
    };
  }
}
