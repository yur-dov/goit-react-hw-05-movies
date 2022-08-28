import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css'

const Navigation = () => {
  return (
    <div className={css.Container}>
      <nav className={css.NavLink}>
        <NavLink to="/" className={({ isActive }) =>
          isActive ? `${css.active}` : `${css.inactive}`
        }>Home</NavLink>
        <NavLink to="/movies" className={({ isActive }) =>
          isActive ? `${css.active}` : `${css.inactive}`
        }>Movies</NavLink>
        <Outlet />
      </nav>
    </div>
  );
};
export default Navigation;