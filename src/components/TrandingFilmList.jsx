import { Link, useLocation } from 'react-router-dom';

const TrandingFilmList = ({ films }) => {
    const location = useLocation();

    return (
        <ul>
            {films.map(({ id, original_title, poster_path, original_name }) => {
                // const imgPoster = 'https://image.tmdb.org/t/p/w500' + poster_path;
                return (
                    <li key={id}>
                        <Link to={`/movies/${id}`} state={{ from: location }}>
                            {original_title ? (<p>{original_title}</p>) : (<p>{original_name}</p>)}
                        </Link>
                    </li>
                )
            })
                
            }
        </ul>
    )
}
export default TrandingFilmList