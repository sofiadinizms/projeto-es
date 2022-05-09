import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Login, ForgotPassword, CreatePassword, EditUser,
} from '../pages';
import { useAuth } from '../hooks/auth';
import { navigationRef } from './RootNavigation';
import PrivateRoutes from './PrivateRoutes';

const Auth = createStackNavigator();

const Routes: React.FC = () => {
  const { accessToken } = useAuth();
  return (
    <NavigationContainer
      ref={navigationRef}
    >
      {(accessToken != null) ? (
        <PrivateRoutes />
      ) : (
        <Auth.Navigator headerMode="none">
          <Auth.Screen name="Login" component={Login} />
          <Auth.Screen name="ForgotPassword" component={ForgotPassword} />
        </Auth.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Routes;
