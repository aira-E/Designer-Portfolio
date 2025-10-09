// src/App.jsx
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import clsx from "clsx";

// Import logos
import airaIcon from "./assets/icons/airaestur.png";
import dostIcon from "./assets/icons/dost.png";
import pricepulseIcon from "./assets/icons/pricepulse.png";
import figmaIcon from "./assets/icons/figma.png";
import aiIcon from "./assets/icons/aillustrator.png";
import csharpIcon from "./assets/icons/csharp.png";
import htmlIcon from "./assets/icons/html.png";
import cssIcon from "./assets/icons/css.png";
import jsIcon from "./assets/icons/js.png";
import pyIcon from "./assets/icons/python.png";

//Import images
import qr from "./assets/icons/qr.png";

// Import mock-ups
import dostMock from "./assets/mock-ups/dost.png";
import pricepulseMock from "./assets/mock-ups/pricepulse.png";
import amwayMock from "./assets/mock-ups/amway.jpg";  
import toyrushMock from "./assets/mock-ups/toyrushgame.jpg";  
import gtaraMock from "./assets/mock-ups/gtara.png";  
import fruitvendingMock from "./assets/mock-ups/guivendingmachine.png";  

// Import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faPhone, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  return (
    <>
      {/* Hero Section */}
      <div className="section_hero">
        <div className="container_hero">
          <img src={airaIcon} className="icon_airaestur" alt="icon_airaestur" />
          <div className="section_hero_texts">
            <h1>Behind the Screens</h1>
            <h3 className="introduction">
              I’m <span style={{ color: "#FEB341" }}>Aira</span>, a UI/UX designer based in the Philippines. I am passionate in creating a user-centric and intuitive design.
            </h3>
          </div>
        </div>

        <div className="container_data">
          <div className="card_data">
            <h2> 5 </h2>   
            <p> Proffessional Experience </p>
          </div>

          <div className="card_data">
            <h2> 20+ </h2>   
            <p> Projects </p>
          </div>

          <div className="card_data">
            <h2> 6 </h2>   
            <p> Certifications </p>
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="section_case_studies">
        <div className="section_cards_case_studies">
        <h2> Case Studies </h2>
          <div className="card_case_studies_container"> 
            <div className="card_case_studies">
              <div className="card_case_studies_header">
                <img src={dostIcon} className="icon_logos" alt="icon_dost" />
                <div className="card_case_studies_texts">
                  <h3> DOST Website Revamp </h3>
                  <p> Enhancing the Department of Science and Technology (DOST) Website as a Centralized Hub for Public Services </p>
                </div>
                <div className="trophy-tooltip-wrapper" style={{ position: "relative", display: "inline-block" }}>
                  <FontAwesomeIcon
                    icon={faTrophy}
                    style={{ color: "#FFD700", fontSize: "25px", margin: "25px", cursor: "pointer" }}
                    onMouseEnter={e => e.currentTarget.nextSibling.style.opacity = 1}
                    onMouseLeave={e => e.currentTarget.nextSibling.style.opacity = 0}
                  />
                  <span
                    className="trophy-tooltip"
                    style={{
                      position: "absolute",
                      bottom: "110%",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "#222",
                      color: "#FEB341",
                      padding: "8px 16px",
                      borderRadius: "6px",
                      whiteSpace: "nowrap",
                      fontSize: "0.95rem",
                      opacity: 0,
                      pointerEvents: "none",
                      transition: "opacity 0.2s"
                    }}
                  >
                    Top 5 finalist in UX University 2025: Shifting Tide
                  </span>
                </div>
              </div>
              <div className="card_case_studies_button">
                <button>
                  Read case study <FontAwesomeIcon className="icon_fontawesome" icon={faArrowRight} />
                </button>
              </div>
              <img src={dostMock} className="mock-ups" alt="mock-ups_dost" />
              <div className="card_case_studies_footer">
                <p> Technologies used: </p>
                <img src={figmaIcon} className="icon_logos_technologies" alt="icon_figma" />
              </div>
            </div>

            <div className="card_case_studies">
              <div className="card_case_studies_header">
                <img src={pricepulseIcon} className="icon_logos" alt="icon_pricepulse" />
                <div className="card_case_studies_texts">
                  <h3> Price Pulse PH </h3>
                  <p> A mobile app designed to help everyday Filipinos track and manage the rising costs of essential goods—now and in the future. </p>
                </div>
                <div className="trophy-tooltip-wrapper" style={{ position: "relative", display: "inline-block" }}>
                  <FontAwesomeIcon
                    icon={faTrophy}
                    style={{ color: "#FFD700", fontSize: "25px", margin: "25px", cursor: "pointer" }}
                    onMouseEnter={e => e.currentTarget.nextSibling.style.opacity = 1}
                    onMouseLeave={e => e.currentTarget.nextSibling.style.opacity = 0}
                  />
                  <span
                    className="trophy-tooltip"
                    style={{
                      position: "absolute",
                      bottom: "110%",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "#222",
                      color: "#FEB341",
                      padding: "8px 16px",
                      borderRadius: "6px",
                      whiteSpace: "nowrap",
                      fontSize: "0.95rem",
                      opacity: 0,
                      pointerEvents: "none",
                      transition: "opacity 0.2s"
                    }}
                  >
                    Top 10 Finalist on Ideathon 2025 at Software Engineering Day 2025
                  </span>
                </div>
              </div>
              <div className="card_case_studies_button">
                <button>
                  Read case study <FontAwesomeIcon className="icon_fontawesome" icon={faArrowRight} />
                </button>
              </div>
              <img src={pricepulseMock} className="mock-ups" alt="mock-ups_pricepulse" />
              <div className="card_case_studies_footer">
                <p> Technologies used: </p>
                <img src={figmaIcon} className="icon_logos_technologies" alt="icon_figma" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Concept Works Section */}
      <div className="section_concept_works">
        <h2> Concept Works </h2>
        <div className="section_cards_concept_works">
          <div className="card_concept_works">
            <img src={amwayMock} className="concept_works_banner" alt="mock-ups_amway" />
            <div className="card_concept_works_content">
              {/* Amway or the Highway */}
              <h3> Amway or the Highway </h3>
              <p> A board game that blends the classic gameplay mechanics of Monopoly with the dynamic world of Amway products. </p>
          </div>
          <div className="card_concept_works_lower"> 
            <a href="https://www.figma.com/proto/FkYnVlbRZNIPClKQFAI0gV/Hackfest-2024?page-id=0%3A1&node-id=171-97&viewport=-951%2C-1065%2C0.17&t=RejlmN4qBYYdto1S-1&scaling=min-zoom&starting-point-node-id=171%3A97&show-proto-sidebar=1" target="_blank" className="btn btn-primary card_concept_works_button">
              Live View <FontAwesomeIcon className="icon_fontawesome" icon={faArrowRight} />
            </a>
            <div className="card_concept_works_footer">
                <p> Technologies used: </p>
                <img src={figmaIcon} className="icon_logos_technologies" alt="icon_figma" />
            </div>
          </div>
          </div>   

          <div className="card_concept_works">
            <img src={toyrushMock} className="concept_works_banner" alt="mock-ups_amway" />
            <div className="card_concept_works_content">
              {/* Toy Rush! */}
              <h3> Toy Rush! </h3>
              <p> A game that will awaken your inner child for it transports you to a world of excitement and wonder! </p>
          </div>
          <div className="card_concept_works_lower"> 
            <a href="https://airaestur.itch.io/toy-rush" target="_blank" className="btn btn-primary card_concept_works_button">
              Live View <FontAwesomeIcon className="icon_fontawesome" icon={faArrowRight} />
            </a>
            <div className="card_concept_works_footer">
                <p> Technologies used: </p>
                <img src={csharpIcon} className="icon_logos_technologies" alt="icon_figma" />
                <img src={aiIcon} className="icon_logos_technologies" alt="icon_figma" />
            </div>
          </div>
          </div>  

          <div className="card_concept_works">
            <img src={gtaraMock} className="concept_works_banner" alt="mock-ups_amway" />
            <div className="card_concept_works_content">
              {/* G-Tara Na! */}
              <h3> G-Tara Na! </h3>
              <p> A Website which checks if the played chord of the guitarist or the user is correct or incorrect. </p>
          </div>
          <div className="card_concept_works_lower"> 
            <a href="https://aira-E.github.io/G-Tara-Na/" target="_blank" className="btn btn-primary card_concept_works_button">
              Live View <FontAwesomeIcon className="icon_fontawesome" icon={faArrowRight} />
            </a>
            <div className="card_concept_works_footer">
                <p> Technologies used: </p>
                <img src={htmlIcon} className="icon_logos_technologies" alt="icon_figma" />
                <img src={cssIcon} className="icon_logos_technologies" alt="icon_figma" />
                <img src={jsIcon} className="icon_logos_technologies" alt="icon_figma" />
            </div>
          </div>
          </div>  

          <div className="card_concept_works">
            <img src={fruitvendingMock} className="concept_works_banner" alt="mock-ups_amway" />
            <div className="card_concept_works_content">
              {/* Fruit Vending Machine */}
              <h3> Fruit Vending Machine </h3>
              <p> A Graphical User Interface that simulates the operation of a real-world vending machine where users can select and purchase fruits. </p>
          </div>
          <div className="card_concept_works_lower"> 
            <a href="https://github.com/aira-E/Fruit-Vending-Machine/" target="_blank" className="btn btn-primary card_concept_works_button">
              View Code <FontAwesomeIcon className="icon_fontawesome" icon={faArrowRight} />
            </a>
            <div className="card_concept_works_footer">
                <p> Technologies used: </p>
                <img src={pyIcon} className="icon_logos_technologies" alt="icon_figma" />
            </div>
          </div>
          </div>  
      </div>              

      {/* Contact Section */}         
      </div>
        <h2 className="contact_header"> Let's Connect! </h2>
        <div className="section_contact_container">
          <img src={qr} className="qr_code" alt="qr_code" />
          <div className="socials">
            <p>
              <FontAwesomeIcon icon={faEnvelope} style={{ color: "#FEB341", marginRight: "12px" }} />
              airaestur@gmail.com
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} style={{ color: "#FEB341", marginRight: "12px" }} />
              +639-6657-95845
            </p>
            <p>
              <FontAwesomeIcon icon={faLocationPin} style={{ color: "#FEB341", marginRight: "12px" }} />
              Manila, Philippines
            </p>
        </div>
      </div>

    </>
  );
}

export default App;
