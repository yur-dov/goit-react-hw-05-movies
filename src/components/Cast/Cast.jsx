import api from '../service/serviceApi';
import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import defaultImg from './defaultImg.png'
import css from './Cast.module.css'

const Cast = () => {
    const movieId = useOutletContext();
    const [actors, setActors] = useState([]);

    useEffect(() => {
      api.fetchActorsList(movieId)
        .then(data => setActors(data.cast))
    },[movieId])

  return (
    <ul className={css.CastList}>
          {actors.map(({ profile_path, name, id, character }) =>(
            <li key={id} className={css.ListItems}>
              {profile_path ? (
                <img src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={name}
                width="200"
              />
              ) : (
                  <img src={defaultImg}
                    alt={name}
                    width="200"
                  />
              )}
              <p>{character}</p>

         </li>
          ))}
    </ul>
  );
};
export default Cast;
