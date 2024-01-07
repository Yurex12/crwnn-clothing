import { createContext, useContext, useEffect, useState } from 'react';

import { addcollectionsAndDocument } from '../utils/firebase/firebase.utils.js';

const ProductContext = createContext({
  products: [],
});

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  const value = { products };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

function useProducts() {
  const context = useContext(ProductContext);

  if (context === undefined)
    throw new Error('product context was used outside of it provider');
  return context;
}

export { useProducts, ProductProvider };
