const ADD_CATEGORY = 'bookstore-rx/categoryReducer/ADD_CATEGORY';
const REMOVE_CATEGORY = 'bookstore-rx/categoryReducer/REMOVE_CATEGORY';

const initialCategoriesState = [];

const addCategory = () => (
  {
    type: ADD_CATEGORY,
  }
);

const removeCategory = () => (
  {
    type: REMOVE_CATEGORY,
  }
);

const categoryReducer = (state = initialCategoriesState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return state; // Return action will be changed later
    case REMOVE_CATEGORY:
      return state; // Return action will be changed later
    default:
      return state;
  }
};

export { addCategory, removeCategory };

export default categoryReducer;
