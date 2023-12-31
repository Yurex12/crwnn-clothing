import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useCartIcon } from '../../contexts/cart.context';

import './cart-icon.styles.scss';

function CartIcon() {
  const { setIsOpen, cartItems } = useCartIcon();

  const totalItem = cartItems.reduce((sum, item) => +sum + +item.quantity, []);

  return (
    <div
      className='cart-icon-container'
      onClick={() => {
        setIsOpen((c) => !c);
      }}
    >
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>
        {typeof totalItem !== 'number' ? 0 : totalItem}
      </span>
    </div>
  );
}

export default CartIcon;
