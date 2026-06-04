import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const existing = state.items.find(
                (item) => item.id === action.payload.id && item.size === action.payload.size
            );
            if (existing) {
                existing.quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload);
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(
                (item) => !(item.id === action.payload.id && item.size === action.payload.size)
            );
        },
        increaseQuantity: (state, action) => {
            const item = state.items.find(
                (item) => item.id === action.payload.id && item.size === action.payload.size
            );
            if (item) item.quantity += 1;
        },
        decreaseQuantity: (state, action) => {
            const item = state.items.find(
                (item) => item.id === action.payload.id && item.size === action.payload.size
            );
            if (item && item.quantity > 1) item.quantity -= 1;
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;