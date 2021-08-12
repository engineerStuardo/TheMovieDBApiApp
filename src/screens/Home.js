import React, {useState, useEffect} from 'react';
import {Text, View, Dimensions, FlatList, ScrollView} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

import {
  getPopularMovies,
  getUpcomingMovies,
  getPopularTv,
  getFamilyMovies,
  getDocumentary,
} from '../services/services';
import List from '../components/List';

const dimentions = Dimensions.get('screen');

const Home = () => {
  const [movieImages, setMovieImages] = useState('');
  const [popularMovies, setPopularMovies] = useState('');
  const [popularTv, setPopularTv] = useState('');
  const [familyMovies, setFamilyMovies] = useState('');
  const [documentary, setDocumentary] = useState('');
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

  const popularMoviesRequest = async () => {
    try {
      const popularMovies = await getPopularMovies();
      setPopularMovies(popularMovies);
      setError(false);
    } catch (error) {
      setError(error);
    }
  };

  const popularTvRequest = async () => {
    try {
      const popularTv = await getPopularTv();
      setPopularTv(popularTv);
      setError(false);
    } catch (error) {
      setError(error);
    }
  };

  const familyMoviesRequest = async () => {
    try {
      const familyMovies = await getFamilyMovies();
      setFamilyMovies(familyMovies);
      setError(false);
    } catch (error) {
      setError(error);
    }
  };

  const documentaryRequest = async () => {
    try {
      const documentary = await getDocumentary();
      setDocumentary(documentary);
      setError(false);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    upcomingMoviesRequest();
    popularMoviesRequest();
    popularTvRequest();
    familyMoviesRequest();
    documentaryRequest();
  }, []);

  return (
    <>
      <ScrollView>
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
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <List title="Popular Movies" content={popularMovies} />
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <List title="Popular TV Shows" content={popularTv} />
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <List title="Family Movies" content={familyMovies} />
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <List title="Documentary" content={documentary} />
        </View>
      </ScrollView>
    </>
  );
};

export default Home;
