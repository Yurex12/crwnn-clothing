import { createSelector } from 'reselect';

const initialState = {
  cartItems: [],
  isOpen: false,
};

export default function cartReducer(state = initialState, action) {
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
      return state;
  }
}

export const getTotal = (state) => state.cart.cartItems;

export const getTotalItem = createSelector([getTotal], (categories) => {
  const totalItem = categories.reduce((sum, item) => +sum + +item.quantity, []);
  return totalItem;
});

export function getIsOpen(state) {
  return state.cart.isOpen;
}

export function getCartItems(state) {
  return state.cart.cartItems;
}

export function getTotalPrice(state) {
  return state.cart.cartItems.reduce(
    (acc, arr) => acc + arr.quantity * arr.price,
    0
  );
}
