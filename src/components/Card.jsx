import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ products }) => {


    const {product_id, product_title, product_image, price, rating } = products
    console.log(product_title)
    return (
        <div className=''>
            <div className="card card-compact bg-base-100 w-80 shadow-xl ">
                <div className='py-10'>
                    <figure>
                        <img
                            src={product_image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{product_title}</h2>
                        <p className='text-basefont-small text-gray-500  text-lg'>Price: ${price}</p>
                        <div className="card-actions">
                            <Link to={`/product/${product_id}`} className='w-2/4 border-2 border-indigo-600 rounded-full font-bold text-base text-blue-600 px-5 py-2 hover:border-gray-400 hover:text-gray-400'>
                                <button className="">View details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;