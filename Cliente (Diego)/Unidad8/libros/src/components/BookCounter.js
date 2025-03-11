import React from 'react';

function BookCounter({ books }) {
  return <div>Total libros disponibles: {books.length}</div>;
}

export default BookCounter;