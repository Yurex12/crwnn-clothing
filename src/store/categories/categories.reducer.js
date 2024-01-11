import { createSelector } from 'reselect';

const initialState = {
  categories: [],
  isLoading: false,
  error: null,
};

export function categoriesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'categories/fetch-start':
      return {
        ...state,
        isLoading: true,
      };
    case 'categories/fetch-failed':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case 'categories/fetch-success':
      return {
        ...state,
        isLoading: false,
        categories: action.payload,
      };

    default:
      return state;
  }
}

// export const fetchCategoriesAsync = () => async (dispatch) => {
//   dispatch({ type: 'categories/fetch-start' });
//   try {
//     const categoriesArray = await getCategoriesAndDocuments();
//     dispatch({ type: 'categories/fetch-success', payload: categoriesArray });
//   } catch (error) {
//     dispatch({ type: 'categories/fetch-failed', payload: error });
//   }
// };

const categoriesSelector = (state) => state.categories;

export const selectCategories = createSelector(
  [categoriesSelector],
  (categoriesSlice) => categoriesSlice.categories
);

export const getCategories = createSelector([selectCategories], (categories) =>
  categories.reduce((acc, category) => {
    const { items, title } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})
);

export const getIsLoading = (state) => state.categories.isLoading;
