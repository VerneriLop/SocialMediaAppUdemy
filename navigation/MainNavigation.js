import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ProfileTabTitle from '../components/ProfileTabTitle/ProfileTabTitle';
import ProfileTabContent from '../components/ProfileTabContent/ProfileTabContent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const ProfileTabs = createMaterialTopTabNavigator();

export const ProfileTabsNavigator = () => {
  return (
    <ProfileTabs.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: 'transparent',
        },
        tabBarStyle: {
          zIndex: 0,
          elevation: 0,
        },
      }}>
      <ProfileTabs.Screen
        name={'Tab1'}
        options={{
          tabBarLabel: getTabBarLabel('Photos'),
        }}
        component={ProfileTabContent}
      />
      <ProfileTabs.Screen
        name={'Tab2'}
        options={{
          tabBarLabel: getTabBarLabel('Videos'),
        }}
        component={ProfileTabContent}
      />
      <ProfileTabs.Screen
        name={'Tab3'}
        options={{
          tabBarLabel: getTabBarLabel('Saved'),
        }}
        component={ProfileTabContent}
      />
    </ProfileTabs.Navigator>
  );
};

// Siirretään tabBarLabel-funktio komponentin ulkopuolelle
const getTabBarLabel = title => {
  return ({focused}) => <ProfileTabTitle isFocused={focused} title={title} />;
};

//ProfileTabTitle cannot be inside ProfileTabsNavigator straight
//because otherwise it will cause a new function to be created
//on every render, leading to performance issues and unnecessary re-renders.
/*const getTabBarLabel = title => {
  return () => <ProfileTabTitle title={title} />;
};*/

const MainMenuNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{header: () => null, headerShown: false}}>
      <Drawer.Screen name={Routes.Home} component={Home} />
      <Drawer.Screen name={Routes.Profile} component={Profile} />
    </Drawer.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{header: () => null, headerShown: false}}
      initialRouteName={Routes.Home}>
      <Stack.Screen name={'Drawer'} component={MainMenuNavigation} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
