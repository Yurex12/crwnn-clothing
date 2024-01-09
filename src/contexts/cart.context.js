import { createContext, useContext, useReducer } from 'react';

const CartIconContext = createContext();

const initialState = {
  cartItems: [],
  isOpen: false,
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'cart/addItem':
      const itemPresent = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (itemPresent) {
        const newCartItems = state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return {
          ...state,
          cartItems: newCartItems,
        };
      }

      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
      };

    case 'cart/reduceItemQuantity':
      const val = action.payload.quantity;

      if (val === 1) {
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (item) => item.id !== action.payload.id
          ),
        };
      }

      const newCartItems = state.cartItems.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

      return {
        ...state,
        cartItems: newCartItems,
      };

    case 'cart/removeItemFromCart':
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    case 'taskDropdown/toggle':
      return {
        ...state,
        isOpen: !state.isOpen,
      };

    default:
      throw new Error('Uknown action');
  }
}

function CartIconProvider({ children }) {
  const [{ cartItems, isOpen }, dispatch] = useReducer(
    cartReducer,
    initialState
  );

  function addItemToCart(newCartItem) {
    dispatch({ type: 'cart/addItem', payload: newCartItem });
  }
  function reduceItemQuantity(cartItem) {
    dispatch({ type: 'cart/reduceItemQuantity', payload: cartItem });
  }
  function removeItemFromCart(cartItem) {
    dispatch({ type: 'cart/removeItemFromCart', payload: cartItem });
  }

  function setIsOpen() {
    dispatch({ type: 'taskDropdown/toggle' });
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
