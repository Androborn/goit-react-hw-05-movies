import toast, { Toaster } from 'react-hot-toast';
import MoviesList from '../../components/MoviesList/MoviesList.jsx';
import { Loader } from '../../vendors';
import { useFetchMovies } from '../../hooks';
import { Wrapper, HomePageHeader } from './HomePage.styled.jsx';

export default function HomePage() {
  const fetchParams = '/trending/movie/day';
  const { fetchedMovies, loading, error } = useFetchMovies(fetchParams);

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
