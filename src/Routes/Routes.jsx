import React from 'react';
import Root from '../Pages/Root/Root';
import {
    createBrowserRouter,
  } from "react-router";
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/HomePage/Home';
import About from '../Pages/About/ABout';
import BookDetails from '../Pages/BookDetails/BookDetails';



export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            index: true,
            loader: () => fetch('BooksData.json'),
            Component: Home
        },
        {
          path: '/About',
          Component: About,
        },
        {
          path: '/BookDetails/:id',
          loader: () => fetch('BooksData.json'),
          Component: BookDetails,
        },

      ]
    },
  ]);