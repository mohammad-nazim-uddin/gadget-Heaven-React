import { NavLink, Link, useLocation } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { getAllFavorites, getAllWishlist } from "../utils";
import { useEffect, useState } from "react";


const Navbar = () => {
  const [products, setProducts] = useState([])

    useEffect(() => {
        const favorites = getAllFavorites()
        setProducts(favorites)
    }, [])

    const[wished, setWished] = useState([])
    useEffect(()=>{
      const wishlist = getAllWishlist()
      setWished(wishlist);
    },[])
    
  const location = useLocation();
  const iswhiteNavbar = location.pathname === '/' ;
  return (
    <div className={`navbar bg-base-100 font-bold ${iswhiteNavbar ? 'bg-purple-600 text-white' : 'bg-white text-black'}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><Link>Home</Link></li>
            <li>
              <Link>Statistics</Link>
            </li>
            <li><Link to='/dashboard'>Dashboard</Link></li>
            <li><Link to='/blogs'>Blogs</Link></li>
          </ul>
        </div>
        <Link className="btn btn-ghost text-2xl font-extrabold">Gadget Heaven</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link>Home</Link></li>
          <li>
            <Link to='/statistics'>Statistics</Link>
          </li>
          <li><Link to='/dashboard'>Dashboard</Link></li>
          <li><Link to='/blogs'>Blogs</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex gap-4">
          <div className="text-3xl">
            <FaRegHeart />
            <p className="absolute -top-[-20px] -right-[-65px] border-5 rounded-full">{wished.length}</p>
          </div>
          <div className="text-3xl">
            <AiOutlineShoppingCart/>
            <p className="absolute -top-[-20px] -right-[-18px] border-5 rounded-full">{products.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;