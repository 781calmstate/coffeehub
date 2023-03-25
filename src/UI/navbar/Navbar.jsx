import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context';
import cl from './Navbar.module.css';
import logo from '../../img/coffee_logo.jpg';

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  };
  return (
    <div>
      <nav className={cl.navbar}>
        <div className={cl.menu}>
          <img src={logo} alt="logo coffee" style={{ height: '110px', width: '115px' }} />
          <ul className={cl.list}>
            <li className={cl.link}>
              <Link to="/">Home</Link>
            </li>
            <li className={cl.link}>
              <Link to="/posts">To posts</Link>
            </li>
            <li className={cl.link}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <button className={cl.button} onClick={logout}>
          Sign out
        </button>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
