import React from 'react';
import './styles/AddBook.css';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const handleBookAddition = (event) => {
    event.preventDefault();
    const { title } = event.target.parentElement.elements;
    const { author } = event.target.parentElement.elements;

    if (title.value.trim() && author.value.trim()) {
      const book = {
        id: uuidv4(),
        title: title.value,
        author: author.value,
      };
      dispatch(addBook(book));
      title.value = '';
      author.value = '';
    }
  };
  return (
    <section className="add-book">
      <h2 className="subtitle">Add Book</h2>
      <form
        className="add-book-form"
      >
        <input
          className="input title-input"
          name="title"
          type="text"
          placeholder="Book title"
        />
        <input
          className="input author-input"
          name="author"
          type="text"
          placeholder="Book author"
        />
        <button
          className="add-book-btn"
          type="button"
          onClick={handleBookAddition}
        >
          ADD BOOK
        </button>
      </form>
    </section>
  );
};

export default AddBook;
