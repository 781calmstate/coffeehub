import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Contact from '../Pages/Contact';
import ErrorPage from '../Pages/ErrorPage';
import HomePage from '../Pages/HomePage';
import PostIdPage from '../Pages/PostIdPage';
import PostPage from '../Pages/PostPage';
import Navbar from '../UI/navbar/Navbar';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<HomePage />} />
        <Route path="posts" element={<PostPage />} />
        <Route path="posts/:id" element={<PostIdPage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
