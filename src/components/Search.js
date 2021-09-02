import React, {useState} from 'react';
import {View, TouchableOpacity, TextInput, FlatList, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {searchMovieTv} from '../services/services';
import Card from '../components/Card';
import {Colors} from '../theme/Colors';
import {Navbar} from '../components/Navbar';

export const Search = ({navigation}) => {
  const [text, setText] = useState();
  const [searchResults, setSearchResults] = useState();
  const [error, setError] = useState(false);

  const onsubmit = () => {
    Promise.all([searchMovieTv('movie', text), searchMovieTv('tv', text)])
      .then(([movies, tv]) => {
        const data = [...movies, ...tv];
        setSearchResults(data);
      })
      .catch(error => setError(true));
  };

  return (
    <View style={{flex: 1}}>
      <Navbar navigation={navigation} search />
      <View
        style={{
          padding: 10,
          paddingTop: 80,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{flexBasis: 'auto', flexGrow: 1, paddingRight: 8}}>
          <TextInput
            style={{height: 50, padding: 8, borderWidth: 0.5, borderRadius: 15}}
            onChangeText={text => setText(text)}
            value={text}
            placeholder={'Search movie or TV Show'}
            onSubmitEditing={() => onsubmit()}
          />
        </View>
        <TouchableOpacity onPress={() => onsubmit()}>
          <Icon name={'search-outline'} size={30} color={Colors.primary} />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, padding: 5}}>
        {searchResults && searchResults.length > 0 && (
          <FlatList
            numColumns={3}
            data={searchResults}
            renderItem={({item}) => <Card item={item} />}
            keyExtractor={item => item.id}
          />
        )}
        {searchResults && searchResults.length === 0 && (
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text>No results matching your criteria.</Text>
            <Text>Try different keywords.</Text>
          </View>
        )}
        {!searchResults && (
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text>Type something to start searching</Text>
          </View>
        )}
        {error && <Error />}
      </View>
    </View>
  );
};
