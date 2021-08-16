import React from 'react';
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PlayButton = ({handlePress}) => {
  return (
    <Pressable
      onPress={() => handlePress()}
      style={{
        alignContent: 'center',
        borderRadius: 50,
        width: 50,
        padding: 10,
        backgroundColor: '#4481FC',
      }}>
      <Icon name={'caret-forward-outline'} size={30} color={'white'} />
    </Pressable>
  );
};

export default PlayButton;
