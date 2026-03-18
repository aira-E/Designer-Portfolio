import React, { useEffect, useState } from "react";
// Import useNavigate for routing
import { useNavigate } from "react-router-dom"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import faArrowRight and faArrowLeft for the back button
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons"; 

import Banner from "../assets/mock-ups/banner-greenleafgrocers.png";

// Personas 
import UserPersona1 from "../assets/mock-ups/userpersona1.png";
import UserPersona2 from "../assets/mock-ups/userpersona2.png";
import UserPersona3 from "../assets/mock-ups/userpersona3.png";
import UserPersona4 from "../assets/mock-ups/userpersona4.png";

import Quote1 from "../assets/mock-ups/quote1.png";
import Quote2 from "../assets/mock-ups/quote2.png";
import Quote3 from "../assets/mock-ups/quote3.png";
import Quote4 from "../assets/mock-ups/quote4.png";
import Quote5 from "../assets/mock-ups/quote5.png";

import Ideation from "../assets/mock-ups/ideation-greenloaf.png";
import IA from "../assets/mock-ups/ia.png";

import About from "../assets/mock-ups/greenloaf-lowfi-screens/1.png";
import Landing from "../assets/mock-ups/greenloaf-lowfi-screens/2.png";
import Profile from "../assets/mock-ups/greenloaf-lowfi-screens/3.png";
import Item from "../assets/mock-ups/greenloaf-lowfi-screens/4.png";
import Listing from "../assets/mock-ups/greenloaf-lowfi-screens/5.png";
import Cart from "../assets/mock-ups/greenloaf-lowfi-screens/6.png";

import AboutScreen from "../assets/mock-ups/greenleaf-screens/about.png";
import AddCardScreen from "../assets/mock-ups/greenleaf-screens/add-card.png";
import CartScreen from "../assets/mock-ups/greenleaf-screens/cart.png";
import HistoryScreen from "../assets/mock-ups/greenleaf-screens/history.png";
import LandingScreen from "../assets/mock-ups/greenleaf-screens/landing.png";
import ListingScreen from "../assets/mock-ups/greenleaf-screens/listing.png";
import OrderSummaryScreen from "../assets/mock-ups/greenleaf-screens/order-summary.png";
import ProductScreen from "../assets/mock-ups/greenleaf-screens/product.png";
import ProfileScreen from "../assets/mock-ups/greenleaf-screens/profile.png";
import SearchScreen from "../assets/mock-ups/greenleaf-screens/search.png";
import SuccessScreen from "../assets/mock-ups/greenleaf-screens/success.png";
import SurveyScreen from "../assets/mock-ups/greenleaf-screens/survey.png";


export default function GreenleafGrocers() {
    // 1. Initialize the navigate function
    const navigate = useNavigate();

    // 2. Define the click handler to go back to the homepage ("/")
    const goToHome = () => {
        navigate("/");
    };

    // ---------- ADDED: Back-to-top state & handlers ----------
    const [showTop, setShowTop] = useState(false);
    useEffect(() => {
      const onScroll = () => setShowTop(window.scrollY > 300);
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
    // --------------------------------------------------------

    return (
        <div className="GreenleafGrocers_casestudy">
            {/* ---------- ADDED: component-scoped CSS for back-to-top ---------- */}
            <style>{`
              .back-to-top {
                position: fixed;
                right: 20px;
                bottom: 20px;
                width: 44px;
                height: 44px;
                border-radius: 8px;
                background: #FEB341;
                color: #000;
                border: none;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                opacity: 0;
                transform: translateY(12px);
                transition: opacity 180ms ease, transform 180ms ease;
                box-shadow: 0 8px 20px rgba(0,0,0,0.18);
                z-index: 1200;
                font-weight: 700;
                font-size: 18px;
              }
              .back-to-top.active {
                opacity: 1;
                transform: translateY(0);
              }
              .back-to-top:focus { outline: 2px solid #fff; outline-offset: 2px; }
              @media (max-width: 480px) {
                .back-to-top { right: 12px; bottom: 12px; width: 40px; height: 40px; font-size: 16px; }
              }
            `}</style>
            {/* ---------------------------------------------------------------- */}

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
                    {/*<iframe
                        width="652"
                        height="367"
                        src="https://www.youtube.com/embed/S-w1xrbS4iY?autoplay=1&controls=0"
                        title="DOST Case Study Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; loop=1"
                        allowFullScreen
                    ></iframe>*/}
                    <img src={Banner} className="Banner" alt="Greenleaf Grocers Mock-up" />
                </div>
                <div className="banner"> 
                    <h1> Greenleaf Grocers </h1>
                    <p> The Greenleaf Grocers mobile application offers a modern, full-featured digital experience designed to make sustainable grocery shopping accessible and simple for tech-savvy customers. By integrating a digital loyalty program, online ordering, and transparent insights into the environmental impact of products, the app empowers users to make environmentally-conscious choices with ease </p>
       <a
    href="https://www.figma.com/proto/X9ruehgiRnHCim09EzprBa/Greenleaf-Grocers-Website?node-id=58435-5060&t=xOrG8tpglXul1NgE-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=58435%3A5060&show-proto-sidebar=1"
    target="_blank"
    // Assuming the file uses a link-specific class like the DOST one (e.g., figma_pricepulse_btn)
    // and that's the missing duplicate. Combine it here:
    className="figma_pricepulse_btn btn btn-primary card_concept_works_button"
>
    Figma prototype link <FontAwesomeIcon className="icon_fontawesome" icon={faArrowRight} />
</a>
                </div>
            </div>

            {/*<div className="key_outcomes">
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
            </div>*/}

            {/* I. Discovery */}
            <div className="content">
                <h2> I. Discovery </h2>
                <div className="content_specific"> 
                    <h3> User Research </h3> 
                    <p> <b> User Personas. </b> These are the target users of the Greenleaf Grocers </p>
                </div>
                <div className="container_user-personas">
                    <img src={UserPersona1} className="User-Personas" alt="Eco-conscious" />
                    <img src={UserPersona2} className="User-Personas" alt="Health-conscious" />
                    <img src={UserPersona3} className="User-Personas" alt="Convenience" />
                    <img src={UserPersona4} className="User-Personas" alt="Economical" />
                </div>

                <div className="content_specific"> 
                    <h3> Data Analysis </h3> 
                    <p> <b> Customer pain points and opportunities. </b> We spoke with customers and summarized their most critical issues:</p>
                <ol>
                    <li>
                    <strong>Not built for mobile:</strong> 
                    Customers reported that the current web experience is not functional on mobile devices.
                    </li>
                    <li>
                    <strong>Limited product info:</strong> 
                    Product details are insufficient regarding sourcing, environmental impact, pricing, vouchers, promotions, and nutrition facts.
                    </li>
                    <li>
                    <strong>Desire for ordering and delivery:</strong> 
                    Users want more convenient shopping methods, including online ordering, delivery services, and advanced ordering options.
                    </li>
                    <li>
                    <strong>Shopping insights:</strong>
                    <ul>
                        <li>Users want to track purchase history to analyze shopping habits and simplify reordering.</li>
                        <li>Customers want to understand how their specific purchases contribute to sustainability goals.</li>
                    </ul>
                    </li>
                    <li>
                    <strong>Accurate search engine:</strong> 
                    The search functionality needs to support natural language, provide accurate results, and suggest alternatives for out-of-stock items.
                    </li>
                    <li>
                    <strong>Smart features integration:</strong> 
                    There is a preference for automatic, personalized suggestions that align with individual needs and preferences.
                    </li>
                    <li>
                    <strong>Better navigation:</strong> 
                    The current website is difficult to navigate, hindering users who need to find items quickly.
                    </li>
                </ol>

                <p> Quotes from research interview </p>
                <div className="container_quotes">
                    <img src={Quote1} className="Quotes" alt="Working mom" />
                    <img src={Quote2} className="Quotes" alt="Barista" />
                    <img src={Quote3} className="Quotes" alt="Healthcare worker" />
                    <img src={Quote4} className="Quotes" alt="Non-profit manager" />
                    <img src={Quote5} className="Quotes" alt="Product manager" />
                </div>
                </div>                
            </div>

            {/* II. Define */}
            <div className="content">
                <h2> II. Define </h2>
                <div className="content_specific"> 
                    <h3> The Problem </h3> 
                    <p> Greenleaf Grocers’ current website lacks mobile optimization, detailed product information, smart personalization, and efficient navigation, resulting in an inconvenient shopping experience for time-conscious, sustainability-minded customers. </p>
                <ol>
                    <li>
                    Poor Mobile Usability
                    Greenleaf Grocers’ current website is not optimized for mobile, making it difficult for users—especially on-the-go shoppers—to browse, view products, and complete purchases conveniently.
                    </li>
                    <li>
                    Lack of Detailed Product Information
                    Customers struggle to make confident purchase decisions due to limited information on sourcing, environmental impact, pricing, promos, and nutrition facts.
                    </li>
                    <li>
                    Inconvenient Shopping Experience
                    Users want faster, more efficient ways to shop, including features for online ordering, delivery, and advance scheduling, but these options are not yet available.
                    </li>
                    <li>
                    Missing Personalized and Smart Features
                    The absence of intelligent features like personalized recommendations, smarter search, and reorder options prevents customers from enjoying a seamless, tailored experience.
                    </li>
                    <li>
                    Confusing Site Navigation
                    Users—particularly those who shop quickly—find the site difficult to navigate, causing frustration and leading them to purchase only what they immediately see.
                    </li>
                </ol>
                </div>
            </div>

            {/* III. Ideation*/}
            <div className="content">
                <h2> III. Ideation </h2>
                <div className="content_specific"> 
                    <h4> Crazy 8s </h4> 
                    <p> Displayed here are the ideas created using the Crazy 8s technique: </p>
                </div>  

                <div className="content_specific"> 
                    <div className="container_oneimg"> 
                        <img src={Ideation} className="Ideation" alt="Ideas" />
                    </div>
                </div>  

            </div>

            <div className="content">
                <h2> IV. Wireframe </h2>
                <div className="content_specific"> 
                    <h4> Information Architecture </h4> 
                    <p> Using the proposed ideas, here is the information architecture for the revised website: </p>
                </div>  
                <div className="content_specific"> 
                    <div className="container_oneimg"> 
                        <img src={IA} className="IA" alt="Information Architecture" />
                    </div>
                </div>  

                <div className="content_specific"> 
                    <h4> Low-Fidelity Wireframes </h4> 
                </div>  
                <div className="content_specific"> 
                    <div className="container_lowfi">
                        <img src={About} className="Lowfi" alt="About Us page" />
                        <img src={Landing} className="Lowfi" alt="Landing page" />
                        <img src={Profile} className="Lowfi" alt="Profile page" />
                        <img src={Item} className="Lowfi" alt="Item page" />
                        <img src={Listing} className="Lowfi" alt="Listing page" />
                        <img src={Cart} className="Lowfi" alt="Cart page" />
                    </div>
                </div>  
            </div>

            
            <div className="content">
                <h2> V. Design </h2>
                <div className="content_specific"> 
                    <div className="container_hifi">
                        <img src={AboutScreen} className="Hifi" alt="About" />
                        <img src={LandingScreen} className="Hifi" alt="Landing" />
                        <img src={ProfileScreen} className="Hifi" alt="Profile" />
                        <img src={ProductScreen} className="Hifi" alt="Product" />
                        <img src={ListingScreen} className="Hifi" alt="Listing" />
                        <img src={CartScreen} className="Hifi" alt="Cart" />
                    </div>
                </div>  
                <div className="content_specific"> 
                    <div className="container_hifi">
                        <img src={AddCardScreen} className="Hifi" alt="Add Card" />
                        <img src={HistoryScreen} className="Hifi" alt="History" />
                        <img src={OrderSummaryScreen} className="Hifi" alt="Order Summary" />
                        <img src={SearchScreen} className="Hifi" alt="Search" />
                        <img src={SuccessScreen} className="Hifi" alt="Success" />
                        <img src={SurveyScreen} className="Hifi" alt="Survey" />
                    </div>
                </div> 
            </div>

            {/* ---------- ADDED: Back to top button ---------- */}
            <button
              type="button"
              aria-label="Back to top"
              title="Back to top"
              className={`back-to-top ${showTop ? "active" : ""}`}
              onClick={scrollToTop}
            >
              ↑
            </button>
            {/* ------------------------------------------------ */}

        </div>
    );
}

