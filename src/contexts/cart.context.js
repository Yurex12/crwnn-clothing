import { createContext, useContext, useState } from 'react';

const CartIconContext = createContext();

function CartIconProvider({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <CartIconContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </CartIconContext.Provider>
  );
}

function useCartIcon() {
  const context = useContext(CartIconContext);

  if (context === undefined)
    throw new Error('cartIcon context was used outside of it provider');
  return context;
}

export { CartIconProvider, useCartIcon };
