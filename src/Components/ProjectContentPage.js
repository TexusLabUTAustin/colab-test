import React from 'react';
import './ProjectContentPage.css'; // Import the CSS file
import { Link } from 'react-router-dom';
import { collaboratorData } from './CollaboratorData';


function ProjectContentPage({ project, projectList}) {
  if (!project) {
    return <div>Project not found.</div>;
  }

  const collaborators = project.Collaborators.split(',').map((name) => name.trim());


  return (
    <div className="content-page">
      <img src={process.env.PUBLIC_URL + "/images/" + project.projectPictureSrc} alt={project.title} class="contentmain-img" />
      <div className="content-text">
        <h2>{project.title}</h2>
        <h3>Abstract</h3>
        <p className="Description">{project.longContent}</p><br /><br />
        {/* <div class="btn">
          <a href={`${process.env.PUBLIC_URL}/pdf/${project.reportName}`} className="pdf-button" target="_blank" rel="noopener noreferrer">
            <div className="about-button-content">View Full Report</div>
          </a>
        </div> */}
        <h3>In Collaboration with</h3>
        <div class="collabcard">
          {
            collaborators.map((collaborator, index) => {

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
      <div class="border-line"></div>
      <div className="other-projects">
      <h2>Other Projects</h2>
        <div class="project-cards">
        {projectList
            .filter(p => p.title !== project.title) // Exclude the current project
            .map((proj, index) => (
              <div className="project-card" key={index}>
                <img src={process.env.PUBLIC_URL + "/images/" +proj.pictureSrc} alt={proj.title} />
                <h3>{proj.title}</h3>
              </div>
            ))}
        </div>
      </div>

    </div>

  );
}

export default ProjectContentPage;