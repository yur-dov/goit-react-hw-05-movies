import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom"
import Home from './Home/Home'
import Movies from './Movies'
import Cast from './Cast'
import Reviews from './Reviews'
import NotFound from './NotFound'
import AboutFilm from './AboutFilm'

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/movies">MOVIES</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies/" element={<Movies />}></Route>
        <Route path="/movies/:movieId/*" element={<AboutFilm />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default App 