import React from 'react';
import bookCatalog from '../components/mockBooks';
import Book from '../components/Book';
import AddBook from '../components/AddBook';

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
      <div className="books-container">
        { books }
      </div>
      <hr />
      <AddBook />
    </div>
  );
};

export default BookPage;
