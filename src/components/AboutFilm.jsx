import { Link, Outlet } from 'react-router-dom';

const AboutFilm = () => {
    return (
        <div>
            <p>About Film</p>
            <Link to="cast">Cast</Link>
            <br/>
            <Link to="reviews">Reviews</Link>
            <br />
            <Outlet />
        </div>
    )
}
export default AboutFilm