const initialState = {
  categories: [],
};

export function categoriesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'categories/set':
      console.log(action.payload);
      return {
        ...state,
        categories: action.payload,
      };

    default:
      return state;
  }
}

export const getCategories = (store) =>
  store.categories.categories.reduce((acc, category) => {
    const { items, title } = category;

    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
