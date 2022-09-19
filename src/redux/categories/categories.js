const CHECK_STATUS = 'bookstore-rx/categoryReducer/CHECK_STATUS';

const initialCategoriesState = [];

const checkStatus = (book) => (
  {
    type: CHECK_STATUS,
    id: book.id,
  }
);

const categoryReducer = (state = initialCategoriesState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction'; // Return action will be changed later
    default:
      return state;
  }
};

export { checkStatus };

export default categoryReducer;
