import React from 'react';
import {
  createBrowserRouter,
} from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../Pages/Home';
import Menu from '../Pages/Page/Menu';
import OrderFood from '../Pages/Page/OrderFood';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import Secret from '../Pages/Shared/Secret';
import PrivateRoute from './PrivateRout';
import DashBoard from '../Layout/DashBoard';
import Cart from '../Pages/DashboardPage/Cart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
         path:'/',
         element:<Home></Home>                     
      },
      {
        path:'/menu',
        element:<Menu></Menu>
      } ,
      {
        path: 'order/:category',
        element:<OrderFood></OrderFood>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/signup',
        element:<SignUp></SignUp>
      },
      {
        path:'/secret',
        element:<PrivateRoute> <Secret></Secret></PrivateRoute>
        
      } 

    ]
  },
  {
    path:'dashboard',
    element:<DashBoard></DashBoard>,
    children:[
      {
        path:'cart',
        element:<Cart></Cart>
      }
    ]
  }
]);

export default router;