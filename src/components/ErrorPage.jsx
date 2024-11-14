import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const ErrorPage = () => {
    return (
        
        <div>
            
            <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1 className='text-2xl font-bold'>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>

            <div className='text-xl mt-10 btn'>
                <Link to="/">Go to Home</Link>
            </div>
           
        </div>
        </div>
    );
};

export default ErrorPage;