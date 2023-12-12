import { ShoppingCart, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge, Button } from '@mui/material';
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import {  cartProductData } from '../contextApi/CartContext';

const Header = () => {
    const[isActive,setIsActive]=useState("home")
      const { cartProducts, setCartProducts } = useContext(cartProductData);

  return (
    <div>
      <div className="headerContainer">
        <div className="header">
         <Link to={"/home"}>
            <div>
              <img src="/public/assets\curreaselogo1.png" alt="" />
            </div>
         </Link>
          <div className="headerLinks">
            {" "}
            <Link to={"/home"}>
              <li
                className={isActive === "home" && "active"}
                onClick={() => setIsActive("home")}
              >
                Home
              </li>
            </Link>
            <Link to={"/about"}>
              {" "}
              <li
                className={isActive === "about" && "active"}
                onClick={() => setIsActive("about")}
              >
                About
              </li>
            </Link>
            <Link to={"/contact"}>
              {" "}
              <li
                className={isActive === "contact" && "active"}
                onClick={() => setIsActive("contact")}
              >
                Contact
              </li>
            </Link>
            <Link to={"/shop"}>
              <button className='shop-but' onClick={() => setIsActive("")}>
                <span>shop</span>{" "}
                <img src="/public/assets\shopIcon.png" alt="" />
              </button>
            </Link>
            <Link to={"/cart"}>
              <Badge badgeContent={cartProducts.length} color="primary">
                <ShoppingCartOutlined color="black"></ShoppingCartOutlined>
              </Badge>
            </Link>
            <Link to={"/"}><button className='logout'>logout</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header