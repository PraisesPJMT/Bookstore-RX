const ADD_BOOK = 'bookstore-rx/bookReducer/ADD_BOOK';
const REMOVE_BOOK = 'bookstore-rx/bookReducer/REMOVE_BOOK';

const initialBooksState = [];

const addBook = () => (
  {
    type: ADD_BOOK,
  }
);

const removeBook = () => (
  {
    type: REMOVE_BOOK,
  }
);

const bookReducer = (state = initialBooksState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return state; // Return action will be changed later
    case REMOVE_BOOK:
      return state; // Return action will be changed later
    default:
      return state;
  }
};

export { addBook, removeBook };

export default bookReducer;
