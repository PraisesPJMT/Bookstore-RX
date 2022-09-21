import axios from 'axios';

const apiID = 'NhIhGUO8xPYciDZcFhpZ';
const baseURL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiID}/books`;

const ADD_BOOK = 'bookstore-rx/bookReducer/ADD_BOOK';
const REMOVE_BOOK = 'bookstore-rx/bookReducer/REMOVE_BOOK';
const FETCH_BOOKS = 'bookstore-rx/bookReducer/FETCH_BOOKS';

const initialBooksState = [
  // {
  //   id: uuidv4(),
  //   title: 'The Hunger Games',
  //   author: 'Suzanne Collins',
  //   tag: 'Action',
  //   progress: 64,
  //   chapter: 'Chapter 17',
  // },
  // {
  //   id: uuidv4(),
  //   title: 'Dune',
  //   author: 'Frank Herbert',
  //   tag: 'Science Fiction',
  //   progress: 8,
  //   chapter: 'Chapter 3: "A Lesson Learned"',
  // },
  // {
  //   id: uuidv4(),
  //   title: 'Capital in the Twenty-First Century',
  //   author: 'Suzanne Collins',
  //   tag: 'Economy',
  //   progress: 0,
  //   chapter: 'Introduction',
  // },
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

const fetchBooks = () => async (dispatch) => {
  const fetchResponse = await axios.get(baseURL);
  const fetchedData = await fetchResponse.data;
  const bookCatalog = Object.entries(fetchedData).map((book) => ({
    id: book[0],
    ...book[1][0],
  })) || [];
  dispatch({
    type: FETCH_BOOKS,
    books: bookCatalog,
  });
};

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
    case FETCH_BOOKS:
      return action.books;
    default:
      return state;
  }
};

export { addBook, removeBook, fetchBooks };

export default bookReducer;
