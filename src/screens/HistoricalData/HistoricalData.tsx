import React, {useState, useEffect, useCallback} from 'react';
import { FlatList, Pressable, View, Image, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import _ from 'lodash';

import {useStore} from '@/store';
import {Header} from '@/components';
import {Routes} from '@/navigation';
import tw from '@/tw';
import { formateDate } from '@/utils/helpers';

export const HistoricalData = ({route: {params: {cityName}}, navigation: { navigate }} = props) => {
  const {citiesHistoricalData} = useStore(state => state.citiesData);
  const [listData, setListData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10

  useEffect(() => {
    setListData(citiesHistoricalData[cityName]);
  }, []);

  const getPagedData = (data, currentPage, itemsPerPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(0, endIndex);
  };

  const handleLoadMore = () => {
    if (currentPage * itemsPerPage < listData.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const onRowPress = useCallback((item) => {
    return  navigate(Routes.CityDetails, { cityName: cityName, isHistory: true, data: item })
  }, []); 

  const rederListRow = useCallback((item) => {
    return(
      <Pressable onPress={() => onRowPress(item)}>
      <View style={tw`flex-row items-center mb-4`}>
          <Image
              style={tw`w-12.5 h-10 mr-6`}
              source={{uri: `https://openweathermap.org/img/w/${item?.weather[0]?.icon}.png`}}
          />
          <View>
              <Text style={tw`mb-1 h3-reg`}>{formateDate(item?.dt)}</Text>
              <Text style={tw`h3-bold`}>{item?.weather[0]?.description}, {`${Math.round(item?.main?.temp - 273)} C`}</Text>
          </View>
      </View>
  </Pressable>
    );
  }, []); 

  return (
      <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
        <Header title={`${cityName} historical`} back/>
        {listData && listData.length > 0 && 
        <FlatList
        data={[...getPagedData(listData, currentPage, itemsPerPage)]}
        renderItem={({item}) => rederListRow(item)}
        keyExtractor={item => item?.id.toString()}
        extraData={listData}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.5}
        onEndReached={handleLoadMore}
        style={tw`mt-6.5 pr-5 pl-5`}
        />
        }
      </SafeAreaView>
  );
};
