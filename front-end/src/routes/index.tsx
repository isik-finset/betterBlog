// react
import { Suspense, lazy, ElementType } from 'react';
// router
import { useRoutes } from 'react-router';
import { Navigate } from 'react-router-dom';
// layouts
import MainLayout from '../layouts/MainLayout';
// components
import LoadingScreen from '../components/LoadingScreen';
// Guard
import PrivateRoute from './PrivateRoute';


// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) =>
(
  <Suspense fallback={<LoadingScreen />}>
    <Component {...props} />
  </Suspense>
);

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { element: <Navigate to="/landing" replace />, index: true },
        { path: '/landing', element: <LandingPage /> },
        { path: '/login', element: <LoginPage /> },
        { path: '/register', element: <Register /> },
        { path: '/user-profile', element: <PrivateRoute><UserProfilePage /></PrivateRoute> }, // protected route
        { path: '/single-post', element: <SinglePost /> }, // protected route
        { path: '/my-posts', element: <PrivateRoute><MyPosts /></PrivateRoute> }, // protected route
        { path: '/write-post', element: <PrivateRoute><WritePost /></PrivateRoute> }, // protected route
        { path: '/edit-post', element: <PrivateRoute><EditPost /></PrivateRoute> } // protected route
      ],
    },
    {
      path: '*',
      element: <MainLayout />,
      children: [
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ])


}

// Routes
const LandingPage = Loadable(lazy(() => import('../pages/Landing')));
const LoginPage = Loadable(lazy(() => import('../pages/Login')));
const UserProfilePage = Loadable(lazy(() => import('../pages/UserProfile')));
const NotFound = Loadable(lazy(() => import('../pages/Page404')));
const Register = Loadable(lazy(() => import('../pages/Register')));
const SinglePost = Loadable(lazy(() => import('../pages/SinglePost')));
const MyPosts = Loadable(lazy(() => import('../pages/MyPosts')));
const WritePost = Loadable(lazy(() => import('../pages/WritePost')));
const EditPost = Loadable(lazy(() => import('../pages/EditPost')));



