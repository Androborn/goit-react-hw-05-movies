import { Routes, Route, Navigate } from 'react-router-dom';

import {
  Layout,
  HomePage,
  MoviesPage,
  SearchForm,
  MovieDetailsPage,
  Cast,
  Reviews,
} from './';

import { Wrapper } from './App.styled';

export const App = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />}>
            <Route index element={<SearchForm />} />
            <Route path=":itemId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast></Cast>} />
              <Route path="reviews" element={<Reviews></Reviews>} />
            </Route>
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Wrapper>
  );
};
