import axios from 'axios';

//const API_KEY = 'b3c92fe53af44f178e647febf833de93';
//const API_KEY = '227ffadf1fc4456ca38312d04e68ab78';
//const API_KEY = 'e100c22111ba472fa40d0f41c0c4cc05';
//const API_KEY = '9b2bac2a67fd478a8d917623b9c3b386';
const API_KEY = process.env.REACT_APP_TMDB_KEY;

const baseUrl = 'https://api.spoonacular.com/recipes/';

const api = axios.create({
  baseURL: baseUrl,
  params: {
    apiKey: API_KEY,
   
  },
});

export default api;
