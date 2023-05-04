import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';




const Footer = () => {
    return (
        <div className='footer mt-5 bg-danger text-white d-flex flex-row  '>
                    
          <div className='logo'>
            <h1 className='fw-bold '>The Kitchen </h1>
            <p className='text-white'>If you are a chef, no matter how  good <br /> a chef you are, it's not good  cooking <br /> for yourself; the joy is in cooking for others.</p>
            </div>
           
            <div className='mx-auto'>

                <h3 className='text-decoration-underline px-2 text-black'> Link</h3>

                <Link
                    to="/"
                    style={{
                        textDecoration: "none",
                        color: "white",
                        marginLeft: "15px",
                        fontSize: "24px",

                    }}
                >
                    Home
                </Link> <br />

                <Link
                    to="/blog"
                    style={{
                        textDecoration: "none",
                        color: "white",
                        marginLeft: "15px",
                        fontSize: "24px",
                    }}
                >
                    Blog
                </Link> 

            </div>

            <div className='mx-auto'>
                <h3 className='text-decoration-underline text-black '>Follow Us</h3>
                <a href="#">Facebook</a> <br />
                <a href="#"> Instagram </a> <br />
                <a href="#">YouTube</a>

            </div>

            



        </div>
    );
};

export default Footer;