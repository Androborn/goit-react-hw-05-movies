const axios = require('axios');
const BASE_URL = 'https://api.themoviedb.org';
const API_KEY = 'f979c5d182d240e48ce15515a9f4d973';
const AUTH_TYPE = '3';
const DEFAULT_LANGUAGE = 'en-US';
const ADULT_CONTENT = false;
const APPENDED_MOVIE_DETAILS = 'credits,reviews';

export const themoviedbApiService = (fetchParameter, searchQuery) => {
  axios.defaults.baseURL = BASE_URL;
  return axios
    .get(`${AUTH_TYPE}/${fetchParameter}`, {
      params: {
        api_key: API_KEY,
        language: DEFAULT_LANGUAGE,
        include_adult: ADULT_CONTENT,
        append_to_response: APPENDED_MOVIE_DETAILS,
        query: searchQuery,
      },
    })
    .then(({ data }) => {
      if (data) {
        return data;
      } else {
        throw new Error('Search error');
      }
    });
};
