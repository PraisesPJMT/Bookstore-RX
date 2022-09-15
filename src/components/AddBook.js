import React from 'react';
import './styles/AddBook.css';

const AddBook = () => (
  <section className="add-book">
    <h2 className="subtitle">Add Book</h2>
    <form className="add-book-form">
      <input
        className="input title-input"
        type="text"
        placeholder="Book title"
      />
      <input
        className="input author-input"
        type="text"
        placeholder="Book author"
      />
      <button
        className="add-book-btn"
        type="button"
      >
        ADD BOOK
      </button>
    </form>
  </section>
);

export default AddBook;
