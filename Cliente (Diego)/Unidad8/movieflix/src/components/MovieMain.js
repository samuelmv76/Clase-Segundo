import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';
import FilteredMovies from './FilteredMovies';
import TopRated from './TopRated';

function MovieMain() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch('/json/movies_large.json');
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error('Error al obtener las películas:', error);
      }
    }
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>MovieFlix</h1>
      <MovieList movies={movies} />
      <FilteredMovies movies={movies} />
      <TopRated movies={movies} />
    </div>
  );
}

export default MovieMain;