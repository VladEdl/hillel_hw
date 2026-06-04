import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from './productsApi';
import cartReducer from './cartSlice';
import authReducer from './authSlice';

export default configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        cart: cartReducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
});