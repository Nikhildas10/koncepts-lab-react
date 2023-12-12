import React from 'react'
import maskImg from "/public/assets/mask-group-zv9.png"
import image59 from "/public/assets/image 59.png"
const About = () => {
  return (
    <div>
      <div>
        <div className="aboutUs-hero">
          <div>
            <img src={maskImg} alt="" />
          </div>
          <div className="label">
            <p className="label-heading">
              <span className="text-wrapper">
                A Novel Product
                <br />
              </span>
              <span className="span">In The Food Market.</span>
            </p>
            <p className="label-details">
              As a retorted curry base gravy produced particularly by keeping
              the millennials in mind, “Currease”, unlike other instant
              alternatives to home-cooked food, ensure to deliver locally
              produced fresh ingredients and easy-to-follow recipes so that
              anyone can prepare a quality home-cooked dish that does not
              compromise on time and well-being.
            </p>
            <button>
              products
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={15}
                height={14}
                viewBox="0 0 15 14"
                fill="none"
              >
                <path
                  d="M4.60433 1.64556L13.1191 2.61716M13.1191 2.61716L12.1475 11.1319M13.1191 2.61716L1.73546 11.669"
                  stroke="white"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="aboutUs-lower">
          <img src={image59} alt="" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={60}
            height={60}
            viewBox="0 0 60 60"
            fill="none"
          >
            <path
              d="M58 30C58 33.677 57.2758 37.318 55.8686 40.7151C54.4615 44.1123 52.399 47.1989 49.799 49.799C47.1989 52.399 44.1123 54.4615 40.7151 55.8686C37.318 57.2758 33.677 58 30 58C26.323 58 22.682 57.2758 19.2849 55.8686C15.8877 54.4615 12.8011 52.399 10.201 49.799C7.60097 47.1989 5.5385 44.1123 4.13137 40.7151C2.72424 37.318 2 33.677 2 30C2 22.5739 4.94999 15.452 10.201 10.201C15.452 4.94999 22.5739 2 30 2C37.4261 2 44.548 4.94999 49.799 10.201C55.05 15.452 58 22.5739 58 30Z"
              stroke="white"
              strokeWidth={4}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M42.1644 28.9798C42.3466 29.0807 42.4984 29.2286 42.6041 29.408C42.7099 29.5875 42.7656 29.7919 42.7656 30.0002C42.7656 30.2085 42.7099 30.4129 42.6041 30.5924C42.4984 30.7718 42.3466 30.9197 42.1644 31.0206L24.7329 40.7055C24.5553 40.8041 24.355 40.8546 24.1518 40.8521C23.9487 40.8495 23.7497 40.7939 23.5747 40.6908C23.3996 40.5877 23.2545 40.4407 23.1537 40.2643C23.0529 40.0879 22.9999 39.8883 23 39.6851V20.3153C23 19.4255 23.9551 18.8655 24.7329 19.298L42.1644 28.9798Z"
              stroke="white"
              strokeWidth={4}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>
            All Currease products are manufactured using “retort” technology.
            Retorting is one of the major techniques used for the thermal
            processing of food products that are packed either in semi-rigid
            flexible laminates or in metal or alloy cans. The technology
            provides the advantage of processing and packing the food together;
            which makes it more commercially stable with safe and effective
            shelf life.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About