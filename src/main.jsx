import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
// Add React-Router..........
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/app",
    element: <App></App>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
