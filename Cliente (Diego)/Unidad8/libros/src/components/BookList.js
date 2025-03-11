import React from 'react';

function BookList({ books }) {
  return (
    <div>
      <h2>Listado de Libros</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Título</th>
            <th>Autor</th>
            <th>Año</th>
            <th>Calificación</th>
          </tr>
        </thead>
        <tbody>
          {books.map(({ id, title, author, year, rating }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{title}</td>
              <td>{author}</td>
              <td>{year}</td>
              <td>{rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
/*

/*
import React, { useState } from 'react';

function BookList({ books }) {
  const [search, setSearch] = useState('');

  // Manejar cambios en el input
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  // Filtrar los libros que coincidan con la búsqueda
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Listado de Libros</h2>
      
      {/* Input con onChange para filtrar en tiempo real }
      <input
        type="text"
        placeholder="Buscar libro..."
        value={search}
        onChange={handleSearchChange}
      />

      <ul>
        {filteredBooks.map(book => (
          <li key={book.id}>
            {book.title} - {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList
*/
export default BookList;

