import React, { useContext } from 'react';
import { AuthContext } from '../context';
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  };

  return (
    <div>
      <h1>Sign in page</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="username" />
        <MyInput type="password" placeholder="password" />
        <MyButton>Sign in</MyButton>
      </form>
    </div>
  );
};

export default Login;
