import { Link, useLocation } from 'react-router-dom';

export default function MoviesList({ films }) {
  const location = useLocation();
  return (
    <ul>
      {films.map(({id, poster_path, original_title, title}) => (
        <li key={id}>
          <Link
            to={`/movies/${id}`}
            state={{ from: location }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
              width="330"
              height="480"
            />
            <p>{original_title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
