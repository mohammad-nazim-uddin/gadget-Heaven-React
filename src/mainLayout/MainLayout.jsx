import React from 'react';
import Navbar from '../components/Navbar';

import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div>
            <Toaster/>
            <div className="flex flex-col min-h-screen mt-5 mx-5 rounded-lg">
                <Navbar />


                <div className="flex-grow">
                    <Outlet />
                </div>

                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;