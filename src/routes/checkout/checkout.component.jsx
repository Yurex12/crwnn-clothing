import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { useCartIcon } from '../../contexts/cart.context';

import './checkout.styles.scss';

function Checkout() {
  const { cartItems } = useCartIcon();

  const total = cartItems.reduce(
    (acc, arr) => acc + arr.quantity * arr.price,
    0
  );
  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((item) => (
        <CheckoutItem cartItem={item} key={item.id} />
      ))}
      <span className='total'>Total : ${total}</span>
    </div>
  );
}

export default Checkout;
