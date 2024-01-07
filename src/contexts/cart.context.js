import { createContext, useContext, useState } from 'react';

const CartIconContext = createContext();

function addCartItem(cartItems, newCartItem) {
  const itemPresent = cartItems.find((item) => item.id === newCartItem.id);

  if (itemPresent) {
    return cartItems.map((item) =>
      item.id === newCartItem.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...newCartItem, quantity: 1 }];
}

function reduceCartItemQuantity(cartItems, cartItem) {
  const val = cartItem.quantity;

  if (val === 1) return cartItems.filter((item) => item.id !== cartItem.id);

  // return
  const newCartItems = cartItems.map((item) =>
    item.id === cartItem.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : item
  );

  return newCartItems;
}

function removeCartItem(cartItems, cartItem) {
  return cartItems.filter((item) => item.id !== cartItem.id);
}

function CartIconProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItem] = useState([]);

  function addItemToCart(newCartItem) {
    setCartItem(addCartItem(cartItems, newCartItem));
  }
  function reduceItemQuantity(cartItem) {
    setCartItem(reduceCartItemQuantity(cartItems, cartItem));
  }
  function removeItemFromCart(cartItem) {
    setCartItem(removeCartItem(cartItems, cartItem));
  }

  return (
    <CartIconContext.Provider
      value={{
        isOpen,
        setIsOpen,
        addItemToCart,
        cartItems,
        reduceItemQuantity,
        removeItemFromCart,
      }}
    >
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
