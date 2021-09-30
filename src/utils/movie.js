// Gerar lista de filmes com tamanho desejado
export function getListMovies(size, movies) {
  let popularMovies = [];

  for(let i = 0, l = size; i < l; i++) {
    popularMovies.push(movies[i]);
  }

  return popularMovies;
}

// Gerar um número aleatório para colocar no filme em cartaz
export function randomBanner(movies) {
  return Math.floor(Math.random() * movies.length);
}