import React, { useState } from 'react';
import './ProjectContentPage.css'; // Import the CSS file
import { Link } from 'react-router-dom';
import { collaboratorData, contactData } from './ProjectData';


function ProjectContentPage({ project, projectList }) {
  const [isScrolled, setIsScrolled] = useState(false);

  if (!project) {
    return <div>Project not found.</div>;
  }

  const collaboratorsArray = project.Collaborators ? project.Collaborators.split(',').map((name) => name.trim()) : '';
  const contacts = project.contact.split(',').map((contactName) => contactName.trim());

  const validContacts = contacts.filter(contact => {
    const contactName = contactData.find(member => member.name === contact);
    return contactName && contactName.email; // Keep only valid contacts with an email
  });

  // Find the current project index
  const currentIndex = projectList.findIndex(p => p.title === project.title);
  
  // Get the next project
  const nextProject = projectList[currentIndex + 1] || projectList[0];

  const scrollRight = () => {
    const container = document.querySelector('.project-cards');
    container.scrollBy({
      top: 0,
      left: container.offsetWidth,
      behavior: 'smooth',
    });
    setIsScrolled(true); // Always set to true when scrolling right
  };

  const scrollLeft = () => {
    const container = document.querySelector('.project-cards');
    container.scrollBy({
      top: 0,
      left: -container.offsetWidth,
      behavior: 'smooth',
    });
  
    // Check if at the start after scrolling left
    setTimeout(() => {
      if (container.scrollLeft <= 0) {
        setIsScrolled(false); // Set to false if at the start
      }
    }, 300); // Timeout should match your scroll behavior duration
  };

  return (
    <div>
      <div className="top-border"></div>
      <div className="content-page">
        <div className="contentimage-container">
          <img
            src={process.env.PUBLIC_URL + "/images/" + project.projectPictureSrc}
            alt={project.title}
            className="contentmain-img"
          />
          {project.reportName && (
            <>
              <div className="contentimage-overlay"></div> {/* Overlay div */}
              <a
                href={`${process.env.PUBLIC_URL}/pdf/${project.reportName}`}
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
              >
                View Report
              </a>
            </>
          )}
        </div>
        <div className="content-text">
          <div class="back-button-container">
            <a href="/projects" class="back-button">
              <i class="fa-solid fa-circle-arrow-left"></i> Back to Projects
            </a>
          </div>
          <h2>{project.title}</h2>
          <p className="description">{project.longContent}</p>
          {collaboratorsArray.length >= 1 && (
            <>
            <br /><br />
              <div className='collabcard-container'>
                <h3>Lead Partners</h3>
                <div class="collabcard">
                  {
                    collaboratorsArray.map((collaborator, index) => {

                      // Find the corresponding team member
                      const collabName = collaboratorData.find(member => member.name === collaborator);

                      // Use the team member's image if found, otherwise use a default image
                      const imageSrc = collabName ? collabName.image : process.env.PUBLIC_URL + "/images/defaultpic.png";

                      return (
                        <><div class="collabcard-content">
                          <img src={imageSrc} alt={project.title} />
                        </div>
                        </>
                      );
                    })}
                </div>
              </div>
            </>
          )}

          {validContacts.length > 0 && (
            <>
            <br /><br />
              <div className='contactcontainer'>
                <h3>Contact</h3>
                <div class="contactcardgrid">
                  {
                    contacts.map((contact, index) => {

                      const contactName = contactData.find(member => member.name === contact);

                      if (!contactName || !contactName.name) {
                        return null; 
                      }

                      const contactEmail = contactName.email;
                      return (
                        <>
                          <div key={index} className="contactcard">
                            <div className="contactinfo">
                              <span style ={{fontFamily: "Gotham Black"}}>{contact}</span>
                            </div>
                            <div className="contactinfo">
                              <span  style ={{paddingTop:"5px"}}>{contactEmail}</span>
                            </div>                 
                          </div>
                        </>
                      );
                    })}
                </div>
              </div>
            </>
          )}
        </div>
        <div class="border-line"></div>
        <div className="other-projects">
          <div class="other-projects-header">
          <h2>Other Projects</h2>
            </div>
          <div className="project-cards-container">
            {projectList.length > 4 && isScrolled && (
              <button className="scroll-button" onClick={scrollLeft}>
                <i className="fa-solid fa-circle-arrow-left"></i>
              </button>
            )}
            <div class="project-cards">
              {projectList
                .filter(p => p.title !== project.title)
                .map((proj, index) => (
                  <div className="project-card" key={index}>
                    <Link to={`/content/${proj.targetSection}`} key={index}>
                      <img src={process.env.PUBLIC_URL + "/images/" + proj.pictureSrc} alt={proj.title} />
                      <h3>{proj.title}</h3>
                    </Link>
                  </div>
                ))}
            </div>
            <button className="scroll-button" onClick={scrollRight}>
              <i className="fa-solid fa-circle-arrow-right"></i>
            </button>
          </div>
          <div className="next-project-container">
            <Link to={`/content/${nextProject.targetSection}`} className="next-project-button">
            Next Project <i className="fa-solid fa-circle-arrow-right"></i>
            </Link>
          </div>
        </div>

      </div>
    </div>

  );
}

export default ProjectContentPage;