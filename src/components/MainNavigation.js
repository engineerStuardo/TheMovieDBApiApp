import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Detail from '../screens/Detail';
import {Search} from '../components/Search';

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
    <Stack.Screen
      name="Search"
      component={Search}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);
