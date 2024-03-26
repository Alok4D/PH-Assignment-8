import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
// Add React-Router..........
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Roots/Root';


import Error from './Components/Error Page/Error';

import ViewTheListBooks from './Components/View The List/ViewTheListBooks';
import Book from './Components/Books/Book';
import CardDetails from './Components/Card Details/CardDetails';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [

      {
        path: "/",
        element: <Book></Book>,
       
      },

      {
        path: "/listedBooks",
        element: <ViewTheListBooks></ViewTheListBooks>,
      },
      
      {
        path: "/cardDetails/:bookId",
        element: <CardDetails></CardDetails>,
        loader: () => fetch('/Books.json'),
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
