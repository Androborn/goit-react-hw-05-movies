import { NavLink } from 'react-router-dom';

import { NavigationWrapper } from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavigationWrapper>
      <NavLink
        to="goit-react-hw-05-movies"
        end
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
        to="goit-react-hw-05-movies/movies"
        style={({ isActive }) => {
          return {
            margin: '1rem',
            color: isActive ? 'red' : '',
          };
        }}
      >
        Movies
      </NavLink>
    </NavigationWrapper>
  );
};
