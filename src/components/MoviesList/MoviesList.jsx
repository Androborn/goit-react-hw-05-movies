import { useLocation } from 'react-router-dom';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { ListedMovies, MovieLink, StyledLink } from './MoviesList.styled';

export default function MoviesList({ fetchedMovies }) {
  const location = useLocation();
  const slugify = require('slugify');
  const slug = string => slugify(string, { lower: true });

  return (
    <ListedMovies>
      {fetchedMovies?.results?.map(({ id, title }) => (
        <MovieLink key={nanoid()}>
          <StyledLink
            to={`/movies/${slug(`${title} ${id}`)}`}
            state={{ from: location, btnLabel: `Back to` }}
          >
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
