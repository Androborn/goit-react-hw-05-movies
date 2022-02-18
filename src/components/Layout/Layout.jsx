import { NavLink, Outlet } from 'react-router-dom';
import { Navigation } from './Navigation.styled';

export default function Layout() {
  return (
    <>
      <Navigation>
        <NavLink
          to="/"
          style={({ isActive }) => {
            return {
              margin: '1rem',
              color: isActive ? 'red' : '',
            };
          }}
          // className works the same way
        >
          Home
        </NavLink>
        <NavLink
          to="movies/"
          style={({ isActive }) => {
            return {
              margin: '1rem',
              color: isActive ? 'red' : '',
            };
          }}
        >
          Movies
        </NavLink>
      </Navigation>
      <hr></hr>
      <Outlet />
    </>
  );
}
