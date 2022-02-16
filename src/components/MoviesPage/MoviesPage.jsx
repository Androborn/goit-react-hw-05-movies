import { Link, Outlet, useSearchParams } from 'react-router-dom';

import { nanoid } from 'nanoid';

import { Loader } from '../../vendors';
import { useFetchMovies } from '../../hooks';

export const MoviesPage = () => {
  const [searchParams] = useSearchParams();

  const searchedMovies = `search/movie`;

  const { fetchedMovies, loading, error } = useFetchMovies(
    searchedMovies,
    searchParams.get('query')
  );

  console.log(error);

  return (
    <>
      <Outlet />
      <ul>
        {fetchedMovies &&
          searchParams.get('query') &&
          fetchedMovies.results.map(movie => (
            <li key={nanoid()}>
              <Link to={`${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
      </ul>
      {loading && <Loader />}
      {/* add no search match */}
    </>
  );
};
