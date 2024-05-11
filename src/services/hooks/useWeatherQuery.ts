import React, {useRef, useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import Toast from 'react-native-toast-message'

import {
  getCityDetailsService,
} from '@/services';

export const useWeatherQuery = () => {
  const [result, seResult] = useState({});
  const cityName = useRef('');
  const updateName = (name: string) => {
    cityName.current = name
  }
  
  const { 
    isPending: getDetailsLoading, 
    isError: getDetailsError, 
    data: getDetailsData, 
    refetch: getDetailsDataQuery,
    error } = useQuery({
    queryKey: ['getcitydetails', cityName.current],
    queryFn: async() => {
      const res=  await getCityDetailsService(cityName.current)
      if(!!res.code) {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'This is city not supported'
        });
        return;
      }
      seResult(res);
      return res;
      },
    enabled: false,
    staleTime: 0,
  })

  return {
    getDetailsLoading,
    getDetailsError,
    getDetailsData,
    getDetailsDataQuery,
    updateName,
    result
  };
};
