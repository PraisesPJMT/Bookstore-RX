import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';
import AddBook from '../components/AddBook';

const BookPage = () => {
  const bookCatalog = useSelector((state) => state.books);
  const books = bookCatalog.map((book) => (
    <Book
      key={book.id}
      id={book.id}
      title={book.title}
      author={book.author}
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
