import React, { useContext } from 'react'
import { cartProductData } from '../contextApi/CartContext';

const Cart = () => {
  const{cartProducts,setCartProducts}=useContext(cartProductData)
  console.log(cartProducts);
  return (
    <div className="cart">
      <h1>Products in cart</h1>
      <div className="cards-wrapper-home">
        <div className="cards-home">
          {cartProducts ? (
            cartProducts.map((product) => (
              <div className="singleCard">
                <div className="cardBg">
                  <img src={product.image} alt="" />
                </div>
                <div className="cardDetails">
                  <div className="name">
                    <p style={{ fontSize: "13px" }}>{product.title}</p>
                    <span>150g</span>
                  </div>
                  <div className="but">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={66}
                      height={66}
                      viewBox="0 0 66 66"
                      fill="none"
                    >
                      <circle
                        cx="32.9958"
                        cy="33.1748"
                        r="23.0277"
                        transform="rotate(-45 32.9958 33.1748)"
                        fill="#DDE4FD"
                      />
                      <path
                        d="M29.854 27.7471L38.424 27.7471L29.854 27.7471ZM38.424 27.7471L38.424 36.3171L38.424 27.7471ZM38.424 27.7471L28.14 38.0311L38.424 27.7471Z"
                        fill="#DDE4FD"
                      />
                      <path
                        d="M29.854 27.7471H38.424M38.424 27.7471V36.3171M38.424 27.7471L28.14 38.0311"
                        stroke="#0051A0"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>no product in cart</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart