import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getAllFavorites } from '../utils';

import CartDashboard from '../components/CartDashboard';
import Cart from '../components/Cart';
import Wishlist from '../components/Wishlist';
import PageTitle from '../components/PageTitle';

const Dashboard = () => {

    const [active, setActive] = useState(true);
    const toggleBtn =(state) =>{
        if(state == 'cart'){
            setActive(true);
        }
        else{
            setActive(false)
        }
    }
    

    return (
        <div>
            <PageTitle title="Dashboard"/>
            <div className='text-center bg-indigo-600 text-white  h-66 p-10 px- mb-5'>
                <p className='text-2xl font-bold mb-3'>Product Details</p>
                <p>Explore the latest gadgets that will take your experience to the next level. <br /> From smart devices to the coolest accessories, we have it all!</p>
                <div className='flex  justify-center  gap-3 mt-5'>
                    <button onClick={() =>toggleBtn('cart')} className={`btn px-12 rounded-3xl ${active ? "btn-active" : ""}`}>Cart</button>
                    <button onClick={() =>toggleBtn('wishlist')} className={`btn btn px-9  rounded-3xl ${active ? "" : "btn-active"}`}>Wishlist</button>
                </div>
            </div>
            
            {active ? <Cart /> : <Wishlist />}
            
        </div>
    );
};

export default Dashboard;