import { Outlet, useSearchParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { Loader } from '../../vendors';
import { useFetchMovies } from '../../hooks';
import MoviesList from '../MoviesList/MoviesList';

export default function MoviesPage() {
  const [searchParams] = useSearchParams();

  const searchedMovies = `search/movie`;

  const { fetchedMovies, loading, error } = useFetchMovies(
    searchedMovies,
    searchParams.get('query')
  );

  toast.error(error?.message);

  return (
    <>
      <Outlet />
      {error && <Toaster />}
      {searchParams.get('query') && (
        <MoviesList fetchedMovies={fetchedMovies} />
      )}
      {loading && <Loader />}
      {/* add no search match notification*/}
    </>
  );
}
