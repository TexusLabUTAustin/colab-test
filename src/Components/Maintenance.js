import React from 'react';
import './Maintenance.css';
import { Link } from 'react-router-dom';

const Maintenance = () => {
  return (

    <div className="maintenance-container">
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
      <div className="maintenance-content">
        <h1>This page is currently under maintenance</h1>
        <p>In the meantime, here are links to some of our projects.</p>
        <div className="button-grid">
          <a href={`${process.env.PUBLIC_URL}/pdf/colab_overview.pdf`} className="pdf-button" target="_blank" rel="noopener noreferrer">
            <div className="pdf-button-content">Colab Overview</div>
          </a>
          <a href={`${process.env.PUBLIC_URL}/pdf/Climate_report.pdf`} className="pdf-button" target="_blank" rel="noopener noreferrer">
            <div className="pdf-button-content">Austin Future Climate Report 2024</div>
          </a>
          <a href={`${process.env.PUBLIC_URL}/pdf/seasonal_outlook.pdf`} className="pdf-button" target="_blank" rel="noopener noreferrer">
            <div className="pdf-button-content">Austin Summer Outlook</div>
          </a>
          <a href={`${process.env.PUBLIC_URL}/pdf/heat_playbook.pdf`} className="pdf-button" target="_blank" rel="noopener noreferrer">
            <div className="pdf-button-content">Heat Resilience Playbook</div>
          </a>
        </div>
        
      </div>
    </div>
  );
};

export default Maintenance;
