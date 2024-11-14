import React, { useEffect, useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa6';
import { useLoaderData, useParams } from 'react-router-dom';
import { addFavorite, addTowishlist, getAllFavorites, getAllWishlist } from '../utils';
import ReactStars from 'react-rating-stars-component';

const ProductDetails = () => {
    const data = useLoaderData()

    const [product, setProduct] = useState({})

    const { id } = useParams()
    useEffect(() => {
        const singleProduct = data.find(p => p.product_id == id)
        setProduct(singleProduct)
    }, [data, id])

    const [wishProduct, setWishProduct] = useState([])
    useEffect(() => {
        const wish = getAllWishlist();
        setWishProduct(wish)
    }, [])

    const finalWish = wishProduct.find(p => p.product_id == product.product_id)


    const handleFavorite = (product) => {
        addFavorite(product)

    }
    const handleWishlist = (product) => {
        addTowishlist(product)
        setWishProduct(prevWishProduct => [...prevWishProduct, product]);
    }

    return (
        <div className='relative  pb-96'>
            <div className='text-center bg-indigo-600 text-white  h-96 p-10 px- mb-20'>
                <p className='text-2xl font-bold mb-3'>Product Details</p>
                <p>Explore the latest gadgets that will take your experience to the next level. <br /> From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className="hero bg-base-200  border-8 rounded-3xl absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 shadow-lg ">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <img
                        width='400'
                        src={product.product_image} />
                    <div>
                        <h1 className="text-5xl font-bold">{product.product_title}</h1>

                        <p className='text-2xl mt-5 font-bold'>Price: ${product.price}</p>
                        <p className="py-6 text-2xl">
                            {product.description}
                        </p>
                        <p className='text-xl mb-5'>
                            <h1 className='font-bold text-2xl'>Specifications:</h1>
                            {product?.specification?.map((spec, index) => (
                                <div key={index}>{spec}</div>
                            ))}
                        </p>
                        <p className='text-2xl mb-5'>
                            ratings: {product.rating}
                            <ReactStars
                                count={5}
                                
                                size={24}
                                activeColor="#ffd700"
                            />
                        </p>
                        <div>

                        </div>
                        <div className='flex items-center gap-6'>
                            <div className='btn btn-primary'>
                                <button

                                    onClick={() => handleFavorite(product)}
                                    className=" font-bold text-lg">
                                    Add To Cart
                                </button>

                                <AiOutlineShoppingCart className='text-3xl' />

                            </div>
                            <div className=''>
                                <button className='btn rounded-full text-2xl' disabled={finalWish} onClick={() => handleWishlist(product)}>
                                    <FaRegHeart />
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;