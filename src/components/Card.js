import React from 'react';
import {TouchableOpacity, Image} from 'react-native';

const Card = ({item}) => {
  return (
    <TouchableOpacity style={{padding: 5, position: 'relative'}}>
      <Image
        resizeMode="cover"
        style={{height: 200, width: 120, borderRadius: 20}}
        source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}}
      />
    </TouchableOpacity>
  );
};

export default Card;
