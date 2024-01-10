import { useDispatch } from 'react-redux';

import './checkout-item.styles.scss';

function CheckoutItem({ cartItem }) {
  const dispatch = useDispatch();

  function handleAddItem(cartItem) {
    dispatch({ type: 'cart/addItem', payload: cartItem });
  }
  function handleReduceItemQuantity(cartItem) {
    dispatch({ type: 'cart/reduceItemQuantity', payload: cartItem });
  }
  function handleremoveItemFromCart(cartItem) {
    dispatch({ type: 'cart/removeItemFromCart', payload: cartItem });
  }

  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div
          className='arrow'
          onClick={() => handleReduceItemQuantity(cartItem)}
        >
          &#10094;
        </div>
        <span className='value'>{quantity}</span>

        <div className='arrow' onClick={() => handleAddItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div
        className='remove-button'
        onClick={() => handleremoveItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
}

export default CheckoutItem;
