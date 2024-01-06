import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useCartIcon } from '../../contexts/cart.context';

import './cart-icon.styles.scss';

function CartIcon() {
  const { setIsOpen } = useCartIcon();

  return (
    <div
      className='cart-icon-container'
      onClick={() => {
        setIsOpen((c) => !c);
      }}
    >
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
}

export default CartIcon;
