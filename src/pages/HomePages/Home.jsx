import { useState, useEffect } from 'react';
import api from '../../components/service/serviceApi'
import TrandingFilmList from '../../components/TrandingFilms/TrandingFilmList'
import css from './Home.module.css'

const Home = () => {
  const [movies, setMovie] = useState([]);

   useEffect(() => {
      api.fetchTrendingMovie().then(response => {
        setMovie(response.results)});
  }, []);

  return (
      <div className={css.Container}>
        <h1>TRENDING TODAY</h1>
        {movies && <TrandingFilmList films={movies} />}
      </div>
  )
}

export default Home