import React from 'react';
import { IoCloseCircleOutline } from "react-icons/io5";

const CartDashboard = ({ products, handleRemoveProduct }) => {
    const {product_id, product_image, product_title, price, description } = products;

    return (
        <div>

            <div className='flex gap-8 my-10 mx-10 items-center p-8 border-2 rounded-xl shadow-xl '>
                <div>
                    <img  src={product_image} alt="" />
                </div>
                <div className='grid gap-5'>
                    <div className='flex  lg:w-[900px] justify-between '>
                        <p className='font-bold text-3xl'>{product_title}</p>
                        <div onClick={() =>handleRemoveProduct(product_id) } className='text-4xl'>
                            <IoCloseCircleOutline />
                        </div>
                    </div>
                    <p className='text-base text-gray-500'>{description}</p>
                    <p className='font-bold text-2xl'>Price:${price}</p>
                </div>

            </div>
        </div>
    );
};

export default CartDashboard;