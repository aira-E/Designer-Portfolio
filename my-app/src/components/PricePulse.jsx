import React from "react";
// Import useNavigate for routing
import { useNavigate } from "react-router-dom"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import faArrowRight and faArrowLeft for the back button
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons"; 

export default function PricePulse() {
    // 1. Initialize the navigate function
    const navigate = useNavigate();

    // 2. Define the click handler to go back to the homepage ("/")
    const goToHome = () => {
        navigate("/");
    };

    return (
        <div className="PricePulse_casestudy"> 
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
                        src="https://www.youtube.com/embed/S-w1xrbS4iY?autoplay=1&controls=0"
                        title="DOST Case Study Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; loop=1"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="banner"> 
                    <h1> Price Pulse PH </h1>
                    <p> The Department of Science and Technology (DOST) website is not just your ordinary government website; it serves as a central hub connecting 16 regional offices and 6 service institutes, each with its own separate website. While this decentralized structure allows different offices to manage their own content, it also creates navigation and other user experiences challenges </p>
       <a
    href="https://www.figma.com/proto/C1NQvbSVUT0wNbucFIoSVJ/Price-Pulse-PH?page-id=0%3A1&node-id..."
    target="_blank"
    // Assuming the file uses a link-specific class like the DOST one (e.g., figma_pricepulse_btn)
    // and that's the missing duplicate. Combine it here:
    className="figma_pricepulse_btn btn btn-primary card_concept_works_button"
>
    Figma prototype link <FontAwesomeIcon className="icon_fontawesome" icon={faArrowRight} />
</a>
                </div>
            </div>

            <div className="content">
                <h2> Project Background </h2>
                <p className="project_background"> This mobile application is a community-focused tool that tracks and forecasts prices of
                    essential goods or commodities like rice, LPG, fuel, and groceries at the city level.
                    Using AI, it analyzes local price data, news, and trends to predict if prices will rise, fall,
                    or stay stable over the next two-four weeks. </p>
            </div>

            <div className="content">
                <h2> Key Features </h2>
                <p> <ul>  
                    <li> Real-time local daily price updates </li>
                    <li> AI-powered two-four weeks forecasts with confidence levels </li>
                    <li> Simple explanations of what's driving price changes </li>
                    <li> Alerts for price hikes or drops </li>
                    <li> Designed for consumers, vendors, and local government use  </li>
                </ul></p>
            </div>

            <div className="content">
                <h2> Purpose </h2>
                <p> To help Filipinos make smarter spending decisions, increase price transparency,
                    and support local policymaking during times of inflation or market shifts.</p>
            </div>

        </div>
    );
}

