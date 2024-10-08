import React, { useEffect, useState } from 'react';
import './Maintenance.css';
import { Link } from 'react-router-dom';
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
    <div>
      <div class="header-title">
        <h1>Projects</h1>
      </div>
      <div className="maintenance-container">
        <div className="cardsgrid">
          <ProjectCard cards={projects} />
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
