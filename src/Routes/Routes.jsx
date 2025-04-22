import React from 'react';
import Root from '../Pages/Root/Root';
import {
    createBrowserRouter,
  } from "react-router";
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/HomePage/Home';


export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {index: true, Component: Home},
      ]
    },
  ]);