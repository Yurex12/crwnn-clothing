import {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from 'react';

import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from '../utils/firebase/firebase.utils';

//actual storage, value to access
const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

const initialState = {
  currentUser: null,
};

function userReducer(state, action) {
  switch (action.type) {
    case 'currentUser/set':
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      throw new Error('uknown action');
  }
}

function UserProvider({ children }) {
  const [{ currentUser }, dispatch] = useReducer(userReducer, initialState);
  const value = {
    currentUser,
  };

  useEffect(() => {
    function unsubscribe() {
      onAuthStateChangedListener((user) => {
        if (user) createUserDocumentFromAuth(user);

        dispatch({ type: 'currentUser/set', payload: user });
      });
    }

    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

function useUser() {
  const context = useContext(UserContext);
  if (context === undefined)
    throw new Error('userconetext was used outside of it provider');
  return context;
}

export { useUser, UserProvider };
