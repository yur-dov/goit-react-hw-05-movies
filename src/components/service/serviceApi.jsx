import axios from 'axios';

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

async function fetchActorsList(movieId) {
  const response = await axios.get(`/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);
  return response.data;
}

async function fetchReviews(movie_id) {
  const response = await axios.get(
    `/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data;
}

export async function fetchDetailsMovie(movieId) {
  const response = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
}
const api = {
  fetchTrendingMovie,
  searchFilms,
  fetchActorsList,
  fetchReviews,
  fetchDetailsMovie,
}
export default api;