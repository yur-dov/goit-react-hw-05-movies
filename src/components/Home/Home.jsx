import { useState, useEffect } from 'react';
import api from '../service/serviceApi'
import { toast } from 'react-toastify';
// import { useLocation } from 'react-router-dom';
import TrandingFilmList from '../TrandingFilmList'

const Home = () => {
  const [movies, setMovie] = useState([]);
  
  useEffect(() => {
    (async () => {
      try {
        api.fetchTrendingMovie().then(data => setMovie(data.results));
      } catch (error) {
        toast.error(error.message);
      }
    })();
      }, []);

  return (
      <div>
        <h1>TRENDING TODAY</h1>
        <TrandingFilmList films={movies} />
      </div>
  )
}

export default Home