import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../components/Book';
import AddBook from '../components/AddBook';
import { fetchBooks } from '../redux/books/books';

const BookPage = () => {
  const bookCatalog = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  const books = bookCatalog.map((book) => (
    <Book
      key={book.id}
      id={book.id}
      title={book.title}
      author={book.author}
      tag={book.category}
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
