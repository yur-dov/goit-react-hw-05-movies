import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from 'react';
import css from './App.module.css'
import Loader from "../Loader/Loader";

const Navigation = lazy(() => import('../Navigation/Navigation'));
const Home = lazy(() => import('../../pages/HomePages/Home'));
const Movies = lazy(() => import('../../pages/MoviesInfo/Movies'));
const AboutFilm = lazy(() => import('../AboutFilm/AboutFilm'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

const App = () => {
  return (
    <div className={css.Container}>
      <Navigation />
      <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/" element={<Movies />} />
        <Route path="movies/:movieId/*" element={<AboutFilm />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
      </Suspense>
    </div>
  );
};
export default App 