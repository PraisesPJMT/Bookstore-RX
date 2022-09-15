import React from 'react';
import bookCatalog from '../components/mockBooks';
import Book from '../components/Book';

const BookPage = () => {
  const books = bookCatalog.map((book) => (
    <Book
      key={book.id}
      title={book.title}
      author={book.author}
      tag={book.tag}
      progress={book.progress}
      chapter={book.chapter}
    />
  ));

  return (
    <div className="book-page">
      <div className="books">
        { books }
      </div>
    </div>
  );
};

export default BookPage;
