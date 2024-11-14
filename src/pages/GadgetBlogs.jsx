import React from 'react';
import PageTitle from '../components/PageTitle';

const GadgetBlogs = () => {
    return (
        <div>
            <PageTitle title="Blogs"/>
            <div className="container mx-auto px-4 py-10">
                <h1 className="text-4xl font-bold text-center mb-10">Latest in Gadget Heaven</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                    <h1>
                        <p className='text-2xl font-bold'>Top 5 Smartphones of 2024: Which One is Right for You?</p>
                        <p className='text-xl font-semibold'>November 10, 2024</p>
                        <p>Explore the latest smartphones that are setting new standards in technology and design. We’ve reviewed the top 5 contenders to help you find the perfect fit for your needs. <span className='text-slate-500 cursor-pointer'>...Read more</span></p>
                    </h1>

                    <h1>
                        <p className='text-2xl font-bold'>Smart Home Devices You Need <br />in 2024</p>
                        <p className='text-xl font-semibold'>October 25, 2024</p>
                        <p>Make your home smarter with the latest in AI-powered devices. From security cameras to smart speakers, see which products are worth the investment this year. <span className='text-slate-500 cursor-pointer'>...Read more</span></p>

                    </h1>



                </div>
            </div>
        </div>
    );
};

export default GadgetBlogs;