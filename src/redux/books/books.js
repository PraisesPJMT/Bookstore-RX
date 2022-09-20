const ADD_BOOK = 'bookstore-rx/bookReducer/ADD_BOOK';
const REMOVE_BOOK = 'bookstore-rx/bookReducer/REMOVE_BOOK';

const initialBooksState = [];

const addBook = ({ id, title, author }) => (
  {
    type: ADD_BOOK,
    id,
    title,
    author,
  }
);

const removeBook = (book) => (
  {
    type: REMOVE_BOOK,
    id: book.id,
  }
);

const bookReducer = (state = initialBooksState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          author: action.author,
        },
      ];
    case REMOVE_BOOK:
      return [
        ...state.filter((book) => book.id !== action.id),
      ];
    default:
      return state;
  }
};

export { addBook, removeBook };

export default bookReducer;
