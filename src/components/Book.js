import React from 'react';
import PropTypes from 'prop-types';
import './styles/Book.css';

const Book = ({
  title, author,
}) => (
  <div className="book">
    <div className="book-info">
      <p className="book-tag">Action</p>
      <p className="book-title">{title}</p>
      <p className="book-author">{author}</p>
      <div className="book-actions">
        <button
          className="book-btn comment-btn"
          type="button"
        >
          Comments
        </button>
        <button
          className="book-btn remove-btn"
          type="button"
        >
          Remove
        </button>
        <button
          className="book-btn edit-btn"
          type="button"
        >
          Edit
        </button>
      </div>
    </div>
    <div className="book-logo">
      <div className="book-progress-wrapper">
        <div className="book-progress-bar" />
        <div className="book-progress-container">
          <p className="book-progress">
            64%
          </p>
          <p className="book-progress-status">Completed</p>
        </div>
      </div>

      <hr className="progress-divider" />

      <div className="chapter-info">
        <p className="chapter">
          CURRENT CHAPTER
        </p>
        <p className="current-chapter">
          Introduction
        </p>
        <button
          className="update-btn"
          type="button"
        >
          UPDATE PROGRESS
        </button>
      </div>
    </div>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
