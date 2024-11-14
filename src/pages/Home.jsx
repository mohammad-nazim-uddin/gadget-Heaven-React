import React from 'react';

import Banner from '../components/Banner/Banner';
import Categories from '../components/Categories';



import { Outlet, useLoaderData } from 'react-router-dom';
import PageTitle from '../components/PageTitle';




const Home = () => {
    const data = useLoaderData()
   


    return (
        <div>
            <PageTitle title="Home"/>
            <Banner></Banner>
            <p className='text-4xl text-center font-bold mt-36 mb-10'>Explore Cutting-Edge Gadgets</p>

            <div className='flex gap-5'>
                <Categories categories={data}></Categories>
               <Outlet></Outlet>
            </div>


        </div>
    );
};

export default Home;