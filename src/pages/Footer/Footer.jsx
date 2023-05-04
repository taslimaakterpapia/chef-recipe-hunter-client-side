import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';




const Footer = () => {
    return (
        <div className='footer mt-5 bg-danger text-white d-flex flex-row '>
                    
          <div className='logo'>
            <h1 className='fw-bold'>The Kitchen </h1>
            </div>
           
            <div>

              
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
                <h3 className='text-decoration-underline'>Follow Us</h3>
                <a href="#">Facebook</a> <br />
                <a href="#"> Instagram </a> <br />
                <a href="#">YouTube</a>

            </div>

            



        </div>
    );
};

export default Footer;