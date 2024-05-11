import React from 'react';
import {Text,View, TouchableOpacity, Image} from 'react-native';
import {Images} from '@/assets';
import tw from '@/tw';

type Props = {
  item: {
    name: string
  };
  onCityNameClick: Function,
  onCityHistoryClick: Function
};

export const CityRow = ({
  item: { name },
  onCityNameClick = () => {},
  onCityHistoryClick = () => {}
}: Props) => {
  return (
    <View style={tw`flex-row justify-between  h-14`}>
        <TouchableOpacity 
        style={tw`flex-row`}
        onPress={() => onCityNameClick()}
        >
          <Image
            source={Images.location}
            style={tw`w-7 h-7 mr-8`}
            resizeMode="contain"
          />
          <Text style={tw`h3-bold`}>
            {name}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {onCityHistoryClick()}}>
          <Image
            source={Images.info}
            style={tw`w-7 h-7`}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
  );
};
