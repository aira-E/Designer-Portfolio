import React from "react";
// 1. Import useNavigate for routing
import { useNavigate } from "react-router-dom"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../App.css"; // Ensures styles are applied
import IAExisting from "../assets/mock-ups/IA-Existing.png";
import IAUpdated from "../assets/mock-ups/IA-Updated.png";

import JourneyMapwo from "../assets/mock-ups/Journey Map-1.png";
import JourneyMapw from "../assets/mock-ups/Journey Map-2.png";

// 2. Import both faArrowRight and faArrowLeft for the back button
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons"; 

export default function DOST() {
    // 3. Initialize the navigate function
    const navigate = useNavigate();

    // 4. Define the click handler to go back to the homepage ("/")
    const goToHome = () => {
        navigate("/");
    };

    return (
        <div className="DOST_casestudy">
            
            {/* BACK BUTTON */}
            <button 
                onClick={goToHome} 
                style={{ 
                    // Add some basic styling for visibility and placement
                    margin: "20px 20px 0 20px", 
                    padding: "10px 15px", 
                    cursor: "pointer",
                    backgroundColor: "#FEB341", // Example: Use your brand color
                    color: "black",
                    border: "none",
                    borderRadius: "5px",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center"
                }}
            >
                <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: "8px" }} />
                Back to Portfolio
            </button>
            {/* END BACK BUTTON */}
            
            <div className="casestudy_header">
                <div style={{ marginTop: "32px" }}>
                    <iframe
                        width="652"
                        height="367"
                        src="https://www.youtube.com/embed/_40X3xepU7Q?autoplay=1&controls=0"
                        title="DOST Case Study Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; loop=1"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="banner"> 
                    <h1> DOST Website Revamp </h1>
                    <p> The Department of Science and Technology (DOST) website is not just your ordinary government website; it serves as a central hub connecting 16 regional offices and 6 service institutes, each with its own separate website. While this decentralized structure allows different offices to manage their own content, it also creates navigation and other user experiences challenges </p>
  <a
                        href="https://www.figma.com/proto/a24EEJXPrbTNl6SKsy2ZyE/DOST-Website--UX-University-2025-?page-id=0%3A1&node-id=169-30&p=f&viewport=36%2C238%2C0.02&t=HKVl3CBw9iU5GWRy-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=169%3A30&show-proto-sidebar=1"
                        target="_blank"
                        // COMBINED all desired classes into a single string
                        className="figma_dost_btn btn btn-primary card_concept_works_button"
                    >
                        Figma prototype link <FontAwesomeIcon className="icon_fontawesome" icon={faArrowRight} />
                    </a>
                </div>
            </div>
            
            <div className="key_outcomes">
                <h2> Key Outcome</h2>
                <div className="container_key_outcome">
                    <div className="key_outcome"> 
                        <h3> User Task Completion </h3>
                        <p> From 25% to 100% completion rate </p>
                    </div>
                    <div className="key_outcome"> 
                        <h3> Core Problem Solved </h3>
                        <p> From Fragmented UI, Inconsistent Design, and Higher User Frustration to a Centralized Hub with Clear Information Architecture </p>
                    </div>
                    <div className="key_outcome"> 
                        <h3> User Value Proposition </h3>
                        <p> From "frustrating and confusing" to "more efficient"</p>
                    </div>
                 </div>    
            </div>
            
            {/* I. Project Overview and Background */}
            <div className="content">
                <h2> I. Project Overview & Background </h2>
                <div className="content_specific">
                    <h3> Problem Statement</h3>
                    <p> The Department of Science and Technology (DOST) website serves as a central hub connecting 16
                        regional offices and 6 service institutes, each with its own separate website. While this decentralized
                        structure allows different offices to manage their own content, it also creates navigation and other user
                        experience challenges. </p>
                    <p> The website has the potential to be a powerful and accessible platform, but its current design and
                        functionality limit its effectiveness. If its features were better optimized and tailored to user needs, the
                        website could reach its full potential as a centralized and efficient digital hub for
                        science and technology-related services </p>
                </div>
                
                <div className="content_specific"> 
                    <h3> Problem Dfinition </h3>
                    <p> The existing structure leads to a fragmented UI, inconsistent design, and disorganized content. Users struggle to locate services efficiently, leading to frustration, increased reliance on customer support, and high abandonment rates </p>                
                </div>
               
               <div className="content_specific">
                    <h3> Current State Metrics </h3>
               </div>
                <div className="content_specific">
                <h3> Research Objectives </h3>
                    <div className="smart">
                        <h1 className="content_smart"> S </h1>
                        <div>
                            <h3> Specific </h3>
                            <p> Improve website navigation for seamless access to information and services, establish a unified
                                design, and enhance usability while maintaining functionality. Implement a user-centered experience to
                                boost engagement.</p>
                        </div>
                    </div>
                    <div className="smart">
                        <h1 className="content_smart"> M </h1>
                        <div>
                            <h3> Measurable </h3>
                            <p> Track success through user task completion rate and positive user feedback.</p>
                        </div>
                    </div>
                    <div className="smart">
                        <h1 className="content_smart"> A</h1>
                        <div>
                            <h3> Achievable </h3>
                            <p> Leverage existing structures and UX/UI best practices, using an iterative development approach informed by user feedback. </p>
                        </div>
                    </div>
                    <div className="smart">
                        <h1 className="content_smart"> R </h1>
                        <div>
                            <h3> Relevant </h3>
                            <p> Directly addresses navigation issues, fragmented design, and low engagement to enhance accessibility and user satisfaction.</p>
                        </div>
                    </div>           
                    <div className="smart">
                        <h1 className="content_smart"> T </h1>
                        <div>
                            <h3> Time-bound </h3>
                            <p> Phased execution—research and prototyping within a week, hypothetically followed by six months of development and testing, with full implementation within a year.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* II. UX Research & Synthesis */}
            <div className="content">
                <h2> II. UX Research & Synthesis </h2>
                <div className="content_specific">
                    <h3> Target Audience </h3>

                </div>
                <div className="content_specific">
                    <h3> Proto-Personas: Pain Points </h3>

                </div>
                <div className="content_specific">
                    <h3> Root Cause Analysis </h3>

                </div>                
            </div>

            {/* III. Methodology & Testing Approach */}
            <div className="content">
                <h2> III. Methodology & Testing Approach </h2>
                <div className="content_specific">
                    <h3> Research Methods </h3>
                    <p> These methods are cost-effective, data-driven, and adaptable within the constraints of government
                    website development. They ensure incremental improvements without requiring a complete overhaul,
                    aligning with usability goals while respecting budget, time, and policy limitations </p>
                    <div> 
                        <ul>
                        <li>
                            <h3>A/B Testing</h3>
                            <p>
                            The research will compare the original and revamped designs to determine which
                            provides a better user experience, revealing insights on navigation, engagement, and task efficiency to
                            guide further improvements.
                            </p>
                        </li>
                        <li>
                            <h3>Survey</h3>
                            <p>
                            The research will gather direct user feedback on the overall design, uncovering
                            preferences, frustrations, and suggestions to drive continuous improvements while keeping the website
                            aligned with user needs.
                            </p>
                        </li>
                        <li>
                            <h3>Usability Testing</h3>
                            <p>
                            The research will observe users interacting with the revamped design to identify
                            usability issues and areas for enhancement, ensuring the website is intuitive and meets user expectations.
                            </p>
                        </li>
                        </ul>
                    </div>
                </div>
                <div className="content_specific">
                    <h3> Usability Testing Approach </h3>

                </div>
                <div className="content_specific">
                    <h3> Purposive Sampling </h3>

                </div>      
                <div className="content_specific">
                    <h3> Key Tasks for Testing </h3>

                </div>                              
            </div>

            {/* IV. UX Solution Ideation & Design */}
            <div className="content">
                <h2> IV. UX Solution Ideation & Design </h2>
                    <div className="content_specific">
                        <h3> Ideation Framework </h3>
                <div className="content">
                    <div className="scamper">
                        <h1 className="content_scamper"> S </h1>
                        <div>
                            <h3> Implement an AI-Powered Virtual Assistant </h3>
                            <p> Introduce an AI chatbot that provides instant responses to
                                common inquiries instead of a static FAQs section and Contact Us
                                page </p>
                        </div>
                    </div>

                    <div className="scamper">
                        <h1 className="content_scamper"> C </h1>
                        <div>
                            <h3> Execute a New Design Architecture </h3>
                            <p> Implement a new design architecture that consolidates redundant
                                sections of the website.</p>
                        </div>
                    </div>
                    <div className="scamper-imgs">
                        <img src={IAExisting} className="IA" alt="IA Existing" />           
                        <img src={IAUpdated} className="IA" alt="IA Updated" />
                    </div>
                    
                    <div className="scamper">
                        <h1 className="content_scamper"> A </h1>
                        <div>
                            <h3> Integrate a Comprehensive Search Engine </h3>
                            <p> Integrate a comprehensive search engine for the entire website and
                                for sections with extensive content.</p>
                        </div>
                    </div>

                    <div className="scamper">
                        <h1 className="content_scamper"> M </h1>
                        <div>
                            <h3> Enhance Content Discovery Improve design that will help the user </h3>
                            <p> Improve design that will help the user understand each section by
                                using context-aware call-to-action (CTA) buttons and infographics
                                instead of plain texts </p>
                        </div>
                    </div>

                    <div className="scamper">
                        <h1 className="content_scamper"> P </h1>
                        <div>
                            <h3> Introduce an Online Complaint Submission System </h3>
                            <p> Instead of providing only text-based instructions for submitting
                                complaints, introduce an online complaint submission system.</p>
                        </div>
                    </div>

                    <div className="scamper">
                        <h1 className="content_scamper"> E </h1>
                        <div>
                            <h3> Reduce the Homepage and Navigation Bar Clutter </h3>
                            <p> Remove less essential services from the landing page and quick links
                                to declutter the homepage and the other sections of the website.</p>
                        </div>
                    </div>

                    <div className="scamper">
                        <h1 className="content_scamper"> R </h1>
                        <div>
                            <h3> Enforce User Accounts </h3>
                            <p> Develop a user account system that identifies the user’s role within
                                a sector (e.g., scholar, researcher, educator, private citizen). That will
                                enable smart personalized content suggestions </p>
                        </div>
                    </div> 
                    
                </div>
                    </div>
                <div className="content_specific">
                    <h3> Core Solution </h3>

                </div>
                <div className="content_specific">
                    <h3> Features </h3>

                </div>                
            </div>


            {/* V. Validation, Results, & Conclusion */}
            <div className="content">
                <h2>V. Validation, Results, & Conclusion</h2>
                <div className="content_specific">
                    <h3> User Behavior: Current Site </h3>

                </div>
                <div className="content_specific">
                    <h3> UX Solution Validation </h3>

                </div>
                <div className="content_specific">
                    <h3> Overall User Feedback </h3>

                </div>        
                <div className="content_specific">
                    <h3> Measurable Impact </h3>

                </div>              
                <div className="content_specific">
                    <h3> Future Development </h3>

                </div>  
            </div>

        </div>
    );

}
