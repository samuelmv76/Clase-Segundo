import React, { useState, useEffect } from 'react';
import BookList from './BookList';
import FilteredBooks from './FilteredBooks';
import TopRatedBook from './TopRatedBook';
import BookCounter from './BookCounter';

function BookMain() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/json/books.json')
      .then(response => response.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <div>
      <h1>BookFlix</h1>
      <BookList books={books} />
      <FilteredBooks books={books} />
      <TopRatedBook books={books} />
      <BookCounter books={books} />
    </div>
  );
}

export default BookMain;