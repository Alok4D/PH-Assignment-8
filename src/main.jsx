import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
// Add React-Router........
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Roots/Root';
import Error from './Components/Error Page/Error';
import ViewTheListBooks from './Components/View The List/ViewTheListBooks';
import Book from './Components/Books/Book';
import CardDetails from './Components/Card Details/CardDetails';
import BookDetails from './Components/View The List/Book Details/BookDetails';
import PagesToRead from './Components/Pages to Read/PagesToRead';
import User from './Components/Users/User';
import ViewDetails from './Components/View Details/ViewDetails';
import ViewDetailsTwo from './Components/View Details Card two/ViewDetailsTwo';




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
        path: "/cardDetails/:id",
        element: <CardDetails></CardDetails>,
      
      },
      {
        path: "/bookDetails",
        element: <BookDetails></BookDetails>,
      },
      {
        path: "/pagesRead",
        element: <PagesToRead></PagesToRead>
      },
      {
        path: "//user",
        element: <User></User>,
      },
      {
        path: "/viewDetails/:id",
        element: <ViewDetails></ViewDetails>,
        loader: () => fetch('/Books.json'),
      },
      {
        path: "/cardDetailsTwo/:id",
        element: <ViewDetailsTwo></ViewDetailsTwo>,
        loader: () => fetch('/Books.json'),
      },
     
     
   
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer></ToastContainer>,
  </React.StrictMode>,
)
