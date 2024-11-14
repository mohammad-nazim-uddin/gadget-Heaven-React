import React, { useEffect, useState } from 'react';
import CartDashboard from './CartDashboard';
import { clearFavorites, getAllFavorites, removeFavorite } from '../utils';
import { useNavigate } from 'react-router-dom';
import done from '../assets/Group.png'
const Cart = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const favorites = getAllFavorites()
        setProducts(favorites)
    }, [])

    const [totalPrice, setTotalPrice] = useState(0);
    const [finalPrice, setFinalPrice] = useState(null)
    useEffect(() => {
        let sum = 0;
        for (let product of products) {
            sum += product.price
        }
        setTotalPrice(sum)
    }, [products])

    const [modalOpen, setModalOpen] = useState(false)
    const navigate = useNavigate();

    const handleRemoveProduct = id => {
        removeFavorite(id)
        const favorites = getAllFavorites()
        setProducts(favorites)
    }

    const handlePurchase = () => {

        // setProducts([]);
        // clearFavorites();
        setFinalPrice(totalPrice)
        document.getElementById('my_modal_1').showModal()


    };

    const handleSortByPrice = () => {
        const sortedProducts = [...products].sort((a, b) => b.price - a.price);
        setProducts(sortedProducts)
        setTotalPrice(0);

    };

    const handleCloseModal = () => {
        document.getElementById('my_modal_1').close()
        setProducts([]);
        clearFavorites();
        setTotalPrice(0);
        setFinalPrice(null);

        navigate("/");

    }

    const isPuchaseDisable = products.length === 0 || totalPrice === 0;

    return (
        <div>
            {
                products.length == 0 ? <div>
                    <div className='grid gap-5 mb-5 lg:flex justify-between'>
                        <div className='text-5xl font-bold'>
                            <p>Cart</p>
                        </div>
                        <div className='flex gap-5 items-center '>

                            <p className='font-bold text-xl'>Total Cost: ${totalPrice}</p>
                            <button onClick={handleSortByPrice} className='btn'>Sort by Price</button>
                            <button
                                disabled={isPuchaseDisable}
                                className="btn" onClick={handlePurchase}>Purchase</button>
                        </div>

                    </div>
                    <div className='text-4xl text-slate-700 text-center'>No Data to shown</div>
                </div> : <div>
                    <div>

                        <div className='flex justify-between'>
                            <div className='text-5xl font-bold'>
                                <p>Cart</p>
                            </div>
                            <div className='flex gap-5 items-center '>

                                <p className='font-bold text-xl'>Total Cost: ${totalPrice}</p>
                                <button onClick={handleSortByPrice} className='btn'>Sort by Price</button>
                                <button
                                    disabled={isPuchaseDisable}
                                    className="btn" onClick={handlePurchase}>Purchase</button>
                            </div>

                        </div>
                        <div className=" grid gap-4">
                            {
                                products.map(products => <CartDashboard handleRemoveProduct={handleRemoveProduct} products={products}></CartDashboard>)
                            }
                        </div>
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box flex flex-col justify-center items-center">
                                <img width='70' height='65' src={done} alt="" />
                                <h3 className="font-bold text-lg">Payment Successful</h3>
                                <p className="py-4">Thanks for purchasing</p>
                                <p>TotalPrice: ${totalPrice}</p>
                                <div className="modal-action">
                                    <div method="dialog">
                                        <button onClick={handleCloseModal} className="btn">Close</button>
                                    </div>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            }
        </div>
    );
};

export default Cart;