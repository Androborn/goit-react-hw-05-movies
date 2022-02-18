import toast, { Toaster } from 'react-hot-toast';
import MoviesList from '../MoviesList/MoviesList.jsx';
import { Loader } from '../../vendors';
import { useFetchMovies } from '../../hooks';
import { Wrapper, HomePageHeader } from './HomePage.styled.jsx';

export default function HomePage() {
  const fetchTrendingMovies = '/trending/movie/day';
  const { fetchedMovies, loading, error } = useFetchMovies(fetchTrendingMovies);

  toast.error(error?.message);

  return (
    <Wrapper>
      <HomePageHeader>Trending today</HomePageHeader>
      {error && <Toaster />}
      <MoviesList fetchedMovies={fetchedMovies} />
      {loading && <Loader />}
    </Wrapper>
  );
}
