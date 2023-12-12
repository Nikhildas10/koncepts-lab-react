import React from 'react'

const Contact = () => {
  return (
    <div>
      {" "}
      <div className='aboutUs-wrapper'>
        <div className="aboutUs-hero">
          <div className="contact-card">
            <span>Cantari Corp India</span>
            <p>+91 95232 12121</p>
            <p>supportind@gmail.com</p>
          </div>
          <div className="contact-card">
            <span>Cantari Corp India</span>
            <p>+91 95232 12121</p>
            <p>supportind@gmail.com</p>
          </div>
          <div className="contact-card">
            <span>Cantari Corp India</span>
            <p>+91 95232 12121</p>
            <p>supportind@gmail.com</p>
          </div>
        </div>
        {/* message */}
        <div className="msg-wrapper">
          <div className="msg">
            <h1>send us a message</h1>
            <input placeholder="Your name" type="text" />
            <input placeholder="Phone number" type="text" />
            <input placeholder="Email" type="text" />
            <input placeholder="Message" type="text" />
            <button>
              send message
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
      </div>
    </div>
  );
}

export default Contact