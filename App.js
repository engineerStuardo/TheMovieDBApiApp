import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';

import {getPopularMovies} from './services/services';

const App = () => {
  const [movie, setMovie] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    getPopularMovies()
      .then(movies => {
        setMovie(movies[0]);
        setError(false);
      })
      .catch(e => setError(e));
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Movie name: {movie.original_title}</Text>
      <Text>Language: {movie.original_language}</Text>
      <Text>Release Date: {movie.release_date}</Text>
      {error && <Text style={{color: 'red'}}>Error in the server</Text>}
    </View>
  );
};

export default App;
