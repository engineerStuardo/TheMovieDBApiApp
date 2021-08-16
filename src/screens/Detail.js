import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  ActivityIndicator,
  Modal,
  Pressable,
} from 'react-native';
import StarRating from 'react-native-star-rating';
import dateformat from 'dateformat';
import VideoPlayer from 'react-native-video-controls';

import {getMovie} from '../services/services';
import PlayButton from '../components/PlayButton';

const placeHolderImage = require('../assets/images/placeholder.png');
const {height} = Dimensions.get('screen');

const Detail = ({route, navigation}) => {
  const {movieDetail} = route.params;

  const [detail, setDetail] = useState();
  const [loaded, setLoaded] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    getMovie(movieDetail.id)
      .then(movieData => {
        setDetail(movieData);
      })
      .catch(err => console.log(err))
      .finally(() => setLoaded(true));
  }, []);

  const videoShown = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <>
      {!loaded && <ActivityIndicator size="large" color="#808080" />}
      {loaded && (
        <View>
          <ScrollView>
            <Image
              resizeMode="cover"
              style={{height: height / 2}}
              source={
                detail.poster_path
                  ? {
                      uri: `https://image.tmdb.org/t/p/w500${detail.poster_path}`,
                    }
                  : placeHolderImage
              }
            />
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <View style={{position: 'absolute', top: -25, right: 20}}>
                <PlayButton handlePress={videoShown} />
              </View>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: 'bold',
                  marginTop: 30,
                  marginBottom: 10,
                  paddingRight: 15,
                  paddingLeft: 15,
                }}>
                {detail.title}
              </Text>
              {detail.genres && (
                <View
                  style={{
                    flexDirection: 'row',
                    alignContent: 'center',
                    marginTop: 20,
                    marginBottom: 20,
                  }}>
                  {detail.genres.map(genre => (
                    <Text
                      key={genre.id}
                      style={{marginRight: 10, fontWeight: 'bold'}}>
                      {genre.name}
                    </Text>
                  ))}
                </View>
              )}
              <StarRating
                disabled={true}
                maxStars={5}
                rating={detail.vote_average / 2}
                fullStarColor={'gold'}
                starSize={30}
              />
              <Text style={{padding: 15}}>{detail.overview}</Text>
              <Text
                style={{
                  fontWeight: 'bold',
                }}>{`Release date: ${dateformat(
                detail.release_date,
                'mmmm dS, yyyy',
              )}`}</Text>
            </View>
          </ScrollView>
          <Modal animationType="slide" visible={modalVisible}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <VideoPlayer
                onBack={videoShown}
                navigator={navigation}
                onEnd={videoShown}
                source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
              />
            </View>
          </Modal>
        </View>
      )}
    </>
  );
};

export default Detail;
