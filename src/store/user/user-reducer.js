const initialState = {
  currentUser: null,
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'currentUser/set':
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
}

export const getUser = (state) => state.user.currentUser;
