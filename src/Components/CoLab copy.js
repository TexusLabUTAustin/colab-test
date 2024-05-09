import React from 'react';
import "./CoLab.css";
import Timeline from './Timeline';
import { Helmet } from 'react-helmet';




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
        <title>UT City Co-Lab</title>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://texuslab.org/colab" />
        <meta property="og:title" content="UT City Co-Lab" />
        <meta property="og:description" content="Connecting climate data to Community + City decision making" />
        <meta property="og:image" content="https://texuslab.org/images/seal.svg" />
        

      </Helmet>

{/* ------------------------------------------------------------------------------------------*/}
{/* ------------------------------------------------------------------------------------------*/}
{/* ------------------------------------------------------------------------------------------*/}
{/* Header  */}



        <div className="colab-header">
            <div className="top-banner">
                <img src={`${process.env.PUBLIC_URL}/images/coa.svg`} className="colab-logo"/>
            </div>
            <img src={`${process.env.PUBLIC_URL}/images/downtown-austin-skyline.jpg`} className="top-image"/> 
            <div className="overlay">
                <h1>UT City + Climate Co-Lab</h1>
                <img src={`${process.env.PUBLIC_URL}/images/coa.svg`} className="coa-logo"/>

             <img src={`${process.env.PUBLIC_URL}/images/seal.svg`} className="ut-seal"/>
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
        <p>The UT City & Climate Co-Lab is a collaborative initiative based at the University of Texas at Austin focused on addresing climate change and its impact on urban areas. It brings together researchers, policymakers, and community members to develop innovative solutions and strategies for building climate-resilient cities</p>

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
                                                <span style={{ fontSize:"2rem", fontWeight: 900, fontFamily:"Gotham Book" }}>-Jane Jacobs</span> </p>
        </div>

        



{/* ------------------------------------------------------------------------------------------*/}
{/* ------------------------------------------------------------------------------------------*/}
{/* ------------------------------------------------------------------------------------------*/}
{/* CoLab Structure  */}
        <div className="colab-structure">
            <h1 className="structure-title">CO-LAB STRUCTURE</h1>

            <div className="colab-structure-section">
                <div className="colab-structure-section-1">
                <img src={`${process.env.PUBLIC_URL}/images/Structure.png`} className="colab-structure-section-1-img"/>
                </div>



            </div>

        </div>





{/* ------------------------------------------------------------------------------------------*/}
{/* ------------------------------------------------------------------------------------------*/}
{/* ------------------------------------------------------------------------------------------*/}
{/* Timeline  */}

        <div className="colab-progress">
            <div className="next-steps">
                <h1 className="colab-progress-title">NEXT STEPS</h1>
                <ul className="next-steps-list">
                    <li>Make recently downscaled data accessible to the community.</li>
                    <li>Develop inventory of actioans taking place – resource database activities in climate mitigation & adaptation</li>
                    <li>Climate Decision Calendar – working with AFD, and other departments</li>
                    <li>Create a climate resilience, heat mapping/ mitigation tool kit</li>
                    <li>Finalize Governance and Reporting Structure for Co-Lab</li>
                </ul>
            </div>

            <div className="timeline">
                <h1 className="colab-progress-title">TIMELINE</h1>
                <Timeline events={timelineEvents} />
            </div>


        </div>

        

    </div>

  )
}

  export default CoLab;


  
