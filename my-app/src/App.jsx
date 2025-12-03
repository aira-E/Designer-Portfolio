// src/App.jsx
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import BrandingCarousel from './BrandingCarousel'; // Add this line
import RightDrawer from './RightDrawer';

 // Import logos
import airaIcon from "./assets/icons/airaestur.png";
import dostIcon from "./assets/icons/dost.png";
import pricepulseIcon from "./assets/icons/pricepulse.png";
import figmaIcon from "./assets/icons/figma.png";
import aiIcon from "./assets/icons/aillustrator.png";
import psIcon from "./assets/icons/ps.png";
import canvaIcon from "./assets/icons/canva.png";

import csharpIcon from "./assets/icons/csharp.png";
import htmlIcon from "./assets/icons/html.png";
import cssIcon from "./assets/icons/css.png";
import jsIcon from "./assets/icons/js.png";
import pyIcon from "./assets/icons/python.png";

//Import images
import qr from "./assets/icons/qr.png";
import mdb from "./assets/mock-ups/mdb.png";
import rl from "./assets/mock-ups/rl.png";


// Import mock-ups
import dostMock from "./assets/mock-ups/DOST.png";
import pricepulseMock from "./assets/mock-ups/pricepulse.png";
import amwayMock from "./assets/mock-ups/amway.jpg";  
import toyrushMock from "./assets/mock-ups/toyrushgame.jpg";  
import gtaraMock from "./assets/mock-ups/gtara.png";  
import fruitvendingMock from "./assets/mock-ups/guivendingmachine.png";  

// Import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faPhone, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import "./App.css";


// ---------- NEW: small helper component to avoid clipping issues ----------
function TrophyTooltip({ text }) {
  const iconRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState({ left: 0, top: 0 });

  const handleEnter = () => {
    const el = iconRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    // center horizontally and position just above the icon
    setPos({
      left: rect.left + rect.width / 2,
      top: rect.top, // we'll offset with transform in the tooltip style
    });
    setVisible(true);
  };

  const handleLeave = () => {
    setVisible(false);
  };

  return (
    <>
      <div style={{ display: "inline-block", position: "relative" }}>
        <FontAwesomeIcon
          ref={iconRef}
          icon={faTrophy}
          style={{
            color: "#FFD700",
            fontSize: "25px",
            margin: "25px",
            cursor: "pointer",
            position: "relative",
            zIndex: 1, // keep the icon clickable/visible
          }}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        />
      </div>

      {/* Render tooltip as fixed so it can't be clipped by parent overflow/stacking contexts */}
      {visible && (
        <div
          role="tooltip"
          style={{
            position: "fixed",
            left: `${pos.left}px`,
            top: `${pos.top}px`,
            transform: "translate(-50%, -110%)", // center horizontally, lift above icon
            background: "#222",
            color: "#FEB341",
            padding: "8px 16px",
            borderRadius: "6px",
            whiteSpace: "nowrap",
            fontSize: "0.95rem",
            pointerEvents: "none",
            transition: "opacity 0.15s",
            zIndex: 99999,
            boxShadow: "0 6px 18px rgba(0,0,0,0.3)",
            fontFamily: "Arial, sans-serif",
            opacity: 1,
          }}
        >
          {text}
        </div>
      )}
    </>
  );
}
// ------------------------------------------------------------------------


function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); 
  const [isCertDrawerOpen, setIsCertDrawerOpen] = useState(false); 
  const [isProjectDrawerOpen, setIsProjDrawerOpen] = useState(false); 
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <div className="section_hero">
        <div className="container_hero">
          <img src={airaIcon} className="icon_airaestur" alt="icon_airaestur" />
          <div className="section_hero_texts">
            <h1>Behind the Screens</h1>
                <h3 className="introduction">
                  I’m <span style={{ color: "#FEB341" }}>Aira</span>, a 
                  <div className="scrolling-text-container">
                    <div className="scrolling-text-wrapper">
                      <div className="scrolling-text-item">UI/UX</div>
                      <div className="scrolling-text-item">Product</div>
                    </div>
                  </div>
                  Designer based in the Philippines. I’m passionate about crafting user-centric and intuitive designs that balance functionality with visual storytelling.
                </h3>
           {/* <div className="content">
                <h4> Outside of UX design, I’m also a freelance visual artist and founder of RepubLikha PH, where I’ve completed 50+ graphical and software design projects ranging from brand identities to digital interfaces. This experience has strengthened my skills in client collaboration, project management, and creative problem-solving—qualities I bring into every product I design. </h4>
            </div> */}
          </div>

        </div>

       <div className="container_data">
        <div 
            className="card_data clickable" 
            onClick={() => setIsDrawerOpen(true)} >
            <h2> 5 </h2>   
            <p> Professional Experience </p>
        </div>

        <div 
            className="card_data clickable" 
            onClick={() => setIsProjDrawerOpen(true)} >
            <h2> 20+ </h2>   
            <p> Diverse Projects </p>
        </div>

        <div 
            className="card_data clickable" 
            onClick={() => setIsCertDrawerOpen(true)} >
            <h2> 6 </h2>   
            <p> Certifications </p>
        </div>

        </div>
      </div>


        <div className="section_case_studies">
        <div className="section_cards_case_studies">
            <h2> Case Studies </h2>
            <div className="card_case_studies_container">

            {/* 🟡 First card — DOST */}
            <div className="card_case_studies_content">
                <div className="card_case_studies_banner">
                <p><span style={{ color: "#FEB341" }}>Role: </span> UX Researcher, UI/UX Designer</p>
                </div>
                <div className="card_case_studies">
                <div className="card_case_studies_header">
                    <img src={dostIcon} className="icon_logos" alt="icon_dost" />
                    <div className="card_case_studies_texts">
                    <h3>DOST Website Revamp</h3>
                    <p>Enhancing the Department of Science and Technology (DOST) Website as a Centralized Hub for Public Services</p>
                    </div>

                    {/* REPLACED: trophy tooltip now uses fixed positioning to avoid clipping */}
                    <TrophyTooltip text="Top 5 finalist in UX University 2025: Shifting Tide" />

                </div>

                <div className="card_case_studies_button">
                    <button
                    onClick={() => {
                        navigate("/dost");
                        window.scrollTo(0, 0);
                    }}>
                    Read case study <FontAwesomeIcon className="icon_fontawesome" icon={faArrowRight} />
                    </button>
                </div>

                <img src={dostMock} className="mock-ups" alt="mock-ups_dost" />
                <div className="card_case_studies_footer">
                    <img src={figmaIcon} className="icon_logos_technologies" alt="icon_figma" />
                </div>
                </div>
            </div>

            {/* 🟢 Second card — Price Pulse PH */}
            <div className="card_case_studies_content">
                <div className="card_case_studies_banner">
                <p><span style={{ color: "#FEB341" }}>Role: </span> Product Designer, UI/UX Designer</p>
                </div>
                <div className="card_case_studies">
                <div className="card_case_studies_header">
                    <img src={pricepulseIcon} className="icon_logos" alt="icon_pricepulse" />
                    <div className="card_case_studies_texts">
                    <h3>Price Pulse PH</h3>
                    <p>A mobile app designed to help everyday Filipinos track and manage the rising costs of essential goods—now and in the future.</p>
                    </div>

                    {/* REPLACED: trophy tooltip now uses fixed positioning to avoid clipping */}
                    <TrophyTooltip text="Top 10 Finalist on Ideathon 2025 at Software Engineering Day 2025" />

                </div>

                <div className="card_case_studies_button">
                                    <button
                    onClick={() => {
                        navigate("/pricepulse");
                        window.scrollTo(0, 0);
                    }}>
                    Read case study <FontAwesomeIcon className="icon_fontawesome" icon={faArrowRight} />
                    </button>
                </div>

                <img src={pricepulseMock} className="mock-ups" alt="mock-ups_pricepulse" />
                <div className="card_case_studies_footer">
                    <img src={figmaIcon} className="icon_logos_technologies" alt="icon_figma" />
                </div>
                </div>
            </div>

            </div>
        </div>
        </div>


      <div className="section_concept_works">
        <h2> Concept Works </h2>
        <div className="section_cards_concept_works">
          <div className="card_concept_works">
                <div className="card_concept_works_banner">
                 <p> <span style={{ color: "#FEB341" }}>Role: </span> Product Designer, UI/UX Designer </p>
                </div>  
            <img src={amwayMock} className="concept_works_banner" alt="mock-ups_amway" />
            <div className="card_concept_works_content">
              {/* Amway or the Highway */}
              <h3> Amway or the Highway </h3>
              <p> A board game that blends the classic gameplay mechanics of Monopoly with the dynamic world of Amway products. </p>
            </div>
            <div className="card_concept_works_lower"> 
              <a  href="https://www.figma.com/proto/FkYnVlbRZNIPClKQFAI0gV/Hackfest-2024?page-id=0%3A1&node-id=171-97&viewport=-951%2C-1065%2C0.17&t=RejlmN4qBYYdto1S-1&scaling=min-zoom&starting-point-node-id=171%3A97&show-proto-sidebar=1" target="_blank" className="btn btn-primary card_concept_works_button">
                Live View <FontAwesomeIcon className="icon_fontawesome" icon={faArrowRight} />
              </a>
              <div className="card_cw_footer ">
                  {/*  <p> Technologies used: </p> */}
                  <img src={figmaIcon} className="icon_logos_technologies" alt="icon_figma" />
              </div>
            </div>
            </div>   

            <div className="card_concept_works">
            <div className="card_concept_works_banner">
               <p> <span style={{ color: "#FEB341" }}>Role: </span> UI/UX Designer, Sound Designer </p>
            </div>  
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
              <div className="card_cw_footer ">
                  {/*  <p> Technologies used: </p> */}
                  <img src={csharpIcon} className="icon_logos_technologies" alt="icon_figma" />
                  <img src={aiIcon} className="icon_logos_technologies" alt="icon_figma" />
              </div>
            </div>
            </div>  

            <div className="card_concept_works">
            <div className="card_concept_works_banner">
               <p> <span style={{ color: "#FEB341" }}>Role: </span> UI/UX Designer, Front-end Developer </p>
            </div>  
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
            <div className="card_cw_footer ">
                {/*  <p> Technologies used: </p> */}
                <img src={htmlIcon} className="icon_logos_technologies" alt="icon_figma" />
                <img src={cssIcon} className="icon_logos_technologies" alt="icon_figma" />
                <img src={jsIcon} className="icon_logos_technologies" alt="icon_figma" />
            </div>
          </div>
          </div>  

          <div className="card_concept_works">
            <div className="card_concept_works_banner">
               <p> <span style={{ color: "#FEB341" }}>Role: </span> UI/UX Designer, Front-end Developer </p>
            </div>  
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
              <div className="card_cw_footer ">
                  {/*  <p> Technologies used: </p> */}
                  <img src={pyIcon} className="icon_logos_technologies" alt="icon_figma" />
              </div>
            </div>
          </div>  
        </div>        
      </div> 

            
            <BrandingCarousel 
                mdb={mdb} 
                rl={rl} 
                figmaIcon={figmaIcon} 
                aiIcon={aiIcon} 
                psIcon={psIcon} 
                canvaIcon={canvaIcon} 
            />
            

      {/* Contact Section (CORRECTED STRUCTURE) */}         
      <div className="section_contact"> {/* Added the section wrapper div */}
        <h2 className="contact_header"> Let's Connect! </h2>
        <div className="section_contact_container">
          <img
            src={qr}
            className="qr_code"
            alt="qr_code"
            onClick={() => window.open("https://linktr.ee/airaestur", "_blank")}
            style={{ cursor: "pointer" }}
          />

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
      </div> {/* Closes section_contact */}
  {/* ... (rest of your App content) ... */}


    <RightDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)}
    >
      
        <h2>Professional Experience Timeline</h2>

        <div className="experience-item">
            <h3> UI/UX Designer • Intern </h3>
            <h4> Webcast Technologies Inc. </h4> 
            <p>  Sep 2025 - Nov 2025 </p>
        </div>
        
        <div className="experience-item">
            <h3> UI/UX Designer • Trainee </h3>
            <h4> FilPass (A company of Befied Group) </h4> 
            <p>  Jun 2025 - Aug 2025 </p>
        </div>

        <div className="experience-item">
            <h3> UI/UX Designer • Intern </h3>
            <h4> Department of Science and Technology </h4> 
            <p>  Dec 2024 - Feb 2025 </p>
        </div>

        <div className="experience-item">
            <h3> UX Researcher • Intern </h3>
            <h4> Angkas </h4> 
            <p>  Aug 2024 - Dec 2024 </p>
        </div>

        <div className="experience-item">
            <h3> Front-end Developer • Intern </h3>
            <h4> Marvill Web Development </h4> 
            <p>  Aug 2023 - Oct 2023 </p>
        </div>
        
    </RightDrawer>

    <RightDrawer 
        isOpen={isCertDrawerOpen}             // <-- Uses the new state
        onClose={() => setIsCertDrawerOpen(false)} // <-- Uses the new setter
    >
        <h2> Certifications</h2>
        <div className="experience-item">
            <h3> Figma, Sketch & Miro for UX Design Professional Certificate </h3>
            <h4> Coursera </h4> 
            <p>  November 2025 </p>
        </div>

        <div className="experience-item">
            <h3> UX+ Conference 2025 </h3>
            <h4> UX+ </h4> 
            <p>  Sep 2025 </p>
        </div>

        <div className="experience-item">
            <h3> Design Psychology: Master the Art and Science of UX Design </h3>
            <h4> LinkedIn </h4> 
            <p>  Aug 2025 </p>
        </div>

        <div className="experience-item">
            <h3> Developing Designs for User Experience </h3>
            <h4> TESDA: Technical Education and Skills Development Authority </h4> 
            <p>  Feb 2025 </p>
        </div>

        <div className="experience-item">
            <h3> Developing Designs for User Interface </h3>
            <h4> TESDA: Technical Education and Skills Development Authority </h4> 
            <p>  Jan 2025 </p>
        </div>

        <div className="experience-item">
            <h3> Career Service Professional Eligible </h3>
            <h4> Civil Service Commission </h4> 
            <p>  Mar 2023 </p>
        </div>

        
    </RightDrawer>

    <RightDrawer 
        isOpen={isProjectDrawerOpen}             // <-- Uses the new state
        onClose={() => setIsProjDrawerOpen(false)} // <-- Uses the new setter
    >
          <h2> Other Project Compilations </h2>
          <div className="experience-item">
              <h3> Programming and Logic Design</h3>
              <p>
                  <a href="https://github.com/aira-E/Programming-and-Logic-Design-Project-Compilation" target="_blank" rel="noopener noreferrer">
                      Github Link
                  </a>
              </p>
          </div>

          <div className="experience-item">
              <h3> Data Structures Algorithm </h3>
              <p>
                  <a href="https://github.com/aira-E/Data-Structures-Algorithm-Project-Compilation" target="_blank" rel="noopener noreferrer">
                      Github Link
                  </a>
              </p>
          </div>

          <div className="experience-item">
              <h3> Website Development </h3>
              <p>
                  <a href="https://github.com/aira-E/Website-Development-Project-Compilation" target="_blank" rel="noopener noreferrer">
                      Github Link
                  </a>
              </p>
          </div>

          <div className="experience-item">
              <h3> Website-and-Mobile-System-Project-Compilation </h3>
              <p>
                  <a href="https://github.com/aira-E/Website-and-Mobile-System-Project-Compilation" target="_blank" rel="noopener noreferrer">
                      Github Link
                  </a>
              </p>
          </div>

          <div className="experience-item">
              <h3> Photography-Project-Compilation</h3>
              <p>
                  <a href="https://www.behance.net/airaestur/projects" target="_blank" rel="noopener noreferrer">
                      Behance Link
                  </a>
              </p>
          </div>

          <div className="experience-item">
              <h3> RepubLikha PH - SK Logo Series</h3>
              <p>
                  <a href="https://ph.pinterest.com/republikha_ph/republikha-ph-sk-logos-series/" target="_blank" rel="noopener noreferrer">
                      Pinterest Link
                  </a>
              </p>
          </div>

        
    </RightDrawer>

    </>
  );
}

export default App;
