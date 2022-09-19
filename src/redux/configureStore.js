import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './categories/categories';
import bookReducer from './books/books';

const store = configureStore(
  {
    reducer: {
      books: bookReducer,
      categories: categoryReducer,
    },
  },
);

export default store;
