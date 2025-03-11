import React from 'react';

function TopRated({ movies }) {
  if (movies.length === 0) return null;

  const topMovie = movies.reduce((prev, curr) =>
    curr.rating > prev.rating ? curr : prev
  );

  return (
    <div>
      <h2>Película Mejor Calificada</h2>
      <p>
        {topMovie.title} - Director: {topMovie.director} <br />
        Calificación: {topMovie.rating}
      </p>
    </div>
  );
}

export default TopRated;