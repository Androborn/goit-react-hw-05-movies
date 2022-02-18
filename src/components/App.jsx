import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Loader from '../vendors/Loader/Loader.jsx';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Wrapper } from './App.styled';

const Layout = lazy(() => import('./Layout/Layout.jsx'));
const HomePage = lazy(() => import('./HomePage/HomePage.jsx'));
const MoviesPage = lazy(() => import('./MoviesPage/MoviesPage.jsx'));
const SearchForm = lazy(() => import('./MoviesPage/SearchForm/SearchForm.jsx'));
const MovieDetailsPage = lazy(() =>
  import('./MoviesPage/MovieDetailsPage/MovieDetailsPage.jsx')
);
const Cast = lazy(() => import('./MoviesPage/Cast/Cast.jsx'));
const Reviews = lazy(() => import('./MoviesPage/Reviews/Reviews.jsx'));

export default function App() {
  return (
    <Wrapper>
      <Suspense fallback={<Loader fallback />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />}>
              <Route index element={<SearchForm />} />
              <Route path=":itemId" element={<MovieDetailsPage />}>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
              </Route>
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
    </Wrapper>
  );
}
