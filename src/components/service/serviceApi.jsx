import axios from 'axios';
// import PropTypes from 'prop-types';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '2defa68d74572c770c8e2770c2623d03';

async function fetchTrendingMovie() {
  const response = await axios.get(`/trending/all/day?api_key=${API_KEY}`);
  return response.data;
}

async function searchFilms(query) {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${query}`
  );
  return response.data;
}



const api = {
  fetchTrendingMovie,
  searchFilms
}

export default api