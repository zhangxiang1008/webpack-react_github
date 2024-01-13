import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './index'
import ErrorPage from './errorPage'
import IndexPage from '../pages/index'
import HocPage from '../pages/hocPage/index'
export const router = createBrowserRouter([
  {
    path: '',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <div>homepage</div>
      },
      { path: '/index', element: <IndexPage /> },
      { path: '/index2', element: <HocPage /> }
    ]
  }
])
