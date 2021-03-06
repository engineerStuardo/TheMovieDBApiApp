import React from 'react';
import {Text, View, Dimensions, FlatList} from 'react-native';
import PropTypes from 'prop-types';

import Card from './Card';

const List = ({title, content}) => {
  return (
    <View style={{marginTop: 25}}>
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            padding: 10,
            paddingBottom: 15,
          }}>
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

List.propTypes = {
  title: PropTypes.string,
  content: PropTypes.any,
};

export default List;
