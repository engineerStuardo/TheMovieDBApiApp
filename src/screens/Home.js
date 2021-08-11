import React, {useState, useEffect} from 'react';
import {Text, View, Dimensions} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

import {getPopularMovies, getUpcomingMovies} from '../services/services';

const dimentions = Dimensions.get('screen');

const Home = () => {
  const [movieImages, setMovieImages] = useState('');
  const [error, setError] = useState(false);

  const upcomingMoviesRequest = async () => {
    try {
      const upcomingMovies = await getUpcomingMovies();
      const movieImagesArray = [];
      upcomingMovies.forEach(movie => {
        movieImagesArray.push(
          `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        );
      });
      setMovieImages(movieImagesArray);
      setError(false);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    upcomingMoviesRequest();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <SliderBox
        images={movieImages}
        autoplay={true}
        circleLoop={true}
        sliderBoxHeight={dimentions.height / 1.5}
        dotStyle={{height: 0}}
      />
    </View>
  );
};

export default Home;