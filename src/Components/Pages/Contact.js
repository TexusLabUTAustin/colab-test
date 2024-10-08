import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
    return (
        <div>
        <div className="header-banner">
            <h1>Let's Connect!</h1>
        </div>
        <div class="info-container">
            <div class="info-left">
            <div class="contact-line"></div>
                <div class="info-box">
                    <h2 class="info-heading">Inquiries</h2>
                    <p class="info-content"><strong style={{fontWeight:"100"}}>For any inquiries, questions, or commendations, please send us an email.</strong>
                    <br /><br />Email: <a href="mailto:alex@abc.com">alexia.leclercq@utexas.edu</a></p>                    
                    </div>
                <div class="info-box">
                    <h2 class="info-heading">Mailing Location</h2>
                    <p class="info-content"><strong>We are located in the Jackson School of Geosciences</strong>
                    <br /><br />23 San Jacinto Blvd Austin, TX 78712</p>                    
                </div>
            </div>
            <div class="info-img">
                <img src={`${process.env.PUBLIC_URL}/images/contactimg1.png`} alt="Description of Image" class="contact-image" />
            </div>
        </div>
    </div>
    );
};

export default Contact;
