import React, {useEffect, useState, useCallback} from 'react';
import {
  Text, 
  View, 
  Image,
  ActivityIndicator,
  Platform
} from 'react-native';
import _ from 'lodash';
import { SafeAreaView } from 'react-native-safe-area-context';

import {Header} from '@/components';
import {useCitiesHooks} from '../Home/hooks';
import { formateDate } from '@/utils/helpers';
import tw from '@/tw';

type Props = {
  cityName: string
};

export const CityDetails = ({route: {params: {cityName, isHistory, data}}} = props) => {
  const {getDetailsLoading,getcityDetailsFunc, result, addToHistory} = useCitiesHooks();

  const [detailsData, setDetailsData] = useState({})
 
  const _getCityData = async (city: string) => {
    const response = await getcityDetailsFunc(city);
  };
 
  useEffect(() => {
    if (!isHistory) {
      _getCityData(cityName);
    }
  }, [cityName]);

  useEffect(() => {
    if (!_.isEmpty(result) && !isHistory) {
      setDetailsData(result)
      addToHistory(cityName, result);
    }
    if (isHistory && !_.isEmpty(data)) {
      setDetailsData(data)
    }
  }, [result, isHistory, data]);

  const rowData = useCallback((key: string, value: string) => {
    return(
      <View style={tw`flex-row justify-between h-6 mb-2`}>
          <Text style={tw`h3-bold`}>
             {key}
          </Text>
          <Text style={tw`h2-med text-main`}>
             {value}
          </Text>
      </View>
  );
  }, []); 

  // const rowData = (key: string, value: string) => {
  //   return(
  //       <View style={tw`flex-row justify-between h-6 mb-2`}>
  //           <Text style={tw`h3-bold`}>
  //              {key}
  //           </Text>
  //           <Text style={tw`h2-med text-main`}>
  //              {value}
  //           </Text>
  //       </View>
  //   );
  // }
  const textAbsolute = {
    position: 'absolute',
    bottom: 50,
    left: 45
  }
  const container = {
    position:'absolute',
    ...Platform.select({
      ios: {
        shadowColor: '#D6D3DE',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 7, 
        top: '20%', 
      },
      android: {
        shadowColor: "#000000",
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity:  0.17,
        shadowRadius: 3.05,
        elevation: 4,
        top: '12%', 
      },
    }),
  }

  return (
      <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
        <Header title={''} back/>
        {getDetailsLoading && (
          <ActivityIndicator size="small" color={'#2388C7'}/>
        )}
        {!_.isEmpty(detailsData) && 
        <View style={tw.style(`pr-9 pl-9 bg-white w-85% h-70% items-center rounded-md self-center`, container)}>
            <Text style={tw`h1-reg text-black text-center mt-6.5 mb-17`}>{detailsData?.name}</Text>
            <Image
              style={tw`w-18.5 h-19.25 mb-16`}
              source={{uri: `https://openweathermap.org/img/w/${detailsData?.weather[0]?.icon}.png`}}
            />
            <View style={tw`w-100%`}>
              {
                [
                  {key: "Description", value: detailsData?.weather[0]?.description},
                  {key: "Temperature", value: `${Math.round(detailsData?.main?.temp - 273)} C`},
                  {key: "Humidity", value: `${detailsData?.main?.humidity} %`},
                  {key: "Windspeed", value: `${detailsData?.wind?.speed} Km/h`},

                ].map((item) => rowData(item.key,item.value))
              }
            </View>
        </View>
        }
        <Text style={tw.style(`h4-reg text-black2 w-75% text-center`, textAbsolute)}>
        Weather information for London received on
        {!_.isEmpty(detailsData) && formateDate(detailsData?.dt)}
        </Text>
      </SafeAreaView>
  );
};
