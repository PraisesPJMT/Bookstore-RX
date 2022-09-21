import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import categoryReducer from './categories/categories';
import bookReducer from './books/books';

const store = configureStore(
  {
    reducer: {
      books: bookReducer,
      categories: categoryReducer,
    },
  },
  applyMiddleware(thunk),
);

export default store;
