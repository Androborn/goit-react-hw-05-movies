import { useLocation } from 'react-router-dom';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { ListedMovies, MovieLink, StyledLink } from './MoviesList.styled';

export default function MoviesList({ fetchedMovies }) {
  const location = useLocation();

  return (
    <ListedMovies>
      {fetchedMovies?.results?.map(({ id, title }) => (
        <MovieLink key={nanoid()}>
          <StyledLink to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </StyledLink>
        </MovieLink>
      ))}
    </ListedMovies>
  );
}

MoviesList.propTypes = {
  fetchedMovies: PropTypes.object,
};
