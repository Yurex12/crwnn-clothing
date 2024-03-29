import { Link, NavLink, Outlet } from 'react-router-dom';
import { ReactComponent as CrwnnLogo } from '../../assets/crown.svg';

import CartIcon from '../../components/cart-icon/cart-icon.component';

import './navigation.styles.scss';

import { signOutAuthUser } from '../../utils/firebase/firebase.utils';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { useSelector } from 'react-redux';
import { getUser } from '../../store/user/user-reducer';
import { getIsOpen } from '../../store/cart/cart-reducer';

const Navigation = () => {
  const currentUser = useSelector(getUser);

  const isOpen = useSelector(getIsOpen);

  return (
    <>
      <header className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnnLogo className='logo' />
        </Link>

        <nav className='nav-links-container'>
          <NavLink to='/shop' className='nav-link'>
            SHOP
          </NavLink>
          {currentUser ? (
            <button onClick={signOutAuthUser}>SIGN OUT</button>
          ) : (
            <NavLink to='/auth' className='nav-link'>
              SIGN IN
            </NavLink>
          )}

          <CartIcon />
        </nav>
        {isOpen && <CartDropdown />}
      </header>

      <Outlet />
    </>
  );
};

export default Navigation;
