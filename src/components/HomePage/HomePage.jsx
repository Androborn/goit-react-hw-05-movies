import { Link } from 'react-router-dom';

import { nanoid } from 'nanoid';

import { Loader } from '../../vendors';
import { useFetchMovies } from '../../hooks';

export default function HomePage() {
  const fetchTrendingMovies = '/trending/movie/day';

  const { fetchedMovies, loading, error } = useFetchMovies(fetchTrendingMovies);

  console.log(error);

  return (
    <>
      <ul>
        {fetchedMovies &&
          fetchedMovies.results.map(movie => (
            <li key={nanoid()}>
              <Link to={`movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
      </ul>
      {loading && <Loader />}
    </>
  );
}
