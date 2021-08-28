import React from 'react';
import {View, TouchableOpacity, Image, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const {width} = Dimensions.get('screen');

export const Navbar = ({navigation, main}) => {
  return (
    <View style={{position: 'absolute', top: 25, left: 10, zIndex: 999999}}>
      {main ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: width,
            paddingRight: 25,
            alignItems: 'center',
          }}>
          <Image
            style={{width: 50, height: 50}}
            source={require('../assets/images/movies.png')}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <Icon name={'search-outline'} size={30} color={'#fff'} />
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name={'chevron-back'} size={40} color={'#fff'} />
        </TouchableOpacity>
      )}
    </View>
  );
};
