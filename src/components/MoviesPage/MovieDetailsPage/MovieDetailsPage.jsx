import { Outlet, useParams, useLocation } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { Loader } from '../../../vendors';
import { useFetchMovies } from '../../../hooks';
import noPoster from '../../../images/no_poster.jpg';
import GoBack from '../../GoBack/GoBack.jsx';
import {
  Wrapper,
  AboutMovie,
  MoviePoster,
  MovieInfo,
  MovieTitle,
  MovieScore,
  MovieOverview,
  MovieGenres,
  PageBlockHeader,
  StyledLink,
} from './MovieDetailsPage.styled';

export default function MovieDetailsPage() {
  const fetchAboutMovie = '/movie';
  const imgBaseUrl = 'https://image.tmdb.org/t/p';
  const movieId = useParams().itemId;
  const imgSize = '/original';

  const { state } = useLocation();
  const { fetchedMovies, loading, error } = useFetchMovies(
    fetchAboutMovie + `/${movieId}`
  );
  const { poster_path, title, release_date, vote_average, overview, genres } =
    fetchedMovies || {};

  toast.error(error?.message);

  return (
    <>
      <GoBack to={state?.from ?? '/'} />
      {error && <Toaster />}
      {fetchedMovies && (
        <Wrapper>
          <AboutMovie>
            <MoviePoster
              alt="movie poster"
              src={
                poster_path ? `${imgBaseUrl}${imgSize}${poster_path}` : noPoster
              }
            />
            <MovieInfo>
              <MovieTitle>
                {title} ({release_date.substring(0, 4)})
              </MovieTitle>
              <MovieScore>User score: {vote_average * 10} %</MovieScore>
              <PageBlockHeader>Overview</PageBlockHeader>
              <MovieOverview>{overview}</MovieOverview>
              <PageBlockHeader>Genres</PageBlockHeader>
              <MovieGenres>
                {genres.map(({ name }) => name).join(' ')}
              </MovieGenres>
            </MovieInfo>
          </AboutMovie>
          <hr />
          <PageBlockHeader>Additional information</PageBlockHeader>
          <StyledLink to="cast" state={{ from: state?.from }}>
            Cast
          </StyledLink>
          <StyledLink to="reviews" state={{ from: state?.from }}>
            Reviews
          </StyledLink>
          <hr />
          <Outlet context={[fetchedMovies]} />
        </Wrapper>
      )}
      {loading && <Loader />}
    </>
  );
}
