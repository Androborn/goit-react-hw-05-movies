import { useState, useEffect } from 'react';

import { themoviedbApiService } from '../utils';

export const useFetchMovies = (fetchParameter, searchQuery) => {
  const [fetchedMovies, setFetchedMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        if (searchQuery === null) {
          return;
        }
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
  }, [fetchParameter, searchQuery]);
  return { fetchedMovies, loading, error };
};
