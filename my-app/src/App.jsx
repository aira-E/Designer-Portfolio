// src/App.jsx
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

// images import
import airaIcon from "./assets/icons/airaestur.png";
import dostIcon from "./assets/icons/dost.png";
import pricepulseIcon from "./assets/icons/pricepulse.png";

import figmaIcon from "./assets/icons/figma.png";
import aillustratorIcon from "./assets/icons/aillustrator.png";
import csharpIcon from "./assets/icons/csharp.png";
import unityIcon from "./assets/icons/unity.png";
import pythonIcon from "./assets/icons/python.png";

import skIcon from "./assets/icons/sk.png";
import fillpassIcon from "./assets/icons/filpass.jpg";
import angkasIcon from "./assets/icons/angkas.png";
import marvillIcon from "./assets/icons/marvill.png";

import dostMock from "./assets/mock-ups/dost.png";
import pricepulseMock from "./assets/mock-ups/pricepulse.png";
import amwayMock from "./assets/mock-ups/amway.jpg";
import toyrush from "./assets/mock-ups/toyrushgame.jpg";
import fruitvendingMock from "./assets/mock-ups/guivendingmachine.png";

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
        <p className="objectives">
          A selection of my most impactful and rewarding projects that demonstrate my ability to solve complex design challenges and deliver exceptional user experiences.
        </p>        
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

      <div className="section_concept works">
        <h2> Concept Works </h2>
        <p className="objectives">
          A collection of my personal design projects and experiments that showcase my creativity and skills as a designer.
        </p>

        <div className="section_cards_concept_works"> 
          <div className="card_concept_works">
            <div className="card_concept_works_image">
              <img src={amwayMock} className="mock-ups" alt="mock-ups_pricepulse" />
            </div>
            <div className="card_concept_works_header">
              <div className="card_concept_works_texts">
                <h3> Amway or the Highway </h3>
                <p> A board game that blends the classic gameplay mechanics of Monopoly with the dynamic world of Amway products. </p>
              </div>
              <FontAwesomeIcon icon={faTrophy} style={{ color: "#FFD700", fontSize: "25px", margin: "25px" }} />
            </div>
            <div className="card_concept_works_button">
              <button>
                Live View <FontAwesomeIcon className="icon_fontawesome" icon={faArrowRight} />
              </button>
            </div>
            <div className="card_case_studies_footer">
              <p> Technologies used: </p>
              <div>
                <img src={figmaIcon} className="icon_logos_technologies" alt="icon_figma" />
                <img src={aillustratorIcon} className="icon_logos_technologies" alt="icon_adobeillustrator" />
              </div>
            </div>
          </div>
          
          <div className="card_concept_works">
            <div className="card_concept_works_image">
              <img src={toyrush} className="mock-ups" alt="mock-ups_toyrush" />
            </div>
            <div className="card_concept_works_header">
              <div className="card_concept_works_texts">
                <h3> Toy Rush! </h3>
                <p> A game that will awaken your inner child for it transports you to a world of excitement and wonder!</p>
              </div>
              <FontAwesomeIcon icon={faTrophy} style={{ color: "#FFD700", fontSize: "25px", margin: "25px" }} />
            </div>
            <div className="card_concept_works_button">
              <button>
                Live View <FontAwesomeIcon className="icon_fontawesome" icon={faArrowRight} />
              </button>
            </div>
            <div className="card_case_studies_footer">
              <p> Technologies used: </p>
              <div>
                <img src={unityIcon} className="icon_logos_technologies" alt="icon_figma" />
                <img src={csharpIcon} className="icon_logos_technologies" alt="icon_c#" />
                <img src={aillustratorIcon} className="icon_logos_technologies" alt="icon_adobeillustrator" />
              </div>
            </div>
          </div>

          <div className="card_concept_works">
            <div className="card_concept_works_image">
              <img src={fruitvendingMock} className="mock-ups" alt="mock-ups_fruitvendingmachine" />
            </div>
            <div className="card_concept_works_header">
              <div className="card_concept_works_texts">
                <h3> Fruit Vending Machine </h3>
                <p> A Graphical User Interface that simulates the operation of a real-world vending machine where users can select and purchase fruits.</p>
              </div>
              <FontAwesomeIcon icon={faTrophy} style={{ color: "#FFD700", fontSize: "25px", margin: "25px" }} />
            </div>
            <div className="card_concept_works_button">
              <button>
                View Code <FontAwesomeIcon className="icon_fontawesome" icon={faArrowRight} />
              </button>
            </div>
            <div className="card_case_studies_footer">
              <p> Technologies used: </p>
              <div>
                <img src={pythonIcon} className="icon_logos_technologies" alt="icon_python" />
              </div>
            </div>
          </div>
        </div>
      </div>

<div className="section_journey">
  <h2> My Journey </h2>
  <div className="section_journey_container">
    <div className="section_journey_lists timeline">
      <div className="timeline_item">
        <div className="timeline_dot"></div>
        <div className="section_cards_journey">
          <p className="journey_duration"> Dec 2023 - Present </p>
          <div className="section_card_journey_contents">
            <img src={skIcon} className="icon_logos_journey" alt="icon_sk177" />
            <div className="section_card_journey_texts">
              <h3> Government Official </h3>
              <p> Sangguniang Kabataan Brgy. 177 </p>
            </div>
          </div>
        </div>
        <ul className="journey journey_story_sk">
          <li> Head committee of technology </li>
          <li> Project manager and proponent of Skbrgy177.com - The official website of the Sangguniang Kabataan 177 that creates a more accurate and fast transactions for the youth. </li>
        </ul>
      </div>
      <div className="timeline_item">
        <div className="timeline_dot"></div>
        <div className="section_cards_journey">
          <p className="journey_duration"> Jun 2025 - Aug 2025 </p>
          <div className="section_card_journey_contents">
            <img src={fillpassIcon} className="icon_logos_journey" alt="icon_filpass" />
            <div className="section_card_journey_texts">
              <h3> UI/UX Designer </h3>
              <p> FilPass (A company of Befied Group) • Internship </p>
            </div>
          </div>
        </div>
        <ul className="journey journey_story_filpass">
          <li> Improved and prototyped existing website designs </li>
          <li> Led comprehensive system documentation with features and flowcharts </li>
          <li> Designed UI screens and reusable UI components following company design standards </li>
          <li> Tested designs for WCAG accessibility compliance </li>
        </ul>
      </div>
      <div className="timeline_item">
        <div className="timeline_dot"></div>
        <div className="section_cards_journey">
          <p className="journey_duration"> Dec 2024 - Feb 2025 </p>
          <div className="section_card_journey_contents">
            <img src={dostIcon} className="icon_logos_journey" alt="icon_dost" />
            <div className="section_card_journey_texts">
              <h3> UI/UX Designer </h3>
              <p> Department of Science and Technology • Internship</p>
            </div>
          </div>
        </div>
        <ul className="journey journey_story_dost">
          <li> Revamped the centralized DOST website </li>
          <li> Optimized the information architecture </li>
          <li> Prototyped a comprehensive design proposal aligned with updated structure and user needs </li>
        </ul>
      </div>
      <div className="timeline_item">
        <div className="timeline_dot"></div>
        <div className="section_cards_journey">
          <p className="journey_duration"> Aug 2024 - Dec 2024 </p>
          <div className="section_card_journey_contents">
            <img src={angkasIcon} className="icon_logos_journey" alt="icon_angkas" />
            <div className="section_card_journey_texts">
              <h3> UX Researcher </h3>
              <p> Angkas • Internship</p>
            </div>
          </div>
        </div>
        <ul className="journey journey_story_angkas">
          <li> Conducted concept testing for features in both driver and customer applications </li>
          <li> Created competitor analysis reports on other MC taxi services in the Philippines </li>
          <li> Documented insights from FGDs, interviews, and stakeholder discussions </li>
          <li> Updated the customer journey map to reflect new app features and user behaviors </li>
          <li> Synthesized NPS data to evaluate customer satisfaction </li>
        </ul>
      </div>
      <div className="timeline_item">
        <div className="timeline_dot"></div>
        <div className="section_cards_journey">
          <p className="journey_duration"> Aug 2023 - Oct 2023 </p>
          <div className="section_card_journey_contents">
            <img src={marvillIcon} className="icon_logos_journey" alt="icon_marvill" />
            <div className="section_card_journey_texts">
              <h3> Frontend Developer </h3>
              <p> Marvill WebDev • Internship</p>
            </div>
          </div>
        </div>
        <ul className="journey journey_story_marvill">
          <li> Designed and developed reusable UI components for website implementation </li>
          <li> Produced high-fidelity website mockups </li>
          <li> Created motion design for the company’s promotional video </li>
        </ul>
      </div>
    </div>
  </div>
</div>
// ...existing code...

      <div className="section_contact">
        <h2> Let's Connect! </h2>

      </div>
    </>
  );
}

export default App;
