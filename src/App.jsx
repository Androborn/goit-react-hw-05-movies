import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Loader from './vendors/Loader/Loader.jsx';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Wrapper } from './App.styled';

// import static to prevent interface blinking
import Cast from './components/Cast/Cast';
import Reviews from './components/Reviews/Reviews';
// const Cast = lazy(() => import('./MoviesPage/Cast/Cast.jsx'));
// const Reviews = lazy(() => import('./MoviesPage/Reviews/Reviews.jsx'));

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('./pages/MovieDetailsPage/MovieDetailsPage')
);
const Layout = lazy(() => import('./components/Layout/Layout.jsx'));
const SearchForm = lazy(() => import('./components/SearchForm/SearchForm.jsx'));

export default function App() {
  return (
    <Wrapper>
      <Suspense fallback={<Loader fallback />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />}>
              <Route index element={<SearchForm />} />
              <Route path=":slug" element={<MovieDetailsPage />}>
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
