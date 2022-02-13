import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import {
  Navigation,
  PageNotFoundView,
  HomePage,
  MoviesPage,
  SearchForm,
  MovieDetailsPage,
  Cast,
  Reviews,
} from './';
import { themoviedbApiService } from '../utils';

import { Wrapper } from './App.styled';

export const App = () => {
  const [fetchedMovies, setFetchedMovies] = useState(null);

  const trendingMoviesFetchParameter = '/trending/movie/day';
  // const searchedMoviesFetchParameter = '/search/movie'; // +++searchQuery
  // const aboutMovieFetchParameter = '/movie'; // +++/{movie_id}

  const fetchData = async (fetchParameter, searchQuery) => {
    try {
      const fetchedData = await themoviedbApiService(
        fetchParameter,
        searchQuery
      );
      setFetchedMovies(fetchedData.results);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData(trendingMoviesFetchParameter);
  }, []);

  console.log(fetchedMovies);

  return (
    <Wrapper>
      <Navigation />
      <Routes>
        <Route
          path="goit-react-hw-05-movies"
          element={<HomePage fetchedMovies={fetchedMovies} />}
        />
        <Route
          path="goit-react-hw-05-movies/movies"
          element={
            <MoviesPage>
              <SearchForm />
              <MovieDetailsPage></MovieDetailsPage>
              <Cast></Cast>
              <Reviews></Reviews>
            </MoviesPage>
          }
        />
        <Route path="*" element={<PageNotFoundView />} />
      </Routes>
    </Wrapper>
  );
};
