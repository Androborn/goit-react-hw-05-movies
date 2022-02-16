import { Link, Outlet, useParams } from 'react-router-dom';

import { Loader } from '../../../vendors';
import { useFetchMovies } from '../../../hooks';

import noPoster from '../../../images/no_poster.jpg';
import { GoBackBtn } from 'components/GoBackBtn/GoBackBtn.styled';

export function MovieDetailsPage() {
  const fetchAboutMovie = '/movie';
  const movieId = useParams().itemId;
  const imgBaseUrl = 'https://image.tmdb.org/t/p';
  // const imgSize = '/original';
  const imgSize = '/w300';

  const { fetchedMovies, loading, error } = useFetchMovies(
    fetchAboutMovie + `/${movieId}`
  );

  console.log(error);

  return (
    <>
      <GoBackBtn />
      {fetchedMovies && (
        <>
          <img
            alt="movie poster"
            src={
              fetchedMovies.poster_path
                ? `${imgBaseUrl}${imgSize}${fetchedMovies.poster_path}`
                : noPoster
            }
          />
          <div>{fetchedMovies.title}</div>
          <div>{fetchedMovies.overview}</div>
          <Link to="cast" state={{ cast: fetchedMovies.credits.cast }}>
            Cast
          </Link>
          <Link to="reviews" state={{ reviews: fetchedMovies.reviews }}>
            Reviews
          </Link>
          <Outlet />
        </>
      )}
      {loading && <Loader />}
    </>
  );
}
