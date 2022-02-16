import { useState, useEffect } from 'react';

import { themoviedbApiService } from '../utils';

export const useFetchMovies = (fetchParameter, searchQuery) => {
  const [fetchedMovies, setFetchedMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // const searchedMovies = '/search/movie'; // +++searchQuery

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const fetchedData = await themoviedbApiService(
          fetchParameter,
          searchQuery
        );
        return setFetchedMovies(fetchedData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  return { fetchedMovies, loading, error };
};
