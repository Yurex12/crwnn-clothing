import { createSelector } from 'reselect';
const initialState = {
  categories: [],
};

export function categoriesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'categories/set':
      return {
        ...state,
        categories: action.payload,
      };

    default:
      return state;
  }
}

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
