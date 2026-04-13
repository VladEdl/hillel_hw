import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import AppLayout from '../components/AppLayout.jsx';
import UsersListPage from '../pages/UsersListPage.jsx';
import UserDetailsPage from '../pages/UserDetailsPage.jsx';
import CreateUserPage from '../pages/CreateUserPage.jsx';
import EditUserPage from '../pages/EditUserPage.jsx';
import NotFoundPage from '../pages/NotFoundPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate to="/users" replace /> },
      { path: 'users', element: <UsersListPage /> },
      { path: 'users/create', element: <CreateUserPage /> },
      { path: 'users/:id', element: <UserDetailsPage /> },
      { path: 'users/:id/edit', element: <EditUserPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

export default router;
