import Button from '../button/button.component';
import './cart-dropdown.styles.scss';

function CartDropdown() {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        <Button buttonType='inverted'>GO TO CHECKOUT</Button>
      </div>
    </div>
  );
}

export default CartDropdown;
