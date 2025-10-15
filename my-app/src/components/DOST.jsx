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

            <div className="content">
                <h2> Project Background </h2>
                <p className="project_background"> The Department of Science and Technology (DOST) website serves as a central hub connecting 16
                    regional offices and 6 service institutes, each with its own separate website. While this decentralized
                    structure allows different offices to manage their own content, it also creates navigation and other user
                    experience challenges. </p>
                <p> The website has the potential to be a powerful and accessible platform, but its current design and
                    functionality limit its effectiveness. If its features were better optimized and tailored to user needs, the
                    website could reach its full potential as a centralized and efficient digital hub for
                    science and technology-related services </p>
            </div>

            <div className="content">
                <h2> UX Solution </h2>
                <p> The SCAMPER method facilitates creative yet practical solutions for improving existing applications like the DOST website. It
                    allows for impactful enhancements without requiring a complete redesign, aligning with government website template
                    guidelines. </p>
            </div>

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

            <div className="content">
                <h2> Research Methodology </h2>
                <p> These methods are cost-effective, data-driven, and adaptable within the constraints of government
                    website development. They ensure incremental improvements without requiring a complete overhaul,
                    aligning with usability goals while respecting budget, time, and policy limitations </p>
                
                <div> 
                    <h3> A/B Testing </h3>
                    <p> The research will compare the original and revamped designs to determine which
                    provides a better user experience, revealing insights on navigation, engagement, and task efficiency to
                    guide further improvements. </p>
                    <h3> Survey </h3>
                    <p> The research will gather direct user feedback on the overall design, uncovering
                    preferences, frustrations, and suggestions to drive continuous improvements while keeping the website
                    aligned with user needs. </p>
                    <h3> Usability Testing </h3>
                    <p> The research will observe users interacting with the revamped design to identify
                    usability issues and areas for enhancement, ensuring the website is intuitive and meets user expectations. </p>
                </div>
            </div>

            <div className="content">
                <h2> Conclusion </h2>
                <div className="scamper-imgs">
                    <img src={JourneyMapwo} className="JourneyMap" alt="Journey Map without improvements" />           
                    <img src={JourneyMapw} className="JourneyMap" alt="Journey Map with improvements" />
                </div>
                <p> With the help of user behavior map, the test concludes that identifying the problem and applying the
                    proposed solution, the task completion rate of the users will raise from 25% to 100%
                    Overall, users (4/4) prefered the revamped design because it's more efficient compared to the current
                    website, stating,
                    “Kasi minimalized niya ‘yung interactions eh. Number one factor sa UX is efficiency, it
                    saves a lot of time and energy. </p>
            </div>


        </div>
    );

}
