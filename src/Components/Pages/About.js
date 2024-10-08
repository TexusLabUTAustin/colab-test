import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './About.css';

const dropdownData = [
    {
        title: "Climate Assessments",
        icon: `${process.env.PUBLIC_URL}/images/Climate-icon.png`,
        options: [
            { text: "Climate trends, patterns, changes, event summaries", link: "#" },
            { text: "Case studies for high impact events", link: "#" },
            { text: "Future Projections", link: "#" },
        ],
    },
    {
        title: "Decision Calendars",
        icon: `${process.env.PUBLIC_URL}/images/Calendar-icon.png`,
        options: [
            { text: "Work with City operations", link: "#" },
            { text: "Document What climate information is needed, Who needs it, When, Why?", link: "#" },
            { text: "How accurate, and How will it be used?", link: "#" },
        ],
    },
    {
        title: "Policy Briefs",
        icon: `${process.env.PUBLIC_URL}/images/Policy-icon.png`,
        options: [
            { text: "Map networks for outreach, programs, and community organizations links", link: "#" },
            { text: "Connect climate modeling data products to social and policy science, social vulnerability", link: "#" },
        ],
    },
    {
        title: "City-Wide Data Products",
        icon: `${process.env.PUBLIC_URL}/images/City-icon.png`,
        options: [
            { text: "High resolution data based on different department needs", link: "#" },
            { text: "Local-scale climate products", link: "#" },
            { text: "Combine Data + Lived Experience", link: "#" },
        ],
    },
    {
        title: "Synthesis Studies",
        icon: `${process.env.PUBLIC_URL}/images/Data-icon.png`,
        options: [
            { text: "Cool Pavement", link: "#" },
            { text: "Fire, flood, hotspots", link: "#" },
            { text: "If-then assessments for future city growth and climate", link: "#" },
            { text: "Classroom and public education", link: "#" },
        ],
    },
];

const About = () => {
    return(
        <div className="focus">
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
            

            <div className="planning-implementation">
                <div className="ongoing-header">
                    <h1 className="ongoing-header-title">Planning and<br/>Implementation</h1>
                </div>

                <div className="ongoing-content">
                    <div className="dropdown-section">
                        {dropdownData.map((item, index) => (
                            <div className="dropdown-card" key={index}>
                                <div className="dropdown-header">
                                    <div className="circle-symbol">
                                        <img src={item.icon} alt="Icon" />
                                    </div>
                                    <h1 className="dropdown-title">{item.title}</h1>
                                    <button className="dropdown-arrow">▼</button>
                                </div>
                                <div className="dropdown-content">
                                    {item.options.map((option, idx) => (
                                        <div className="dropdown-item" key={idx}>
                                            <span className="dropdown-text">{option.text}</span>
                                            <a href={option.link} className="read-more">Read More</a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
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
