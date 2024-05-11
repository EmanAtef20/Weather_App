import {useNavigation} from '@react-navigation/native';

import {RootStackParamListPropsType, RootStackParamListType} from './types';

export const Navigation = () => {
  const navigation =
    useNavigation<
      RootStackParamListPropsType<keyof RootStackParamListType>['navigation']
    >();

  return {
    navigation,
  };
};
