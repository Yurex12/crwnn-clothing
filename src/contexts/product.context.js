import { createContext, useContext, useState } from 'react';

import PRODUCTS from '../shopData.json';

const ProductContext = createContext({
  products: [],
});

function ProductProvider({ children }) {
  const [products, setProducts] = useState(PRODUCTS);
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
