/* eslint-disable global-require */
import React from 'react';
import styled from 'styled-components/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from '../global/styles/theme';
import { AppDivisor } from '../components';
import {
  AvaliableTitles,
  AnalisingTitles,
  CurrentOperations,
  History,
  Settings,
  Questions,
} from '../pages';

type TabProps = {
  focused: boolean;
};

const TabIcon = styled.Image.attrs<TabProps>((props) => ({
  tintColor: !props.focused
    ? theme.colors.darkGreen
    : theme.colors.darkGray,
  resizeMode: 'contain',
}))<TabProps>`
  width: 24px;
  height: 24px;
`;

const Tab = createBottomTabNavigator();
const TabNavigator: React.FC = () => (
  <Tab.Navigator
    initialRouteName="AvaliableTitles"
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: theme.colors.darkGreen,
      tabBarInactiveTintColor: theme.colors.darkGray,
      tabBarShowLabel: false,
      tabBarStyle: {
        height: 56,
        backgroundColor: theme.colors.backgroundGray,
        marginBottom: 0,
      },
    }}
  >
    <Tab.Screen
      name="AvaliableTitles"
      component={AvaliableTitles}
      options={{
        tabBarIcon: ({ focused }) => (
          <>
            <TabIcon
              source={require('../assets/icons/check.png')}
              focused={focused}
              style={{
                marginBottom: 8,
                tintColor: !focused
                  ? theme.colors.darkGray
                  : theme.colors.darkGreen,
              }}
            />
            { focused && (<AppDivisor width={48} height={4} />)}
          </>
        ),
      }}
    />
    <Tab.Screen
      name="CurrentOperations"
      component={CurrentOperations}
      options={{
        tabBarIcon: ({ focused }) => (
          <>
            <TabIcon
              source={require('../assets/icons/cicle.png')}
              focused={focused}
              style={{
                marginBottom: 8,
                tintColor: !focused
                  ? theme.colors.darkGray
                  : theme.colors.darkGreen,
              }}
            />
            { focused && (<AppDivisor width={48} height={4} />)}
          </>
        ),
      }}
    />
    <Tab.Screen
      name="AnalisingTitles"
      component={AnalisingTitles}
      options={{
        tabBarIcon: ({ focused }) => (
          <>
            <TabIcon
              source={require('../assets/icons/clock.png')}
              focused={focused}
              style={{
                marginBottom: 8,
                tintColor: !focused
                  ? theme.colors.darkGray
                  : theme.colors.darkGreen,
              }}
            />
            { focused && (<AppDivisor width={48} height={4} />)}
          </>
        ),
      }}
    />
    <Tab.Screen
      name="Historic"
      component={History}
      options={{
        tabBarIcon: ({ focused }) => (
          <>
            <TabIcon
              source={require('../assets/icons/historic.png')}
              focused={focused}
              style={{
                marginBottom: 8,
                tintColor: !focused
                  ? theme.colors.darkGray
                  : theme.colors.darkGreen,
              }}
            />
            { focused && (<AppDivisor width={48} height={4} />)}
          </>
        ),
      }}
    />
    {/* <Tab.Screen
      name="Settings"
      component={Settings}
      options={{
        tabBarIcon: ({ focused }) => (
          <>
            <TabIcon
              source={require('../assets/icons/config.png')}
              focused={focused}
              style={{
                marginBottom: 8,
                tintColor: !focused
                  ? theme.colors.darkGray
                  : theme.colors.darkGreen,
              }}
            />
            { focused && (<AppDivisor width={48} height={4} />)}
          </>
        ),
      }}
    /> */}
  </Tab.Navigator>
);

export default TabNavigator;
