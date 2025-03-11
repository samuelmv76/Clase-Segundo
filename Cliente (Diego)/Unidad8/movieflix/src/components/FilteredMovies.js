import React, { useState } from 'react';

function FilteredMovies({ movies }) {
  const [director, setDirector] = useState('');

  const filteredMovies = movies.filter(({ director: movieDirector }) =>
    movieDirector.toLowerCase().includes(director.toLowerCase())
  );

  return (
    <div>
      <h2>Filtrar Películas por Director</h2>
      <input
        type="text"
        placeholder="Nombre del director"
        value={director}
        onChange={(e) => setDirector(e.target.value)}
      />
      <ul>
        {filteredMovies.map(({ movie_id, title }) => (
          <li key={movie_id}>{title}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilteredMovies;