import axios from 'axios';

const API_KEY = 'b3c92fe53af44f178e647febf833de93';
//const API_KEY = process.env.REACT_APP_TMDB_KEY;

const baseUrl = 'https://api.spoonacular.com/recipes/';

const api = axios.create({
  baseURL: baseUrl,
  params: {
    apiKey: API_KEY,
    number: "9",
  },
});

export default api;
