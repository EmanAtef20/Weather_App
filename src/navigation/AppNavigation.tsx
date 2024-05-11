import 'moment/locale/ar';

import {
  DefaultTheme,
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {Routes} from '@/navigation';
import {HomeScreen, CityDetails, HistoricalData} from '@/screens';
import {RootStackParamListType} from '.';

const customThem = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};

export const AppNavigation = () => {
  const Stack = createNativeStackNavigator<RootStackParamListType>();
  const navigationRef = useNavigationContainerRef();

  return (
    <NavigationContainer theme={customThem} ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={Routes.Home}>
        <Stack.Screen name={Routes.Home} component={HomeScreen} />
        <Stack.Screen
          name={Routes.CityDetails}
          component={CityDetails}
        />
        <Stack.Screen name={Routes.HistoricalData} component={HistoricalData} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
