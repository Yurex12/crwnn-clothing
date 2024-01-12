import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';
import { getCartItems, getTotalPrice } from '../../store/cart/cart-reducer';
import PaymentForm from '../../components/payment-form/payment-form.component';

function Checkout() {
  const totalPrice = useSelector(getTotalPrice);
  const cartItems = useSelector(getCartItems);

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
      <span className='total'>Total : ${totalPrice}</span>
      <PaymentForm />
    </div>
  );
}

export default Checkout;
