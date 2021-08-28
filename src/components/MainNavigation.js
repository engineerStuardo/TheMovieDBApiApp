import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Detail from '../screens/Detail';
const Stack = createNativeStackNavigator();

export const MainNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Detail"
      component={Detail}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);
