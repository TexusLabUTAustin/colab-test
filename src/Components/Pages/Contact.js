import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send data to server)
        console.log('Form submitted:', formData);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="Contact">
            <div className="navbar-tmp">
                <div className="navbar-logo-tmp">
                    <Link to="/">
                        <img src={`${process.env.PUBLIC_URL}/images/colablogo_icon.png`} alt="Logo" />
                    </Link>
                </div>
                <div className="navbar-buttons-tmp">
                    <Link to="/about">
                        <button className="navbar-button-tmp">About</button>
                    </Link>
                    <Link to="/projects">
                        <button className="navbar-button-tmp">Projects</button>
                    </Link>
                    <Link to="/contact">
                        <button className="navbar-button-tmp">Contact</button>
                    </Link>
                </div>
            </div>

            <div className="contact-form-container">
                <h2>Contact Us</h2>
                <form onSubmit={handleSubmit} className="contact-form">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>

                    <button type="submit" className="submit-button">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
