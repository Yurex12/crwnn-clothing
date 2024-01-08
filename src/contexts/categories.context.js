import { createContext, useContext, useEffect, useState } from 'react';

import {
  addcollectionsAndDocument,
  getCategoriesAndDocuments,
} from '../utils/firebase/firebase.utils.js';

const CategoriesContext = createContext();

function CategoriesProvider({ children }) {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    async function getData() {
      const res = await getCategoriesAndDocuments();
      setCategoriesMap(res);
    }
    getData();
  }, []);

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
}

function useCategories() {
  const context = useContext(CategoriesContext);

  if (context === undefined)
    throw new Error('product context was used outside of it provider');
  return context;
}

export { useCategories, CategoriesProvider };
