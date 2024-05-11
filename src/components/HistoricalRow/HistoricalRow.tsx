import React from 'react';
import {Text,View, Pressable, Image} from 'react-native';

import tw from '@/tw';
import { formateDate } from '@/utils/helpers';

type Props = {
  item: {
    weather: [{icon: string, description: string}];
    dt: number;
    main: {temp: number};
  };
 onRowClick: Function
};

export const HistoricalRow = ({
  item: { },
  onRowClick = () => {},
}: Props) => {
  console.log('item', item);
  
  return(
    null
  );
};
