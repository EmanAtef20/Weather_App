import 'moment/locale/ar';

import {
  DefaultTheme,
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import moment from 'moment';
import React, {useEffect} from 'react';

import {Routes} from '@/navigation';
import {HomeScreen, CityDetails, HistoricalData} from '@/screens';
// import {useStore} from '@/store';
// import tw from '@/tw';

// import {appLang} from '../utils';
import {RootStackParamListType} from '.';

const customThem = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    // background: tw.color('white') as string,
  },
};

export const AppNavigation = () => {
  // moment.locale(appLang);

  const Stack = createNativeStackNavigator<RootStackParamListType>();
  const navigationRef = useNavigationContainerRef();

  // const storeLoaded = useStore(state => state._hasHydrated);

  // useEffect(() => {
  //   // storeLoaded && RNBootSplash.hide({fade: true}); // fade with custom duration
  // }, [storeLoaded]);

  // if (!storeLoaded) {
  //   return null;
  // }

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
