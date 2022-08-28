import { Link, useLocation } from 'react-router-dom';
import css from './TrandingFilms.module.css'

const TrandingFilmList = ({ films }) => {
    const location = useLocation();

    return (
        <ul className={css}>
            {films.map(({ id, original_title, poster_path, original_name }) => (
                    <li key={id}>
                        <Link className={css.Link} to={`/movies/${id}`} state={{ from: location }}>
                            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={original_title} width="330" height="480" />
                            
                            {original_title ? (
                            <h2 className={css.FilmTitle}>{original_title}</h2>
                                ) : (
                            <h2 className={css.FilmTitle}>{original_name}</h2>
                                )}
                        </Link>
                    </li>
                ))}
        </ul>
    )
}
export default TrandingFilmList