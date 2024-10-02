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
      <div class="image-container">
      <img src={process.env.PUBLIC_URL+ "/images/" +  pictureSrc} alt={title} className="card-picture" />
      </div>
      <div class="card-content">
      <h2>{title}</h2>
      <p>{content}</p>
      <div class="btn">
      <Link to={`/content/${targetSection}`} className="about-button">
      {/* <a href={`/content/${targetSection}`} className="about-button"> */}
            <div className="about-button-content">View Project</div>
          {/* </a> */}
          </Link>
      </div>
      </div>
      
          {/* </Link> */}
       {/*<ScrollButton buttonText={buttonText || "Know More"} targetSection={targetSection} />*/}
    </div>
  );
}

export default ProjectCardContent;