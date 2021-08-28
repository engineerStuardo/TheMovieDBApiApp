import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const Navbar = ({navigation}) => {
  return (
    <View style={{position: 'absolute', top: 25, left: 10, zIndex: 999999}}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name={'chevron-back'} size={40} color={'#fff'} />
      </TouchableOpacity>
    </View>
  );
};
