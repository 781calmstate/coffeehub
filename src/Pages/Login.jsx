import React, { useContext } from 'react';
import { AuthContext } from '../context';
import logo from '../img/coffee_logo.jpg';
import cl from '../styles/Login.module.css';
import MyInput from '../UI/input/MyInput';

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  };

  return (
    <div className={cl.content}>
      <h1 className={cl.logo}>
        <img src={logo} alt="coffehub logo" />
      </h1>
      <form className={cl.form} onSubmit={login}>
        <div className={cl.inputwrap}>
          <MyInput type="text" placeholder="username" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Outline"
            viewBox="0 0 24 24"
            width="17"
            height="17"
          >
            <path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z" />
            <path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z" />
          </svg>
        </div>
        <div className={cl.inputwrap}>
          <MyInput type="password" placeholder="password" />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Outline"
            viewBox="0 0 24 24"
            width="17"
            height="17"
          >
            <path d="M19,8.424V7A7,7,0,0,0,5,7V8.424A5,5,0,0,0,2,13v6a5.006,5.006,0,0,0,5,5H17a5.006,5.006,0,0,0,5-5V13A5,5,0,0,0,19,8.424ZM7,7A5,5,0,0,1,17,7V8H7ZM20,19a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V13a3,3,0,0,1,3-3H17a3,3,0,0,1,3,3Z" />
            <path d="M12,14a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V15A1,1,0,0,0,12,14Z" />
          </svg>
        </div>
        <button className={cl.button}>Sign in</button>
      </form>
    </div>
  );
};

export default Login;
