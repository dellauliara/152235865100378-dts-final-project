import axios from 'axios';

const API_KEY = 'e100c22111ba472fa40d0f41c0c4cc05';
//const API_KEY = process.env.REACT_APP_TMDB_KEY;

const baseUrl = 'https://api.spoonacular.com/recipes/';

const api = axios.create({
  baseURL: baseUrl,
  params: {
    apiKey: API_KEY,
    number: "9",
    tags: "vegetarian"
  },
});

export default api;
