import React from 'react';
import ProjectCardContent from './ProjectCardContent';
import './ProjectCard.css';

function ProjectCard({ cards }) {
  return (
    <div className="card-grid">
      {cards.map((card, index) => (
        <ProjectCardContent
          key={index}
          title={card.title}
          pictureSrc={card.pictureSrc}
          reportName={card.reportName}
          content={card.shortContent}
          buttonText={card.buttonText}
          linkTo={card.linkTo}
          targetSection={card.targetSection}
          scrollId = {card.targetSection}
        />
      ))}
    </div>
  );
}

export default ProjectCard;