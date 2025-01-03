import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import NavBar from '../Pages/Shared/NavBar';

const Main = () => {
  const locatio=useLocation();
  const isLogin=locatio.pathname.includes('login') || locatio.pathname.includes('signup');
 return (
  <div>
       {isLogin || <NavBar></NavBar> }                      
     <Outlet></Outlet> 
    { isLogin || <Footer></Footer> }                                                                                   
   </div>
   );
};

export default Main;