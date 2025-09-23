// src/App.jsx
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

// images import
import airaIcon from "./assets/icons/airaestur.png";
import dostIcon from "./assets/icons/dost.png";
import pricepulseIcon from "./assets/icons/pricepulse.png";
import figmaIcon from "./assets/icons/figma.png";
import dostMock from "./assets/mock-ups/dost.png";
import pricepulseMock from "./assets/mock-ups/pricepulse.png";


// icons import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="section_hero">
        <img src={airaIcon} className="icon_airaestur" alt="icon_airaestur" />
        <div className="section_hero_texts">
          <h1>Behind the Screens</h1>
          <p className="objectives">
          </p>
        </div>
      </div>

      <div className="section_case_studies">
        <h2> Case Studies </h2>

        <div className="section_cards_case_studies"> 
          <div className="card_case_studies">
            <div className="card_case_studies_header">
              <img src={dostIcon} className="icon_logos" alt="icon_dost" />
              <div className="card_case_studies_texts">
                <h3> DOST Website Revamp </h3>
                <p> Enhancing the Department of Science and Technology (DOST) Website as a Centralized Hub for Public Services </p>
              </div>
              <FontAwesomeIcon icon={faTrophy} style={{ color: "#FFD700", fontSize: "25px", margin: "25px" }} />
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
              <FontAwesomeIcon icon={faTrophy} style={{ color: "#FFD700", fontSize: "25px", margin: "25px" }} />
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
    </>
  );
}

export default App;
