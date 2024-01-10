import Button from '../button/button.component';
import './cart-dropdown.styles.scss';

import CartItem from '../cart-item/cart-item.component';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCartItems } from '../../store/cart/cart-reducer';

function CartDropdown() {
  const cartItems = useSelector(getCartItems);
  const navigate = useNavigate();
  console.log(1,cartItems)

  if (!cartItems.length)

    return (
      <div className='cart-dropdown-container'>
        <p
          style={{
            marginTop: '100px',
            textAlign: 'center',
          }}
        >
          You have no items in your cart
        </p>
        ;
      </div>
    );

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>

      <Button onClick={() => navigate('/checkout')}>GO TO CHECKOUT </Button>
    </div>
  );
}

export default CartDropdown;
