import React, { useContext, useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import { productsApi } from "../api/productsApi";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import {  cartProductData } from "../contextApi/CartContext";
import toast, { Toaster } from "react-hot-toast";
import { CircularProgress } from "@mui/material";

const Home = () => {
  // store fetched data
  const [products, setProducts] = useState([]);
  const { cartProducts, setCartProducts } = useContext(cartProductData);

  // fetch data
  const fetchProduct = async () => {
    const result = await axios.get(productsApi);
    setProducts(result.data);
  };

  const addToCart = () => {
    toast.success("Successfully added to cart!");
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div>
      <div className="hero">
        <div className="quote">
          <p>Unique Curry Powders</p>
          <h1>
            Wake Up Your <img src="../src/assets\emo1.png" alt="" /> Taste Buds
            With Us
          </h1>
        </div>
      </div>
      {/* overlays */}
      <div className="overlay">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "100%", height: "auto" }}
          viewBox="0 0 1280 700"
          fill="none"
        >
          <path
            d="M638.5 0C264.5 0 67 196.5 0 257V699.5H1280V257C1217.5 202 1012.5 0 638.5 0Z"
            fill="url(#paint0_linear_1004_6)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1004_6"
              x1={640}
              y1={0}
              x2={640}
              y2="699.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0051A0" stopOpacity="0.32" />
              <stop offset="0.526042" stopColor="#0051A0" stopOpacity="0.08" />
              <stop offset={1} stopColor="white" stopOpacity={0} />
            </linearGradient>
          </defs>
        </svg>
        <div className="circleBanner-wrap">
          <img
            className="circleBanner"
            src="../src/assets/Group 2 836.png"
            alt=""
          />
        </div>
      </div>
      <svg
        className="overlayImg1"
        xmlns="http://www.w3.org/2000/svg"
        width={253}
        height={315}
        viewBox="0 0 253 315"
        fill="none"
      >
        <path
          d="M6.19049 113.762C18.9174 53.5127 69.3848 16.5702 93.1912 7.24637C116.998 -2.07744 157.735 -5.53372 170.462 16.375C183.189 38.2837 183.459 77.5368 195.007 100.358C206.555 123.18 244.096 155.13 251.369 193.47C258.641 231.811 241.099 277.744 208.643 301.188C176.186 324.633 69.5556 319.446 34.3716 276.251C-0.812485 233.057 -6.53645 174.011 6.19049 113.762Z"
          fill="#0051A0"
        />
      </svg>
      <img
        className="overlayImg1 overlayimage1"
        src="../src/assets/Layer 4.png"
        alt=""
      />
      <svg
        className="overlayImg2"
        xmlns="http://www.w3.org/2000/svg"
        width={255}
        height={350}
        viewBox="0 0 255 350"
        fill="none"
      >
        <path
          d="M229.803 96.3763C202.214 35.4255 156.161 14.6524 112.383 3.70053C68.6044 -7.25129 5.05925 12.8005 1.08953 59.3622C-2.88019 105.924 31.095 145.165 34.8851 180.884C38.6753 216.603 11.3129 249.013 22.1847 289.268C33.0564 329.523 75.0242 349.748 119.509 349.114C163.993 348.479 210.309 329.429 237.685 275.373C265.062 221.316 257.391 157.327 229.803 96.3763Z"
          fill="#FCB317"
        />
      </svg>
      <img
        className="overlayImg2 overlayimage2"
        src="../src/assets/Layer 2.png"
        alt=""
      />
      {/* inside overlay */}
      <div className="overlayText-wrapper">
        <h1 className="overlayText">
          <span>Products</span> Within Your Province
        </h1>
      </div>
      <div className="overlaySearch-wrappers">
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
      <div className="blurredImg">
        <img src="../src/assets/Layer 15.png" alt="" />
        <img src="../src/assets/Layer 6.png" alt="" />
      </div>
      {/* cards */}
      <section>
        <div className="cards-wrapper-home">
          <div className="cards-home">
            {products ? (
              products.slice(0, 4).map((product) => (
                <div className="singleCard">
                  <div className="cardBg">
                    <img src={product.image} alt="" />
                  </div>
                  <div className="cardDetails">
                    <div className="name">
                      <p>{product.title}</p>
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
                      <Button onClick={() =>{addToCart(); setCartProducts([...cartProducts,product])}}  variant="contained">
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
          <Link to={"/shop"}>
            <button className="moreProducts-home">
              More products
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
          </Link>
        </div>
        {/* recipe */}
        <h1 className="recipeHeading">
          <span>Cook</span> With Favorite Recipe
        </h1>
        <div className="recipe">
          <span>YUMMY DUCK ROAST</span>
          <p>Next Recipe</p>
        </div>
        <div className="steps-wrapper">
          <div className="steps">
            <div className="stepsNumber">
              <span>
                step-01
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={67}
                  height={4}
                  viewBox="0 0 67 4"
                  fill="none"
                >
                  <path
                    d="M2 2H65"
                    stroke="white"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="8 8"
                  />
                </svg>
              </span>
              <p className="numberOfSteps">
                step-02
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={67}
                  height={4}
                  viewBox="0 0 67 4"
                  fill="none"
                >
                  <path
                    d="M2 2H65"
                    stroke="white"
                    strokeOpacity="0.41"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="8 8"
                  />
                </svg>
              </p>
              <p className="numberOfSteps">step-03</p>
            </div>
            <p className="step-details">
              Prepared with Currease’s Duck roast instant curry mix, the tender
              and juicy meat with its crispy skin glazed with honey can be the
              perfect holiday main dish for occasions such as Thanksgiving,
              Christmas, or New Year’s eve.
            </p>
            <p className="step-details">
              Honey can be the perfect holiday main dish for occasions such as
              Thanksgiving, Christmas, or New Year’s eve.
            </p>
          </div>
          <img src="../src/assets/image 55.png" alt="" />
          <img src="../src/assets/image 56.png" alt="" />
        </div>
        <Toaster position="top-center" reverseOrder={false} />
      </section>
    </div>
  );
};

export default Home;
