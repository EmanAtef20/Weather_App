import React, {useState, useCallback} from 'react';
import {
  Text, 
  FlatList, 
  TouchableOpacity,
  ImageBackground,
  View
} from 'react-native';
import _ from 'lodash';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message'

import {Routes} from '@/navigation';
import {Header, CityRow, AddCityModal} from '@/components';
import tw from '@/tw';
import {Images} from '@/assets';

export const HomeScreen = ({ navigation: { navigate } }) => {
  const [cities, setCities] = useState([
    {id: '1', name: 'London'},
    {id: '2', name: 'Vienna'},
    {id: '3', name: 'Paris'},
  ]);
  const [isModalVisible, setIsModalVisible]= useState(false);
  

  const addCity = () => {
    setIsModalVisible(true);
  }

  const rederListRow = useCallback((item) => {
    return(
      <CityRow 
      item={item} 
      onCityNameClick={() => onCityNameClickfunc(item.name)} 
      onCityHistoryClick={() => onCityHistoryClickfunc(item.name)}
      />
    )
  }, [cities]); 

  const onCityNameClickfunc = useCallback((name: string) => {
    return  navigate(Routes.CityDetails, { cityName: name});
  }, []); 

  const onCityHistoryClickfunc = useCallback((name: string) => {
    return  navigate(Routes.HistoricalData, { cityName: name});
  }, []); 

  const onSelectCityFunc = useCallback((item) => {
    const newCities = [...cities];
    const existingItem = _.find(newCities, { name: item.label});
    if (!existingItem) {
      newCities.push({
        id: `${cities.length}`, name: item.label
      })
    } else {
      showToast();
    }
    setIsModalVisible(false)
    setCities([...newCities]);
  }, [cities]); 

  const showToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: 'This is city already exist'
    });
  }

  const absoluteStyle = {
    position: 'absolute',
    bottom: 30,
    right: 20
  }

  return (
    <View style={tw`h-100% w-100%`}>
    <ImageBackground source={Images.group} resizeMode="contain" style={tw`self-end h-100% w-100%`}>
      <SafeAreaView style={tw`flex-1`}>
        <Header title={'Cities'}/>
        <FlatList
        data={cities}
        renderItem={({item}) => rederListRow(item)}
        keyExtractor={item => item?.id.toString()}
        extraData={cities}
        showsVerticalScrollIndicator={false}
        style={tw`p-4`}
        />
        <TouchableOpacity 
        style={[
          tw.style(`bg-main w-35 h-14 br-7 items-center flex-row items-center rounded-full pl-4`),
          absoluteStyle,
        ]}
        onPress={addCity}
        >
          <Text style={tw`h2-med text-white mr-4`}>+</Text>
          <Text style={tw`h2-med text-white`}>Add city</Text>
        </TouchableOpacity>
        
        <AddCityModal 
        visible={isModalVisible} 
        onClose={() => {setIsModalVisible(false)}}
        onSelectCity={(item) => {onSelectCityFunc(item)}}
        />
      </SafeAreaView>
      </ImageBackground>
      </View>
  );
};
