import { createContext, useContext, useState, useEffect } from 'react';

import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from '../utils/firebase/firebase.utils';

//actual storage, value to access
const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    function unsubscribe() {
      onAuthStateChangedListener((user) => {
        if (user) createUserDocumentFromAuth(user);
        setCurrentUser(user);
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
