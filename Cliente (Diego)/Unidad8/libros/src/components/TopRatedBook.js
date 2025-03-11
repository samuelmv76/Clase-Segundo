import React from 'react';

function TopRatedBook({ books }) {
  if (books.length === 0) return null;

  const topBook = books.reduce((prev, curr) =>
    curr.rating > prev.rating ? curr : prev
  );

  return (
    <div>
      <h2>Libro Mejor Calificado</h2>
      <p>{topBook.title} - {topBook.author} (Rating: {topBook.rating})</p>
    </div>
  );
}

export default TopRatedBook;
