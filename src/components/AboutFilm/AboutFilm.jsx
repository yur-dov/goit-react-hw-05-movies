import { useState, useEffect } from 'react';
import {
  useParams,
  Outlet,
  Link,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../service/serviceApi';
import css from './AboutFilms.module.css'

const AboutFilm = () => {
    const [movie, setMovie] = useState();
  const { movieId } = useParams();
    const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        if (!movieId) {
          return
        }
        api.fetchDetailsMovie(movieId).then(data => setMovie(data));
      } catch (error) {
        toast.error(error.message);
      }
        })();
    }, [movieId]);
  
  const GoBack = () => {
    navigate(location.state?.from || '/movies');
  };
    
  return (
       
    <>
      <button className={css.ToBackBtn} onClick={GoBack}>
        Back
      </button>
        {movie && (
          <div>
          <div className={css.WrapperInfo}>
              <div className={css.BlockImg}>
                <img
                  width="230"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.original_title}
                />
              </div>
              <div className={css.BlockInfo}>
                <h2>{movie.title || movie.name}</h2>
                <p>
                  <b>Release date:</b> {movie.release_date}
                </p>
                  <p>
                  <b>User Score:</b> {movie.vote_average}
                </p>
                <p>
                  <b>Genres:</b> {movie.genres.map(genr => genr.name).join(' / ')}
                </p>
                <p>
                  <b>Runtime:</b> {movie.runtime} min.
                </p>
                <p>
                  <b>Overview:</b>
                </p>
                <p>{movie.overview}</p>
              </div>
          </div>
          
          <hr />

          <nav>
              <h3 className={css.TitleAboutFilm}>Additional Information</h3>
              <div className={css.NaviWrapp}>
                <Link className={css.LinkBtn} to="cast"> {' '} Cast </Link>
                <Link className={css.LinkBtn} to="reviews"> {' '} Reviews </Link>
              </div>
          </nav>
          
            <hr />
            <Outlet context={movieId} />
           </div>
         )}
    </>
  );
}
export default AboutFilm