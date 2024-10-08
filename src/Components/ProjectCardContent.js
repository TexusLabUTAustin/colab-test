import React from 'react';
import './ProjectCardContent.css';
import { Link } from 'react-router-dom';


function ProjectCardContent({ title, pictureSrc, content, reportName, buttonText, linkTo, targetSection }) {

  const handleClick = () => {
    const section = document.getElementById(targetSection);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (

    <div className="cards">
      <div className="image-container">
      <Link to={`/content/${targetSection}`}>
      <img src={process.env.PUBLIC_URL + "/images/" + pictureSrc} alt={title} className="card-picture" />
      </Link>
      </div>
      <div className="card-content">
        <h2>{title}</h2>
        <p>{content}</p>
        <div className="btn">
          <Link to={`/content/${targetSection}`} className="about-button">
            <div className="about-button-content">View Project</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCardContent;