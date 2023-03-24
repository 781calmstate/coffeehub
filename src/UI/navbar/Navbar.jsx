import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context';
import cl from './Navbar.module.css';

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  };
  return (
    <div style={{ width: '100%' }}>
      <nav className={cl.navbar}>
        <ul className={cl.menu}>
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
        <button className={cl.button} onClick={logout}>
          Sign out
        </button>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
