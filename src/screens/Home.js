import React, {useState, useEffect} from 'react';
import {View, Dimensions, ScrollView, ActivityIndicator} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

import {
  getPopularMovies,
  getUpcomingMovies,
  getPopularTv,
  getFamilyMovies,
  getDocumentary,
} from '../services/services';
import List from '../components/List';
import Error from '../components/Error';
import {Navbar} from '../components/Navbar';
import {Colors} from '../theme/Colors';

const dimentions = Dimensions.get('screen');

const Home = ({navigation}) => {
  const [movieImages, setMovieImages] = useState();
  const [popularMovies, setPopularMovies] = useState();
  const [popularTv, setPopularTv] = useState();
  const [familyMovies, setFamilyMovies] = useState();
  const [documentary, setDocumentary] = useState();
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const getData = () => {
    return Promise.all([
      getUpcomingMovies(),
      getPopularMovies(),
      getPopularTv(),
      getFamilyMovies(),
      getDocumentary(),
    ]);
  };

  const getImages = images => {
    const movieImagesArray = [];
    images.forEach(movie => {
      movieImagesArray.push(
        `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      );
    });
    return movieImagesArray;
  };

  useEffect(() => {
    getData()
      .then(
        ([
          upcomingMoviesData,
          popularMoviesData,
          popularTvData,
          familyMoviesData,
          documentaryData,
        ]) => {
          const movieArray = getImages(upcomingMoviesData);
          setMovieImages(movieArray);
          setPopularMovies(popularMoviesData);
          setPopularTv(popularTvData);
          setFamilyMovies(familyMoviesData);
          setDocumentary(documentaryData);
          setError(false);
        },
      )
      .catch(() => setError(true))
      .finally(() => setLoaded(true));
  }, []);

  return (
    <>
      {!loaded && (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size="large" color={Colors.black} />
        </View>
      )}
      {error && <Error />}
      {loaded && (
        <>
          <Navbar navigation={navigation} main={true} />
          <ScrollView>
            {movieImages && (
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
                  resizeMode={'stretch'}
                />
              </View>
            )}
            {popularMovies && (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <List title="Popular Movies" content={popularMovies} />
              </View>
            )}
            {popularTv && (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <List title="Popular TV Shows" content={popularTv} />
              </View>
            )}
            {familyMovies && (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <List title="Family Movies" content={familyMovies} />
              </View>
            )}
            {documentary && (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <List title="Documentary" content={documentary} />
              </View>
            )}
          </ScrollView>
        </>
      )}
    </>
  );
};

export default Home;
