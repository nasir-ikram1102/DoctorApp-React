import React from 'react';

const Login = React.lazy(() => import('../views/pages/login/Login'));
const Register = React.lazy(() => import('../views/pages/register/Register'));
const Page404 = React.lazy(() => import('../views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('../views/pages/page500/Page500'));

const publicRoutes = [
  { path: '/login', name: 'Login', component: Login, exact: true },
  { path: '/register', name: 'Register', component: Register, exact: true },
  { path: '/404', name: 'Page Not Found', component: Page404, exact: true },
  { path: '/500', name: 'Server Error', component: Page500, exact: true },
];

export default publicRoutes;
//