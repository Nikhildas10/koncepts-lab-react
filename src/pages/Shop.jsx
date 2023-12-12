import { Button, CircularProgress } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import { productsApi } from '../api/productsApi';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { cartProductData } from '../contextApi/CartContext';

const Shop = () => {
    const { cartProducts, setCartProducts } = useContext(cartProductData);

    const[productCount,setProductCount]=useState(6)
    const[alsoLikeCount,setAlsoLikeCount]=useState(6)
    const[products,setProducts]=useState([])
const fetchData=async()=>{
const result=await axios.get(productsApi)
setProducts(result.data)
}
    const addToCart = () => {
        toast.success("Successfully added to cart!");
      };
    useEffect(()=>{
      fetchData()
    },[])
  return (
    <div>
      <div className="shop-top-bg"></div>

      <div>
        <div className="shop-top">
          <h1>
            <span>Products</span> Within Your Province
          </h1>
          <div className="overlaySearch-wrapper">
            <div className="overlaySearch">
              <p>select Province</p>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={23}
                  height={13}
                  viewBox="0 0 23 13"
                  fill="none"
                >
                  <path
                    d="M2 2L11.5 11L21 2"
                    stroke="white"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* show all products */}
        <div className="allProducts">
          <span>Showing 09 of 15</span>
          <div className="cards-wrapper-shop">
            <div className="cards-shop">
              {products ? (
                products.slice(0, productCount).map((product) => (
                  <div className="singleCard-shop">
                    <div className="cardBg">
                      <img className="productImg" src={product.image} alt="" />
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
                        <Button
                          onClick={() => {
                            addToCart();
                            setCartProducts([...cartProducts, product]);
                          }}
                          variant="contained"
                        >
                          Add to cart
                        </Button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <CircularProgress></CircularProgress>
              )}
            </div>
          </div>
          <div className="moreProducts-wrapper">
            <button
              onClick={() => setProductCount(productCount + 3)}
              className="moreProducts"
            >
              More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={15}
                height={14}
                viewBox="0 0 15 14"
                fill="none"
              >
                <path
                  d="M3.99902 2.00098H12.5691M12.5691 2.00098V10.571M12.5691 2.00098L2.28502 12.285"
                  stroke="white"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* you may also like section */}
        <section className="alsoLike-section">
          <div className="alsoLike">
            <div>
              {" "}
              <h1>
                <span>You May</span> Also Like
              </h1>
            </div>
            <div>
              <svg
              onClick={()=>alsoLikeCount>0?setAlsoLikeCount(alsoLikeCount-3):""}
                xmlns="http://www.w3.org/2000/svg"
                width="66"
                height="66"
                viewBox="0 0 66 66"
                fill="none"
              >
                <circle
                  cx="23.0277"
                  cy="23.0277"
                  r="23.0277"
                  transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 65.1328 32.5664)"
                  fill="#DDE4FD"
                />
                <path
                  d="M36.1328 25L28.6328 32.5L36.1328 40"
                  stroke="#0051A0"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <svg onClick={()=>alsoLikeCount<products.length/2?setAlsoLikeCount(alsoLikeCount+3):""}
                xmlns="http://www.w3.org/2000/svg"
                width={66}
                height={66}
                viewBox="0 0 66 66"
                fill="none"
              >
                <circle
                  cx="32.5661"
                  cy="32.5664"
                  r="23.0277"
                  transform="rotate(-45 32.5661 32.5664)"
                  fill="#DDE4FD"
                />
                <path
                  d="M29 25L36.5 32.5L29 40"
                  stroke="#0051A0"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="alsoLike-productCards">
            {products ? (
              products.slice(alsoLikeCount, alsoLikeCount+3).map((product) => (
                <div className="singleCard-shop">
                  <div className="cardBg">
                    <img className="productImg" src={product.image} alt="" />
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
                      <Button
                        onClick={() => {
                          addToCart();
                          setCartProducts([...cartProducts, product]);
                        }}
                        variant="contained"
                      >
                        Add to cart
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>end of the products</p>
            )}
          </div>
          <div className="linear-bg-white"></div>
        </section>
      </div>
      <Toaster></Toaster>
    </div>
  );
}

export default Shop