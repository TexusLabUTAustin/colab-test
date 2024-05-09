import React from 'react';
import './Timeline.css';

const Timeline = ({ events }) => {
  return (
    <div className="timeline-container">
      {events.map((event, index) => (
        <div key={index} className={`timeline-item ${index % 2 === 0 ? 'even' : 'odd'}`}>
          <div className="timeline-text">
            <div className="timeline-year">{event.year}</div>
            <div className="timeline-description">{event.description}</div>
          </div>
          <div className="timeline-dot"></div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
