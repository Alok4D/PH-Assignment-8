import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
// Add React-Router..........
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Roots/Root';
import Home from './Components/Home/Home';

import Error from './Components/Error Page/Error';
import Book from './Components/Books/Book';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listedBooks",
        element: <Book></Book>,
        loader: () => fetch('Books.json'),
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
