import React from 'react';
import Banner from './Page/Banner';
import Category from './Page/Category';
import PopularItem from './Page/PopularItem';
import Featured from '../Component/Featured';
import Testimonials from '../Component/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
   return (
         <div>
          <Helmet>
            <title>Bistro Boss | Home</title>
          </Helmet>
        <Banner></Banner> 
        <Category></Category>   
        <PopularItem></PopularItem> 
        <Featured></Featured>    
        <Testimonials></Testimonials>                                                                       
      </div>
  );
};

export default Home;