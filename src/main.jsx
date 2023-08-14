import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './Home';
import Login from './Auth/Login';
import Register from './Auth/Register';


const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
