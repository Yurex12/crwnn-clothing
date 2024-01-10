import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';
import { getTotalItem } from '../../store/cart/cart-reducer';

function CartIcon() {
  const dispatch = useDispatch();
  const totalItem = useSelector(getTotalItem);

  function handleCartDropdownToggle() {
    dispatch({ type: 'taskDropdown/toggle' });
  }

  return (
    <div className='cart-icon-container' onClick={handleCartDropdownToggle}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>
        {typeof totalItem !== 'number' ? 0 : totalItem}
      </span>
    </div>
  );
}

export default CartIcon;
