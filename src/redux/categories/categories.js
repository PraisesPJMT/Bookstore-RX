const CHECK_STATUS = 'bookstore-rx/categoryReducer/CHECK_STATUS';

const initialCategoriesState = [];

const checkStatus = () => (
  {
    type: CHECK_STATUS,
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
