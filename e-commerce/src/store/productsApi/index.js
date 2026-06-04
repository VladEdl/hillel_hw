import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '@constants/API.js';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL
    }),
    endpoints: (build) => ({
        getProducts: build.query({
            query: ({ limit = 8, skip = 0, category } = {}) =>
                category
                    ? `products/category/${category}?limit=${limit}&skip=${skip}`
                    : `products?limit=${limit}&skip=${skip}`,
        }),
        getProductById: build.query({
            query: (id) => `products/${id}`,
        }),
        getCategories: build.query({
            query: () => `products/categories`,
        }),
        searchProducts: build.query({
            query: (q) => `products/search?q=${q}`,
        }),
        getComments: build.query({
            query: ({ limit = 10 } = {}) => `comments?limit=${limit}`,
        }),
    }),
});

export const {
    useGetProductsQuery,
    useGetProductByIdQuery,
    useGetCategoriesQuery,
    useSearchProductsQuery,
    useGetCommentsQuery,
} = productsApi;