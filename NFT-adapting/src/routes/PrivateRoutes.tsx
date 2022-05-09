import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import {
  AddUser,
  AnalisingTitles,
  AvaliableTitles,
  CreatePassword,
  CurrentOperations,
  ChangeAccount,
  EditUser,
  History,
  OperationID,
  Questions,
  Settings,
} from '../pages';

const Route = createStackNavigator();
const PrivateRoutes: React.FC = () => (
  <Route.Navigator headerMode="none">
    <Route.Screen name="AvaliableTitles" component={TabNavigator} />
    <Route.Screen name="AnalisingTitles" component={AnalisingTitles} />
    <Route.Screen name="CurrentOperations" component={CurrentOperations} />
    <Route.Screen name="ChangeAccount" component={ChangeAccount} />
    <Route.Screen name="EditUser" component={EditUser} />
    <Route.Screen name="History" component={History} />
    <Route.Screen name="AddUser" component={AddUser} />
    <Route.Screen name="Settings" component={Settings} />
    <Route.Screen name="OperationID" component={OperationID} />
    <Route.Screen name="Questions" component={Questions} />
    <Route.Screen name="CreatePassword" component={CreatePassword} />
  </Route.Navigator>
);

export default PrivateRoutes;
