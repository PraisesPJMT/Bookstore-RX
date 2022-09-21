import axios from 'axios';

const apiID = 'NhIhGUO8xPYciDZcFhpZ';
const baseURL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiID}/books`;

const ADD_BOOK = 'bookstore-rx/bookReducer/ADD_BOOK';
const REMOVE_BOOK = 'bookstore-rx/bookReducer/REMOVE_BOOK';
const FETCH_BOOKS = 'bookstore-rx/bookReducer/FETCH_BOOKS';

const initialBooksState = [];

const addBook = (book) => async (dispatch) => {
  await axios.post(baseURL,
    {
      item_id: book.id,
      title: book.title,
      author: book.author,
      category: book.category,
    });
  return dispatch({
    type: ADD_BOOK,
    id: book.id,
    title: book.title,
    author: book.author,
    category: book.category,
  });
};

const removeBook = (id) => async (dispatch) => {
  await axios.delete(`${baseURL}/${id}`);
  return dispatch({
    type: REMOVE_BOOK,
    id,
  });
};

const fetchBooks = () => async (dispatch) => {
  const fetchResponse = await axios.get(baseURL);
  const fetchedData = await fetchResponse.data;
  const bookCatalog = Object.entries(fetchedData).map((book) => ({
    id: book[0],
    ...book[1][0],
  })) || [];
  return dispatch({
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
          category: action.category,
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
