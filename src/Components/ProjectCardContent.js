import React from 'react';
import './ProjectCardContent.css';
import { Link } from 'react-router-dom';


function ProjectCardContent({ title, pictureSrc, content, reportName, buttonText, linkTo, targetSection }) {

  console.log("PictureSec" + pictureSrc)

  const handleClick = () => {
    const section = document.getElementById(targetSection);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (

    <div className="cards">
      {/* <Link to={`/content/${targetSection}`} className="card-link"> */}
      <div class="image-container">
      <img src={process.env.PUBLIC_URL+ "/images/" +  pictureSrc} alt={title} className="card-picture" />
      </div>
      <div class="card-content">
      <h2>{title}</h2>
      <p>{content}</p>
      <div class="btn">
      <a href={`${process.env.PUBLIC_URL}/pdf/${reportName}`} className="pdf-button" target="_blank" rel="noopener noreferrer">
            <div className="pdf-button-content">View Full Report</div>
          </a>
      </div>
      
      {/* <div class="reportButton" role="button">
        <button>View Full Report</button>
      </div> */}
      </div>
      
          {/* </Link> */}
       {/*<ScrollButton buttonText={buttonText || "Know More"} targetSection={targetSection} />*/}
    </div>
  );
}

export default ProjectCardContent;