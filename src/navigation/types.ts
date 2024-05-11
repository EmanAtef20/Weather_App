import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import {Routes} from '@/navigation';

export type RootStackParamListType = {
  [Routes.Home]: undefined;
  [Routes.CityDetails]: undefined;
  [Routes.HistoricalData]: undefined
};

export type RootStackParamListPropsType<
  T extends keyof RootStackParamListType,
> = NativeStackScreenProps<RootStackParamListType, T>;
