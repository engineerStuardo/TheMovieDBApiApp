import React from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';

const placeHolderImage = require('../assets/images/placeholder.png');

const Card = ({item}) => {
  return (
    <TouchableOpacity
      style={{
        padding: 5,
        position: 'relative',
        alignItems: 'center',
        height: 200,
      }}>
      <Image
        resizeMode="cover"
        style={{height: 200, width: 120, borderRadius: 20}}
        source={
          item.poster_path
            ? {uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}
            : placeHolderImage
        }
      />
      {!item.poster_path && (
        <Text
          style={{
            position: 'absolute',
            width: 100,
            textAlign: 'center',
            bottom: 10,
          }}>
          {item.title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Card;
