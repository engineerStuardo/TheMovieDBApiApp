import React, {useState} from 'react';
import {View, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const Search = ({navigation}) => {
  const [text, setText] = useState();

  const onsubmit = () => {
    console.log(text);
  };

  return (
    <View
      style={{
        padding: 10,
        paddingTop: 60,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View style={{flexBasis: 'auto', flexGrow: 1, paddingRight: 8}}>
        <TextInput
          style={{height: 50, padding: 8, borderWidth: 0.5, borderRadius: 15}}
          onChangeText={text => setText(text)}
          value={text}
          placeholder={'Search movie or TV Show'}
        />
      </View>
      <TouchableOpacity onPress={() => onsubmit()}>
        <Icon name={'search-outline'} size={30} color={'#000'} />
      </TouchableOpacity>
    </View>
  );
};
