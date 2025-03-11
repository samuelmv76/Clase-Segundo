import React from 'react';

function MovieList({ movies }) {
  return (
    <div>
      <h2>Listado de Películas</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Id de la película</th>
            <th>Título</th>
            <th>Director</th>
            <th>Fecha de lanzamiento</th>
            <th>Duración (minutos)</th>
          </tr>
        </thead>
        <tbody>
          {movies.map(({ movie_id, title, director, release_date, duration_min }) => (
            <tr key={movie_id}>
              <td>{movie_id}</td>
              <td>{title}</td>
              <td>{director}</td>
              <td>{release_date}</td>
              <td>{duration_min}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MovieList;