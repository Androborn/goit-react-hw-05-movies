import { Outlet, useSearchParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { Loader } from '../../vendors';
import { useFetchMovies } from '../../hooks';
import MoviesList from '../../components/MoviesList/MoviesList';

export default function MoviesPage() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');
  const fetchParams = `search/movie`;

  const { fetchedMovies, loading, error } = useFetchMovies(
    fetchParams,
    searchQuery
  );

  toast.error(error?.message);

  return (
    <>
      <Outlet />
      {error && <Toaster />}
      {searchQuery && <MoviesList fetchedMovies={fetchedMovies} />}
      {loading && <Loader />}
      {/* add no search match notification*/}
    </>
  );
}
