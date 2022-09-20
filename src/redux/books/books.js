import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookstore-rx/bookReducer/ADD_BOOK';
const REMOVE_BOOK = 'bookstore-rx/bookReducer/REMOVE_BOOK';

const initialBooksState = [
  {
    id: uuidv4(),
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    tag: 'Action',
    progress: 64,
    chapter: 'Chapter 17',
  },
  {
    id: uuidv4(),
    title: 'Dune',
    author: 'Frank Herbert',
    tag: 'Science Fiction',
    progress: 8,
    chapter: 'Chapter 3: "A Lesson Learned"',
  },
  {
    id: uuidv4(),
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    tag: 'Economy',
    progress: 0,
    chapter: 'Introduction',
  },
];

const addBook = ({ id, title, author }) => (
  {
    type: ADD_BOOK,
    id,
    title,
    author,
  }
);

const removeBook = (id) => (
  {
    type: REMOVE_BOOK,
    id,
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
