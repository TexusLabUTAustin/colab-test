import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div>
                <Link to="/" className="navbar-logo">
                    <img src={`${process.env.PUBLIC_URL}/images/colablogo_icon.png`} alt="Logo" />
                    <p>UT-City Climate CoLab</p>
                </Link>  
            </div>
            <div className="navbar-buttons">
                <Link to="/about">
                    <button className="navbar-button">About</button>
                </Link>
                <Link to="/projects">
                    <button className="navbar-button">Projects</button>
                </Link>
                <Link to="/contact">
                    <button className="navbar-button">Contact</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
