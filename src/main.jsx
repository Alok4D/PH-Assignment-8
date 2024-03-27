import { ToastContainer, toast } from 'react-toastify';
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
import PagesRead from './Components/Pages To Read/PagesRead';




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
        path: "/pagesRead",
        element: <PagesRead></PagesRead>,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer></ToastContainer>,
  </React.StrictMode>,
)
