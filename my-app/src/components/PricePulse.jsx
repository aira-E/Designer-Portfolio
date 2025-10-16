import React from "react";
// Import useNavigate for routing
import { useNavigate } from "react-router-dom"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import faArrowRight and faArrowLeft for the back button
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons"; 

import RootcausePricePulse from "../assets/mock-ups/root-cause-pricepulse.png";

import ScreenForecast from "../assets/mock-ups/price-pulse-screens/forecast.png";
import ScreenHome from "../assets/mock-ups/price-pulse-screens/home.png";
import ScreenMap from "../assets/mock-ups/price-pulse-screens/map.png";
import ScreenPrediction from "../assets/mock-ups/price-pulse-screens/price-prediction.png";
import ScreenCommodities from "../assets/mock-ups/price-pulse-screens/price-commodities.png";
import ScreenPrice from "../assets/mock-ups/price-pulse-screens/price-range.png";

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
                    <p> This mobile application is a community-focused tool that tracks and forecasts prices of
                    essential goods or commodities like rice, LPG, fuel, and groceries at the city level.
                    Using AI, it analyzes local price data, news, and trends to predict if prices will rise, fall,
                    or stay stable over the next two-four weeks. </p>
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

            {/* I. Project Overview */}
            <div className="content">
                <h2> I. Project Overview </h2>
                <div className="content_specific"> 
                    <h3> The Problem: Inflation's Silent Toll on Filipino Wallets </h3> 
                    <p> In the Philippines, price volatility for basic necessities isn't just a headline—it's a kitchen-table crisis. The fluctuating costs of rice, LPG, cooking oil, and fuel make financial stability a myth for the average Filipino household. Consumers are forced to make immediate, often high-cost decisions based on limited, national-level data that doesn't reflect the realities of their barangay (local district). </p>
                    <p> The core of the problem lies in the information asymmetry and lack of predictive insight: </p>
                    <ul>
                        <li> Pain Point: Official government price tracking is often delayed, aggregated nationally, and difficult for non-economists to interpret. </li>
                        <li> Consequence: A family might buy an LPG tank today, only to find the price dropped by 50$ in the next town—or worse, see it skyrocket the following week. This uncertainty breeds anxiety, encourages panic-buying, and erodes trust in local markets. </li>
                    </ul>
                    <h4> Root Cause Analysis </h4>
                    <div className="root-cause_imgs">
                        <img src={RootcausePricePulse} className="Root Cause" alt="Root Cause Analysis" />
                    </div>
                </div>
                <div className="content_specific"> 
                    <h3> The Proposed Solution: Price Pulse PH  </h3> 
                    <p> Price Pulse PH is an AI-powered, community-driven mobile application designed to democratize price transparency at the hyper-local level. By blending user-submitted data with machine learning analysis of national trends, news, and history, we empower Filipinos to make smarter, proactive spending and inventory decisions.</p>
                    
                <div className="content_specific">  
                    <div className="screen_imgs_container">    
                        <div className="screen_imgs">
                            <img src={ScreenForecast} className="Screen" alt="Price Forecast Page" />
                            <p> Price Day Forecast </p>
                        </div>  
                        
                        <div className="screen_imgs">
                            <img src={ScreenCommodities} className="Screen" alt="Commodities Page" />
                            <p> Commodities </p>
                        </div>      

                        <div className="screen_imgs">
                            <img src={ScreenMap} className="Screen" alt="Market Map Page" />
                            <p> Market Map </p>
                        </div> 

                        <div className="screen_imgs">
                            <img src={ScreenPrediction} className="Screen" alt="Prediction Page" />
                            <p> Price Prediction </p>
                        </div> 

                        <div className="screen_imgs">
                            <img src={ScreenPrice} className="Screen" alt="Price Ranges Page" />
                            <p> Price Ranges </p>
                        </div> 

                    </div>
                </div>
                </div>                
            </div>

            {/* II. Discovery & Research */}
            <div className="content">
                <h2> II. Discovery & Research </h2>
                <div className="content_specific"> 
                    <h3> Existing Market Analysis & Competitive Landscape </h3> 
                    <p>   </p>
                </div>     

                <div className="content_specific"> 
                    <h3> User Research Findings </h3> 
                    <p>   </p>
                </div>    

                <div className="content_specific"> 
                    <h3> Data Significance & Projections </h3> 
                    <p>   </p>
                </div>        
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

