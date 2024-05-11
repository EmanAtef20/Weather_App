import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text,View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Images} from '@/assets';
import tw from '@/tw';

type Props = {
  back?: boolean;
  title?: string;
};

export const Header = ({
  back,
  title,
  
}: Props) => {
  const navigation = useNavigation();

  return (
    <View style={tw`w-100% h-32 bg-main`}>
      {back &&
         <TouchableOpacity onPress={() => {
          navigation.goBack();
         }}>
          <Image
            source={Images.back}
            style={tw`w-12.5 h-12.5`}
            resizeMode="contain"
          />
        </TouchableOpacity>
      }
      <Text style={tw.style(`h1-reg ml-18`, styles.title)}>{title}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  title: {
    position: 'absolute',
    bottom: 22
  }
});
