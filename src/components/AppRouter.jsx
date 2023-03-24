import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../context';
import { privateRoutes, publicRoutes } from '../routes/router';
import Loader from '../UI/loader/Loader';
import Navbar from '../UI/navbar/Navbar';

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }
  return isAuth ? (
    <Routes>
      <Route element={<Navbar />}>
        {privateRoutes.map((route) => (
          <Route key={route.element} path={route.path} element={<route.element />} />
        ))}
      </Route>
      isAuth ? <Route path="/login" element={<Navigate to="/" replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.element} path={route.path} element={<route.element />} />
      ))}
      <Route path="/*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRouter;
