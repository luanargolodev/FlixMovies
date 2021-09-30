import axios from 'axios';

// Filmes em cartaz
// https://api.themoviedb.org/3/movie/now_playing?api_key=87533c310d3e816e461feca9a728b65f&language=pt-BR&page=1

export const key = '87533c310d3e816e461feca9a728b65f';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
})

export default api;