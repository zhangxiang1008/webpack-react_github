import React from 'react'
import { createHashRouter } from 'react-router-dom'
import Root from './index'
import ErrorPage from './errorPage'
import IndexPage from '../pages/index'
import HocPage from '../pages/hocPage/index'
import ThreeCol from '../pages/cssPages/threeColumns'

export const router = createHashRouter([
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
      { path: '/index2', element: <HocPage /> },
      { path: '/threeCol', element: <ThreeCol /> }
    ]
  }
])
