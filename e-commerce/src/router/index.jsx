import { createBrowserRouter } from 'react-router';
import MainLayout from '@layouts/MainLayout';
import HomePage from '@pages/HomePage';
import ProductPage from '@pages/ProductPage';
import CategoryPage from '@pages/CategoryPage';
import SearchPage from '@pages/SearchPage';
import CartPage from '@pages/CartPage';
import LoginPage from '@pages/LoginPage';

const routerConfig = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'product/:id',
                element: <ProductPage />,
            },
            {
                path: 'category/:category',
                element: <CategoryPage />,
            },
            {
                path: 'search',
                element: <SearchPage />,
            },
            {
                path: 'cart',
                element: <CartPage />,
            },
            {
                path: 'login',
                element: <LoginPage />,
            },
        ],
    },
]);

export default routerConfig;