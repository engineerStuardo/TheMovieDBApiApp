import React from 'react';
import {Text, View, Dimensions, FlatList} from 'react-native';

import Card from './Card';

const List = ({title, content}) => {
  return (
    <View style={{marginTop: 25}}>
      <View>
        <Text style={{fontSize: 20, fontWeight: 'bold', paddingBottom: 20}}>
          {title}
        </Text>
      </View>
      <View>
        <FlatList
          data={content}
          renderItem={({item}) => <Card item={item} />}
          horizontal={true}
        />
      </View>
    </View>
  );
};

export default List;
