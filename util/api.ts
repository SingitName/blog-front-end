import {createApi,fetchBaseQuery} from  '@reduxjs/toolkit/query/react';
export const authApi = createApi({
     reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BE_URL}), // hoặc URL base API của bạn
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userData) => ({
        url: 'auth/register',
        method: 'POST',
        body: userData,
      }),
    }),
    loginUser: builder.mutation({
      query: (loginData) => ({
        url: 'auth/login',
        method: 'POST',
        body: loginData,
      }),
    }),
  }),
});
export const { useRegisterUserMutation, useLoginUserMutation } = authApi;