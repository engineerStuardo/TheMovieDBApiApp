import axios from 'axios';

const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = '949eb751d5ca24f1d34b3041669ce02f';

export const getPopularMovies = async () => {
  const resp = await axios.get(
    `${apiUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`,
  );
  return resp.data.results;
};

export const getUpcomingMovies = async () => {
  const resp = await axios.get(
    `${apiUrl}/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`,
  );
  return resp.data.results;
};

export const getPopularTv = async () => {
  const resp = await axios.get(
    `${apiUrl}/tv/popular?api_key=${apiKey}&language=en-US&page=1`,
  );
  return resp.data.results;
};
