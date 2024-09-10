import React, { useState, useEffect } from 'react';
import "./CoLab.css";
import Timeline from './Timeline';
import { Helmet } from 'react-helmet';
import NavbarHero from './NavbarHero';
import Navbar from './Navbar'




const timelineEvents = [
  { year: "2023", description: "Launch CoLab, Hire Staff, Governance Framework" },
  { year: "2024 Output 1", description: "Launch Climate Assessment Report" },
  { year: "2024 Output 2", description: "At least 1 decision workflow, Launch Climate Internship" },
  { year: "2024 Output 3", description: "At least 1 data product, modeling study, external funding & policy brief" },
  // Add more events here INCREASE OR DECREASE PADDING WHEN ADDING TO TIMELINE
];

const CoLab = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
        {isMobile ? <NavbarHero /> : <Navbar />}
            
            <img src={`${process.env.PUBLIC_URL}/images/downtown-austin-skyline-copy.jpg`} className="top-image"/> 
            <div className="overlay">
                <h1>Empower city departments and the community with climate data and tools</h1>

            </div>

            
             <div className="scroll-down-box">
                <a href="#target-section">
            <img src={`${process.env.PUBLIC_URL}/images/scroll-down.svg`} className="scroll-down"/>
            </a>
            </div>

            


             
        </div>

{/* ------------------------------------------------------------------------------------------*/}
{/* ------------------------------------------------------------------------------------------*/}
{/* ------------------------------------------------------------------------------------------*/}
{/* What is CoLab?  */}
<div className="Introduction" id="target-section">
    <div className="intro-container">
    <div className="intro-title">
        <h1>What is <br/>the <span style={{ color: '#B25321' }}>CoLab?</span></h1>
    </div>
    <div className="intro-content">
        <p>The UT City & Climate CoLab is a collaborative initiative based at the University of Texas at Austin focused on addresing climate change and its impact on urban areas. It brings together researchers, policymakers, and community members to develop innovative solutions and strategies for building climate-resilient cities.</p>

    </div>
    </div>

</div>


{/* ------------------------------------------------------------------------------------------*/}
{/* ------------------------------------------------------------------------------------------*/}
{/* ------------------------------------------------------------------------------------------*/}
{/* Problems  */}

        <div className="Problems" id="target-section">
            <h1>Problems to Solve</h1>
            <div className="blob-section"> 
            <div className="blob">
                <h1>Data Support</h1>
                <p>Fills a void of directly supporting City climate data needs.</p>
                
            </div>
            <div className="blob">
                <h1>Department Connectivity</h1>
                <p>City data needs vary across departments. Data need to be connected to city department decision making.</p>
                
            </div>

             <div className="blob">
                <h1>Accessibility</h1>
                <p>Specific data and models are often confusing for community and staff. The goal is to make research accessible to all.</p>
                
            </div>

          <div className="blob">    
                <h1>Stakeholder Partnerships</h1>
                <p>UT/ City climate research projects need stakeholder partnerships to be successful.</p>
                
          </div>
           
           
            </div>
                
         </div>


{/* ------------------------------------------------------------------------------------------*/}
{/* ------------------------------------------------------------------------------------------*/}
{/* ------------------------------------------------------------------------------------------*/}
{/* Urgency  */}

         <div className="urgency">
            
            <div className="urgency-title">
                     <h1 >Urgency</h1>
                </div>
               
                <div className="urgency-content">
                    <ul>
                        <li>Increase in the climate extremes; city needs to prepare for eventualities.</li>
                        <li>Disadvantaged communities greatly challenged in “bouncing back”.</li>
                        <li>Infrastructure and response plans underway.</li>
                        <li>Students interested in place-based research.</li>
                        <li>Federal grant opportunities are growing.</li>

                    </ul>
                 
                </div>

            </div>


{/* ------------------------------------------------------------------------------------------*/}
{/* ------------------------------------------------------------------------------------------*/}
{/* ------------------------------------------------------------------------------------------*/}
{/* Quote Picture Section  */}

        <div className="quote">
            <img src={`${process.env.PUBLIC_URL}/images/doggetposter.jpg`} />
            <div className="translucent-mask"></div>
            <p className="centered-text">"Cities have the capability of providing something 
                                            for everybody, only because, and only when, 
                                                 they are created by everybody."<br/> <br/>
                                                <span style={{ fontSize:"1.8rem", fontWeight: 900, fontFamily:"Gotham Book" }}>-Jane Jacobs</span> </p>
        </div>

        




    </div>

  )
}

  export default CoLab;


  
