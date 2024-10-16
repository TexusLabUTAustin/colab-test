import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CoLab from './Components/CoLab'; // Adjust the import path according to your project structure
import './App.css'; // Assuming you have some general styles for your app
import About from './Components/Pages/About';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';
import Contact from './Components/Pages/Contact';
import Maintenance from './Components/Pages/Maintenance';
import NavbarHero from './Components/NavbarHero';
import Navbar from './Components/Navbar'; // Import the Navbar component
import yaml from "js-yaml"; // Import js-yaml library

import ProjectContentPage from './Components/ProjectContentPage';

function App() {
  const [projects, setProjects] = useState([]);
  const [peopleProjects, setPeopleProjects] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

  useEffect(() => {
    // Fetch the YAML data from your file
    fetch(process.env.PUBLIC_URL + "/Projects.yaml")
      .then((response) => response.text())
      .then((yamlData) => {
        // Parse the YAML data into an array of objects
        const parsedProjects = yaml.load(yamlData);

        setProjects(parsedProjects);

        //Create a data structure that associates people with projects
        const peopleProjectsData = {};
        parsedProjects.forEach((project) => {
          const collaborators = project.Collaborators.split(",").map((name) =>
            name.trim()
          );
          collaborators.forEach((collaborator) => {
            // Replace spaces in names with underscores and convert to lowercase
            const formattedName = collaborator
              .replace(/\s+/g, "_")
              .toLowerCase();
            if (!peopleProjectsData[formattedName]) {
              peopleProjectsData[formattedName] = [];
            }
            peopleProjectsData[formattedName].push(project);
          });
        });
        setPeopleProjects(peopleProjectsData);
      })
      .catch((error) => {
        console.error("Error fetching or parsing YAML file:", error);
      });

    console.log(peopleProjects);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
      {isMobile ? <NavbarHero /> : <Navbar />}
        <Routes>
          <Route path="/" element={<CoLab />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/projects" element={<Maintenance />}/>
          {projects.map((project, index) => {
            console.log(`Generating route for ${project.targetSection}`);
            return (
              <Route
                key={index}
                path={`/content/${project.targetSection}`}
                element={<ProjectContentPage project={project} projectList={projects}/>}
              />
            );
          })}
          {/* Add more Route components here for other pages */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
