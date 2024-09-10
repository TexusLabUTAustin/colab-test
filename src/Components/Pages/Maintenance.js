import React, { useEffect, useState } from 'react';
import './Maintenance.css';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar'; // Import the Navbar component
import yaml from 'js-yaml'; // Import js-yaml library
import ProjectCard from '../ProjectCard';

const Maintenance  = ({ ProjectList }) =>  {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Specify the path to your YAML file
    const yamlFilePath = process.env.PUBLIC_URL + '/Projects.yaml';

    // Use fetch to load the YAML file
    fetch(process.env.PUBLIC_URL + '/Projects.yaml')
      .then((response) => response.text())
      .then((yamlData) => {
        // Parse the YAML data into an array of objects
        const parsedProjects = yaml.load(yamlData); // Use loadAll to parse multiple documents

        setProjects(parsedProjects);
      })
      .catch((error) => {
        console.error('Error fetching or parsing YAML file:', error);
      });
  }, []);

  return (
    <div className="maintenance-container">
      <Navbar /> {/* Add the Navbar component */}
      {/* <div className="maintenance-content">
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
      </div> */}
      <div class="header-title">
        <h1>Projects</h1>
      </div>
      <div className="cardsgrid">
        <ProjectCard cards={projects} />
      </div>
    </div>
  );
};

export default Maintenance;
