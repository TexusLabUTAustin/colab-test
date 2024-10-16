import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer-container">
            
            <div className="footer-title-container">
            <Link to='/'>
            <img className="footer-logo" src={`${process.env.PUBLIC_URL}/images/colablogo_icon.png`} alt="Logo" />
            </Link>
                <h1 className="footer-title">UT-City Climate CoLab</h1>
            </div>

            <div className="footer-links">
                <Link to='/about'>About</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/contact'>Contact</Link>

            </div>
            <div className="footer-logo">

            </div>


        </div>
       
    )
}
export default Footer;