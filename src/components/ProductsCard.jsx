import React, { useEffect, useState } from 'react';
import { NavLink, useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';
import Categories from './Categories';

const ProductsCard = () => {
    const data = useLoaderData()
    const { category } = useParams()
    const [products, setProducts] = useState([])
    useEffect(() => {
        if (category) {
            const filteredByCategory = [...data].filter(product => product.category === category)
            setProducts(filteredByCategory)
        }
        else {
            setProducts(data)
        }
    }, [category, data])



    return (
        <div>


            {
                products.length == 0 ? <div className='text-4xl text-slate-600'>No Data to Show</div> : <div className="text-5xl grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        products.map(products => <Card products={products}></Card>)
                    }
                </div>
            }


        </div>
    );
};

export default ProductsCard;

