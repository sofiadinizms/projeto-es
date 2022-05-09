/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable global-require */
/* eslint-disable camelcase */
import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { StatusBar, LogBox } from 'react-native';
import NetInfo, { useNetInfo } from '@react-native-community/netinfo';
import {
  useFonts,
  OpenSans_300Light,
  OpenSans_300Light_Italic,
  OpenSans_400Regular,
  OpenSans_400Regular_Italic,
  OpenSans_600SemiBold,
  OpenSans_600SemiBold_Italic,
  OpenSans_700Bold,
  OpenSans_700Bold_Italic,
  OpenSans_800ExtraBold,
  OpenSans_800ExtraBold_Italic,
} from '@expo-google-fonts/open-sans';
import { AuthProvider } from './src/hooks/auth';
import Routes from './src/routes';

LogBox.ignoreAllLogs();
const App: React.FC = () => {
  const [user, setUser] = useState<any>();
  const [fontsLoaded] = useFonts({
    OpenSans_300Light,
    OpenSans_300Light_Italic,
    OpenSans_400Regular,
    OpenSans_400Regular_Italic,
    OpenSans_600SemiBold,
    OpenSans_600SemiBold_Italic,
    OpenSans_700Bold,
    OpenSans_700Bold_Italic,
    OpenSans_800ExtraBold,
    OpenSans_800ExtraBold_Italic,
    KlavikaBold: require('./src/assets/fonts/klavika-bold.otf'),
    KlavikaMedium: require('./src/assets/fonts/klavika-medium.otf'),
  });
  const netInfo = useNetInfo();
  if (!fontsLoaded || !netInfo.isInternetReachable) {
    return <AppLoading />;
  }

  return (
    <AuthProvider>
      <StatusBar backgroundColor="#EBEBEB" />
      <Routes />
    </AuthProvider>
  );
};

export default App;
