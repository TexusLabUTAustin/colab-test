import React from 'react';
import './Maintenance.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'; // Import the Navbar component

const Maintenance = () => {
  return (
    <div className="maintenance-container">
      <Navbar /> {/* Add the Navbar component */}
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
