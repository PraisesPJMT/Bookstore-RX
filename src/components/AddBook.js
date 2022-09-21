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
        <div className="add-book-info1">
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
        </div>
        <div className="add-book-info2">
          <input
            className="input category-input"
            name="category"
            type="text"
            placeholder="Category"
            list="category"
          />
          <button
            className="add-book-btn"
            type="button"
            onClick={handleBookAddition}
          >
            ADD BOOK
          </button>
        </div>

        <datalist
          className="category-list"
          id="category"
        >
          <option value="General" selected="true">General</option>
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
          <option value="Romance">Romance</option>
          <option value="Philosophy">Philosophy</option>
          <option value="History">History</option>
          <option value="Drama">Drama</option>
          <option value="Biography">Biography</option>
          <option value="Crime">Crime</option>
          <option value="Classic">Classic</option>
        </datalist>
      </form>
    </section>
  );
};

export default AddBook;
