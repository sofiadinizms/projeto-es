import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { ThemeProvider } from 'styled-components';

import defaultTheme from './theme';

interface ThemeContextProps {
  toggleFontSize(fontSize: string): void;
  fontSize: number | undefined;
}

interface Theme {
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
    bigText: {
      family: string;
      size: string;
    };
    titleText: {
      family: string;
      size: string;
    };
    mediumText: {
      family: string;
      size: string;
    };
    middleText: {
      family: string;
      size: string;
    };
    normalText: {
      family: string;
      size: string;
    };
    featuredNormalText: {
      family: string;
      size: string;
    };
    text: {
      family: string;
      size: string;
    };
    featuredText: {
      family: string;
      size: string;
    };
    smallText: {
      family: string;
      size: string;
    };
  };
}

const MIN_FONT_SIZE = 1;

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

export const CustomThemeProvider: React.FC = ({ children }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [theme, setTheme] = useState<Theme>();
  const [fontSize, setFontSize] = useState<number>();

  const loadFontSize = async () => {
    const fontSize = await AsyncStorage.getItem('@passAqui:fontSize');

    if (fontSize) {
      setFontSize(Number(fontSize));
    } else {
      setFontSize(MIN_FONT_SIZE);
    }
  };

  const loadAndSetTheme = useCallback(() => {
    setTheme({
      colors: {
        darkGreen: '#115f49',
        lightGreen: '#a8cf47',
        white: '#FFFFFF',
        black: '#000000',
        darkGray: '#1A1818',
        mediumGray: '#2F2d32',
        lightGray: '#7f7f7f',
        backgroundGray: '#EBEBEB',
      },

      fonts: {
        bigText: {
          family: 'Roboto_700Bold',
          size: `${fontSize ? fontSize * 32 : MIN_FONT_SIZE * 32}px`,
        },
        titleText: {
          family: 'Roboto_700Bold',
          size: `${fontSize ? fontSize * 20 : MIN_FONT_SIZE * 20}px`,
        },
        mediumText: {
          family: 'Roboto_400Regular',
          size: `${fontSize ? fontSize * 18 : MIN_FONT_SIZE * 18}px`,
        },
        middleText: {
          family: 'Roboto_500Medium',
          size: `${fontSize ? fontSize * 28 : MIN_FONT_SIZE * 28}px`,
        },
        normalText: {
          family: 'Roboto_400Regular',
          size: `${fontSize ? fontSize * 16 : MIN_FONT_SIZE * 16}px`,
        },
        featuredNormalText: {
          family: 'Roboto_400Regular',
          size: `${fontSize ? fontSize * 16 : MIN_FONT_SIZE * 16}px`,
        },
        text: {
          family: 'Roboto_400Regular',
          size: `${fontSize ? fontSize * 14 : MIN_FONT_SIZE * 14}px`,
        },
        featuredText: {
          family: 'Roboto_400Regular',
          size: `${fontSize ? fontSize * 14 : MIN_FONT_SIZE * 14}px`,
        },
        smallText: {
          family: 'Roboto_400Regular',
          size: `${fontSize ? fontSize * 12 : MIN_FONT_SIZE * 12}px`,
        },
      },
    });
  }, [fontSize]);

  const toggleFontSize = useCallback(async (fontSize: string) => {
    await AsyncStorage.setItem('@SOnHe:fontSize', fontSize);
    setFontSize(Number(fontSize));
  }, []);

  useEffect(() => {
    loadFontSize();
  }, []);

  useEffect(() => {
    loadAndSetTheme();
  }, [fontSize, loadAndSetTheme]);

  return (
    <ThemeContext.Provider value={{ toggleFontSize, fontSize }}>
      <ThemeProvider theme={theme ? theme : defaultTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a CustomThemeProvider');
  }

  return context;
};

export default ThemeProvider;
