import React, { useState } from 'react';

function FilteredBooks({ books }) {
  const [author, setAuthor] = useState('');

  const filtered = books.filter(book =>
    book.author.toLowerCase().includes(author.toLowerCase())
  );

  return (
    <div>
      <h2>Filtrar Libros por Autor</h2>
      <input
        type="text"
        placeholder="Nombre del autor"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <ul>
        {filtered.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilteredBooks;