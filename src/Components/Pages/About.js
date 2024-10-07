import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from '../Navbar'; // Import the new Navbar component
import './About.css';

const About = () => {
    return(
        <div className="focus">
            <Navbar /> {/* Use the new Navbar component */}
            <div className="focus-header">
                <div className='focus-header-text'>
                    <h1 className='focus-header-name'>
                        <span style={{ color: "#0097B2" }}>About</span> UT City & Climate CoLab
                    </h1>
                    <div className="focusheader-content">
                    Our mission is to foster collaboration between researchers, policymakers, and communities to develop innovative solutions that address climate challenges and build resilient urban environments.
                    </div>
                </div>
                <div className="headerimage-container">
                <img src={`${process.env.PUBLIC_URL}/images/doggetposter.jpg`} alt="Description" className="header-image" />
                </div>
            </div>
            <div className="focus-section">
            <div className="focus-box ut-focus-box">
                <h1 className="focus-title ut-focus">UT Focus</h1>

                <ul className="focus-content">
                    <li>Products and research staff position</li>
                    <li>Build on Planet Texas 2050 and AI for Good Systems Initiatives at UT</li>
                    <li>Coordinate access to expertise across UT, and undertake research projects</li>
                    <li>Develop data, product tools, and policy briefs/ assessments</li>
                    
                </ul> 

            </div>

            <div className="focus-box city-focus-box">
                <h1 className="focus-title city-focus">City Focus</h1>
                <ul className="focus-content">
                    <li>Project Manager embedded with City</li>
                    <li>Coordinate Access to City departmental staff and decisions</li>
                    <li>Provide feedback and implement data and tools</li>
                    <li>Co-development and Policy as well as Community Interface</li>
                </ul> 

            </div>
            </div>
            {/* ------------------------------------------------------------------------------------------*/}
            {/* ------------------------------------------------------------------------------------------*/}
            {/* ------------------------------------------------------------------------------------------*/}
            {/* Project Cards  */}

                    <div className="colab-ongoing" style={{ 
                    
                }}>
                    <div className="ongoing-header">
                        <h1 className="ongoing-header-title">Planning and Implementation</h1>
                    </div>

                    <div className="ongoing-cards">

                        <div className="colab-ongoing-card">         {/* Copy  */}
                        <div className="colab-section">
                            <div className="circle-symbol"> 
                            <img src={`${process.env.PUBLIC_URL}/images/Climate.png`}/>
                            </div>
                            <h1 className="ongoing-title">CLIMATE ASSESSMENTS</h1>   
                            <p>Climate trends, patterns, changes, event summaries <br /> <br /> Case studies for high impact events. <br /> <br /> Future Projections </p>
                            </div>

                        </div>

                        <div className="colab-ongoing-card">
                            <div className="colab-section">
                                <div className="circle-symbol"> 
                                <img src={`${process.env.PUBLIC_URL}/images/Calendar.png`}/>
                                </div>
                                <h1 className="ongoing-title">DECISION CALENDARS</h1>   
                                <p>Work with City operations <br/> <br /> Document What climate information is needed, Who needs it, When, Why? <br /> <br /> How accurate, and How will it be used?</p>
                            </div>
                        </div>

                        <div className="colab-ongoing-card">
                            <div className="colab-section">
                                <div className="circle-symbol">
                                <img src={`${process.env.PUBLIC_URL}/images/Policy.png`}/> </div>
                                <h1 className="ongoing-title">POLICY BRIEFS</h1>   
                                <p>Map networks for outreach, programs, and community organizations links <br /> <br /> Connect climate modeling data products to social and policy science, social vulnerability </p>
                            </div>
                        </div>


                        <div className="colab-ongoing-card">
                            <div className="colab-section">
                                <div className="circle-symbol"> 
                                <img src={`${process.env.PUBLIC_URL}/images/City.png`}/>
                                </div>
                                <h1 className="ongoing-title">CITY WIDE DATA PRODUCTS</h1>   
                                <p>High resolution data based on different department needs <br/> <br/> Local-scale climate products <br/> <br/> Combine Data + Lived Experience</p>
                            </div>
                        </div>



                        <div className="colab-ongoing-card">
                            <div className="colab-section">
                            <div className="circle-symbol"> 
                            <img src={`${process.env.PUBLIC_URL}/images/Data.png`}/>
                            </div>
                                <h1 className="ongoing-title">SYNTHESIS STUDIES</h1>   
                                <p>Cool Pavement <br/> <br/> Fire, flood, hotspots <br/> <br/> If-then assessments for future city growth and climate <br/> <br/> Classroom and public education</p>
                            </div>
                        </div>
                    </div>


                    </div>
            <div className="diagram-container">
                <h1 className="diagram-title">CoLab Structure</h1>
                <img src={`${process.env.PUBLIC_URL}/images/Climate-CoLab Triangle.png`} alt="CoLab Structure Diagram" className="centered-image" />
            </div>

            <div className="colab-structure-section-2">
                <div className="section-2-content" style={{ background: "rgba(0, 151, 178, 0.2)", padding: "20px 35px" }}>
                    <h1 className="headshots-title city">City Leadership</h1>
                    <div className="headshot-row top-row">
                        <div className="headshot">
                            <img src={`${process.env.PUBLIC_URL}/images/headshot1.jpg`} alt="Headshot 1" />
                            <p className="headshot-text">Marc Coudert</p>
                        </div>

                        <div className="headshot">
                            <img src={`${process.env.PUBLIC_URL}/images/headshot5.jpg`} alt="Headshot 3" />
                            <p className="headshot-text">Zach Baumer</p>
                        </div>
                    </div>
                </div>
                    
                    <div className="section-2-content" style={{background:"antiquewhite"}}>
                        <h1 className="headshots-title ut">UT Leadership</h1>
                        <div className="headshot-row bottom-row">
                            <div className="headshot">
                                <img src={`${process.env.PUBLIC_URL}/images/dev.jpg`} alt="Headshot 4"/>
                                <p className="headshot-text">Dev Niyogi</p>
                            </div>
                            <div className="headshot">
                                <img src={`${process.env.PUBLIC_URL}/images/headshot2.jpg`} alt="Headshot 5"/>
                                <p className="headshot-text">Junfeng Jiao</p>
                            </div>
                            <div className="headshot">
                                <img src={`${process.env.PUBLIC_URL}/images/headshot3.jpg`} alt="Headshot 6"/>
                                <p className="headshot-text">Patrick Bixler</p>
                            </div>
                        </div>
                    </div>
                </div>




        </div>
    )
}
export default About;
