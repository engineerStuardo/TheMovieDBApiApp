import React from 'react';
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {Colors} from '../theme/Colors';

const PlayButton = ({handlePress}) => {
  return (
    <Pressable
      onPress={() => handlePress()}
      style={{
        alignContent: 'center',
        borderRadius: 50,
        width: 50,
        padding: 10,
        backgroundColor: Colors.primary,
      }}>
      <Icon name={'caret-forward-outline'} size={30} color={Colors.white} />
    </Pressable>
  );
};

export default PlayButton;
