import React from "react";
// Import useNavigate for routing
import { useNavigate } from "react-router-dom"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import faArrowRight and faArrowLeft for the back button
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons"; 

import RootcausePricePulse from "../assets/mock-ups/root-cause-pricepulse.png";
import Feasibility from "../assets/mock-ups/feasibility.png";

import ScreenForecast from "../assets/mock-ups/price-pulse-screens/forecast.png";
import ScreenMap from "../assets/mock-ups/price-pulse-screens/map.png";
import ScreenPrediction from "../assets/mock-ups/price-pulse-screens/price-prediction.png";
import ScreenPrice from "../assets/mock-ups/price-pulse-screens/price-range.png";

import Cosumer from "../assets/mock-ups/character-consumer.png";
import Vendor from "../assets/mock-ups/character-vendor.png";
import Lgu from "../assets/mock-ups/character-lgu.png";

import RicePrice from "../assets/mock-ups/rice-price.png";
import VarianceTable from "../assets/mock-ups/variance-table.png";

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
                            <p> Price Outlook </p>
                        </div>  

                        <div className="screen_imgs">
                            <img src={ScreenPrice} className="Screen" alt="Price Ranges Page" />
                            <p> Explore Price Ranges </p>
                        </div> 

                        {/**<div className="screen_imgs">
                            <img src={ScreenCommodities} className="Screen" alt="Commodities Page" />
                            <p> Explore Prices </p>
                        </div> **/}

                        <div className="screen_imgs">
                            <img src={ScreenMap} className="Screen" alt="Market Map Page" />
                            <p> Find Market Near You </p>
                        </div> 

                        <div className="screen_imgs">
                            <img src={ScreenPrediction} className="Screen" alt="Prediction Page" />
                            <p> Predict Future Costs </p>
                        </div> 



                    </div>
                </div>
                </div>                
            </div>

            {/* II. UX Research */}
            <div className="content">
                <h2> II. UX Research </h2>
                <div className="content_specific">
                    <h3> Research Objectives </h3>
                    <p> </p>
                </div>
                <div className="content_specific">
                    <h3> Target Audience </h3>
                    <p> The following groups will benefit the most from the Price Pulse PH application: </p>
                    <div className="target_audience">
                        <img src={Cosumer} className="character" alt="Consumer" />
                        <div>
                            <h4> Consumers </h4>
                            <p> Achieves Strategic, Confident Spending despite market volatility. </p>
                        </div>
                    </div>
                    <div className="target_audience">
                        <img src={Vendor} className="character" alt="Vendor" />
                        <div>
                            <h4> Vendors </h4>
                            <p> Enables Optimal Inventory & Competitive Edge through timely insights. </p>
                        </div>
                    </div> 
                    <div className="target_audience">
                        <img src={Lgu} className="character" alt="LGU" />
                        <div>
                            <h4> LGU </h4>
                            <p>Secures Real-Time, Data-Driven Policy Making for proactive market intervention</p>
                        </div>
                    </div>                    
                </div>       
                <div className="content_specific">
                    <h3> User Research Findings </h3>
                    <p> The analysis of Hasmin (Denorado) Rice prices across a handful of Caloocan City barangays reveals staggering disparities that national or regional average data completely masks. This variance (₱320 = 38.5%)  is the empirical proof that consumers and vendors are operating without the necessary local insight. </p>
                    <div className="content_specific"> 
                        <div className="research-findings">
                            <img src={RicePrice} className="Research-findings" alt="Price Variance" />
                            <img src={VarianceTable} className="Research-findings" alt="Price Variance Table" />
                        </div>
                    </div>
                    <div className="content_specific">
                        <p> The data conclusively points to a single, critical breakdown in the market information ecosystem:
                            The current system provides price data that is too coarse (national/regional) to solve the user’s granular, localized financial problem.
                            This gap creates an environment of Actionable Information Asymmetry, defined by the following outcomes derived solely from the price variance: </p>
                        <p>
                            <ol>
                                <li> Guaranteed Overspending: Since consumers cannot verify a ₱320 variance without physically traveling, the market forces a significant portion of consumers to unnecessarily overpay for a staple good simply due to lack of localized price intelligence. </li>
                                <li> Vendor Inefficiency: Small vendors who purchase in bulk are exposed to the ₱320 variance, meaning their profit margins are directly dependent on whether they happen to choose the most/least expensive supplier. Without localized data, inventory optimization is impossible. </li>
                                <li> Policy Blind Spot: The extreme, localized variance suggests that official national or city-wide data is not granular enough to allow local government units (LGU's) to target specific communities for price monitoring or subsidy intervention. </li>
                            </ol>
                        </p>
                    </div>

                    <div className="content_specific">
                        <p> To conclude, The 38.5% price disparity is the quantitative proof that a product providing hyper-local price transparency and predictive insight is not merely a convenience, but a financial necessity for Filipinos.</p>
                    </div>
                </div>
            </div>

            {/* III. UX Solution Ideation */}
            <div className="content">
                <h2> III. UX Solution Ideation </h2>
                <div className="content_specific"> 
                    <h3> Ideation Framework </h3> 
                    <p>   </p>
                </div> 

                <div className="content_specific"> 
                    <h4> Digital Solution </h4> 
                    <p> A Hyperlocal Inflation Tracker that is an AI-powered tool designed to monitor and analyze the cost of living in specific city. Aggregates real-time data on prices of essential goods and services, visualizes trends over time to highlight rising or falling costs, and provides predictive insights to help users anticipate future cost changes.  </p>

                </div>  
 
                 <div className="content_specific"> 
                    <h3> Core Features </h3> 
                        <p> <ul> 
                            <li> Real-time local daily price updates </li>
                            <li> AI-powered two-four weeks forecasts with confidence levels </li>
                            <li> Simple explanations of what's driving price changes </li>
                            <li> Alerts for price hikes or drops </li>
                            <li> Designed for consumers, vendors, and local government use  </li>
                        </ul></p>
                </div>  

                <div className="content_specific"> 
                    <h3> Feasibility Study </h3> 
                    <div className="content_specific">
                        <p> Price Pulse PH is technically feasible due to the accessibility of the following technologies: </p>
                        <p><ul> 
                            <li> GPS Integration – Determines the user's location to display prices from the nearest barangay/city-level markets. </li>
                            <li> Data Scraping & Aggregation – Pulls commodity price data from </li>
                        </ul></p>
                        <p> Data sources for data scraping & aggregation: </p>
                        <div className="feasibility_imgs">
                            <img src={Feasibility} className="Feasibility" alt="Data source" />
                        </div> 
                    </div>
                </div> 
            </div>



            {/*<div className="content">
                <h2> Purpose </h2>
                <p> To help Filipinos make smarter spending decisions, increase price transparency,
                    and support local policymaking during times of inflation or market shifts.</p>
            </div>*/}

        </div>
    );
}

