import AsyncStorage from '@react-native-async-storage/async-storage';

// Buscar filme
export async function getMoviesSave(key) {
  const myMovies = await AsyncStorage.getItem(key);
  let moviesSave = JSON.parse(myMovies) || [];
  return moviesSave;
}

// Salvar filme
export async function saveMovie(key, newMovie) {
  let moviesStored = await getMoviesSave(key);
  
  // Se tiver filme salvo com o ID
  const hasMovie = moviesStored.some(item => item.id === newMovie.id);
  if(hasMovie) {
    console.log("Esse filme já existe na sua lista!");
  }

  // Salvando o filme
  moviesStored.push(newMovie);
  await AsyncStorage.setItem(key, JSON.stringify(moviesStored));
  console.log("Filme salvo com sucesso!");
}

// Deletar filem
export async function deleteMovie(key, id) {
  let moviesStored = await getMoviesSave(key);
  let myMovies = moviesStored.filter(item => {
    return (item.id !== id)
  })

  await AsyncStorage.setItem(key, JSON.stringify(myMovies));
  console.log('Filme deletado com sucesso.');
  return myMovies;
}

// Filtrar filmes salvos
export async function hasMovie(key, movie) {
  let moviesStored = await getMoviesSave(key);
  const hasMovie = moviesStored.find(item => item.id === movie.id);
  if(hasMovie) {
    return true;
  }

  return false;
}