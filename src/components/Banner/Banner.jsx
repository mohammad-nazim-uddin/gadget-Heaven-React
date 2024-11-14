import React from 'react';
import banner from '../../assets/banner.jpg';

const Banner = () => {
    return (
        <div className='mb-24'>
            <div className="relative bg-purple-600 text-white py-16 px-4 flex flex-col items-center">
                {/* Heading and Subheading */}
                <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">
                    Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
                </h1>
                <div className='mb-36 text-center'>
                    <p className="text-lg md:text-xl mb-8 text-center max-w-lg">
                    Explore the latest gadgets that will take your experience to the next level.
                    From smart devices to the coolest accessories, we have it all!
                </p>

                    {/* Button */}
                    <button className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-full hover:bg-purple-500 hover:text-white transition mb-16">
                        Shop Now
                    </button>
                </div>
                {/* Image Container with Overlap Effect */}
                <div className="absolute inset-x-0 -bottom-24 flex justify-center z-10">
                    <div className="bg-white p-4 rounded-lg shadow-lg max-w-md md:max-w-lg">
                        <img 
                            src={banner} // Replace with your actual image path
                            alt="VR Headset"
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Banner;