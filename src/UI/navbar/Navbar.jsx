import React, { useContext } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
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
            <li className={cl.list_item}>
              <NavLink to="/" className={({ isActive }) => (isActive ? cl.active : cl.not_active)}>
                Home
              </NavLink>
            </li>
            <li className={cl.list_item}>
              <NavLink
                to="/posts"
                className={({ isActive }) => (isActive ? cl.active : cl.not_active)}
              >
                To posts
              </NavLink>
            </li>
            <li className={cl.list_item}>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? cl.active : cl.not_active)}
              >
                Contact
              </NavLink>
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
