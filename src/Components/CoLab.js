import React from 'react';
import "./CoLab.css";
import Timeline from './Timeline';
import { Helmet } from 'react-helmet';
import Carousel from './Carousel';




const timelineEvents = [
  { year: "2023", description: "Launch CoLab, Hire Staff, Governance Framework" },
  { year: "2024 Output 1", description: "Launch Climate Assessment Report" },
  { year: "2024 Output 2", description: "At least 1 decision workflow, Launch Climate Internship" },
  { year: "2024 Output 3", description: "At least 1 data product, modeling study, external funding & policy brief" },
  // Add more events here INCREASE OR DECREASE PADDING WHEN ADDING TO TIMELINE
];

const CoLab = () => {

  return (
    <div className="colab-main">
        <Helmet>
        <title>UT City CoLab</title>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://texuslab.org/colab" />
        <meta property="og:title" content="UT City CoLab" />
        <meta property="og:description" content="Connecting climate data to Community + City decision making" />
        <meta property="og:image" content="https://texuslab.org/images/seal.svg" />
        

      </Helmet>

{/* ------------------------------------------------------------------------------------------*/}
{/* ------------------------------------------------------------------------------------------*/}
{/* ------------------------------------------------------------------------------------------*/}
{/* Header  */}

        
        <div className="colab-header">
        <img src={`${process.env.PUBLIC_URL}/images/downtown-austin-skyline-copy.jpg`} className="top-image"/> 
            <div className="text-overlay">
                <h1>Empower city departments and the community with climate data and tools</h1>
            </div>
        </div>

{/* ------------------------------------------------------------------------------------------*/}
{/* ------------------------------------------------------------------------------------------*/}
{/* ------------------------------------------------------------------------------------------*/}
{/* What is CoLab?  */}
          <div className="Introduction" id="target-section">
              <div className="intro-container">
                  <div class="introcover">
                      <img src={`${process.env.PUBLIC_URL}/images/whatiscolab.png`} />
                  </div>
                  <div class="intro-box">
                      <div>
                          <h1>What is <br />the <span style={{ color: '#B25321' }}>CoLab?</span></h1>
                      </div>
                      <div >
                          <p>The UT-City Climate CoLab is a collaborative initiative based at the University of Texas at Austin focused on addressing climate change and its impact on urban areas. It brings together researchers, policymakers, and community members to develop innovative solutions and strategies for building climate-resilient cities.</p>
                      </div>
                      <div class="btn">
                      <a href={`/about`} className="about-button" target="_blank" rel="noopener noreferrer">
                          <div className="about-button-content">Learn More</div>
                      </a>
                  </div>
                  </div>
                 
              </div>

          </div>

{/* ------------------------------------------------------------------------------------------*/}
{/* ------------------------------------------------------------------------------------------*/}
{/* ------------------------------------------------------------------------------------------*/}
{/* Problems  */}

          <div className="Problems" id="target-section">
              <div className="problem-overlay"></div>
              <img src={`${process.env.PUBLIC_URL}/images/problem-bg.png`} alt="Background" className="problem-img" />
              <div class="problem-content">
                  <h1>Problems to Solve</h1>
                  <div className="blob-section">
                      <div className="blob">
                          <div class="blob-icon">
                              <img src={`${process.env.PUBLIC_URL}/images/Data_problems.png`} />
                          </div>
                          <div className="blob-text">
                              <h2>Data Support</h2>
                          </div>
                          <div className="blob-hover">
                              <h2>Data Support</h2>
                              <p>Fills a void of directly supporting City climate data needs.</p>
                          </div>
                      </div>
                      <div className="blob">
                          <div class="blob-icon">
                              <img src={`${process.env.PUBLIC_URL}/images/Connectivity.png`} />
                          </div>
                          <div className="blob-text">
                              <h2>Department<br/>Connectivity</h2>
                          </div>
                          <div className="blob-hover">
                              <h2>Department<br/>Connectivity</h2>
                              <p>City data needs vary across departments. Data need to be connected to city department decision making.</p>
                          </div>
                      </div>
                      <div className="blob">
                          <div class="blob-icon">
                              <img src={`${process.env.PUBLIC_URL}/images/Accessability.png`} />
                          </div>
                          <div className="blob-text">
                              <h2>Accessibility</h2>
                          </div>
                          <div className="blob-hover">
                              <h2>Accessibility</h2>
                              <p>Specific data and models are often confusing for community and staff. The goal is to make research accessible to all.</p>
                          </div>
                      </div>

                      <div className="blob">
                          <div class="blob-icon">
                              <img src={`${process.env.PUBLIC_URL}/images/Partnerships.png`} />
                          </div>
                          <div className="blob-text">
                              <h2>Stakeholder<br/>Partnerships</h2>
                          </div>
                          <div className="blob-hover">
                              <h2>Stakeholder<br/>Partnerships</h2>
                              <p>UT-City climate research projects need stakeholder partnerships to be successful.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>


{/* ------------------------------------------------------------------------------------------*/}
{/* ------------------------------------------------------------------------------------------*/}
{/* ------------------------------------------------------------------------------------------*/}
{/* Urgency  */}

<div className="urgency">
    <div className="urgency-content">
    <h1>Urgency</h1>
        <div className="urgency-container">
            <div className="urgencycard" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/urgencycard1.png)` }}>
                <div className="urgency-card-content">
                    Increase in the climate extremes; city needs to prepare for eventualities.
                </div>
            </div>
            <div className="urgencycard" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/urgencycard2.png)` }}>
                <div className="urgency-card-content">
                    Disadvantaged communities greatly challenged in “bouncing back”.
                </div>
            </div>
            <div className="urgencycard" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/downtown-austin-skyline.jpg)` }}>
                <div className="urgency-card-content">
                    Infrastructure and response plans underway.
                </div>
            </div>
            <div className="urgencycard" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/whatiscolab.png)` }}>
                <div className="urgency-card-content">
                    Students interested in place-based research.
                </div>
            </div>
            <div className="urgencycard" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/urgencycard3.png)` }}>
                <div className="urgency-card-content">
                    Federal grant opportunities are growing.
                </div>
            </div>
        </div>
    </div>
</div>


{/* ------------------------------------------------------------------------------------------*/}
{/* ------------------------------------------------------------------------------------------*/}
{/* ------------------------------------------------------------------------------------------*/}
{/* Quote Picture Section  */}

        <div className='quote'>
        <Carousel isQuote={true} />
        </div>

    </div>

  )
}

  export default CoLab;


  
