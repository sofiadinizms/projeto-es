import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';

import {
  AnalisingTitles,
  AvaliableTitles,
  CreatePassword,
  CurrentOperations,
  EditUser,
  ForgotPassword,
  Login,
  History,
  Questions,
  Settings,
} from '../pages';

const { Navigator, Screen } = createStackNavigator();

const AppRoutes: React.FC = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen name="Login" component={Login} />
    <Screen name="ForgotPassword" component={ForgotPassword} />
    <Screen name="CreatePassword" component={CreatePassword} />
    <Screen name="AnalisingTitles" component={AnalisingTitles} />
    <Screen name="AvaliableTitles" component={AvaliableTitles} />
    <Screen name="CurrentOperations" component={CurrentOperations} />
    <Screen name="Settings" component={Settings} />
    <Screen name="History" component={History} />
    <Screen name="Questions" component={Questions} />
  </Navigator>
);

export default AppRoutes;
