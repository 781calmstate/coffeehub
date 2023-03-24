import Contact from '../Pages/Contact';
import ErrorPage from '../Pages/ErrorPage';
import HomePage from '../Pages/HomePage';
import Login from '../Pages/Login';
import PostIdPage from '../Pages/PostIdPage';
import PostPage from '../Pages/PostPage';

export const privateRoutes = [
  { path: '/', element: HomePage },
  { path: '/posts', element: PostPage },
  { path: '/posts/:id', element: PostIdPage },
  { path: '/contact', element: Contact },
  { path: '/*', element: ErrorPage },
];

export const publicRoutes = [{ path: '/login', element: Login }];
