import { Link, NavLink, Outlet } from 'react-router-dom';
import {ReactComponent as CrwnnLogo } from '../../assets/007 crown.svg';


import './navigation.styles.scss';

const Navigation = () => {
  return (
    <>
      <header className='navigation'>
       <Link className='logo-container' to='/'>
        <CrwnnLogo className='logo'/>
       </Link>

       <nav className='nav-links-container'>
        <NavLink to='/shop' className='nav-link'>SHOP</NavLink>
        <NavLink to='/sign-in' className='nav-link'>SIGN IN</NavLink>
       </nav>
      </header>

      <Outlet />
    </>
  );
};

export default Navigation;
