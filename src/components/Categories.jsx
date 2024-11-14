import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';


const Categories = ({ categories }) => {


    return (
        <div className='border-4  bg-base-100 p-2 h-96 py-5'>

            <div role="tablist" className=" flex flex-col gap-5">
                <NavLink to='/allproducts'  role="tab" className={({isActive}) => `tab btn border-2  rounded-full  text-center ${isActive?'tab-active':""}`}>
                    <button className='rounded-full '>All product</button>
                </NavLink>
                {

                    categories.map(category => <NavLink to={`/categories/${category.category}`} role="tab" className={({isActive}) => `tab btn border-2 p-2 rounded-full px-6 text-center ${isActive?'tab-active':""}`}>{category.category}</NavLink>)
                }
            </div>




        </div>
    );
};

export default Categories;