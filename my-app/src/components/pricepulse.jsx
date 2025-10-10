import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function PricePulse() {
  return (
    <div className="DOST_casestudy">
     <div className="casestudy_header">
      <div style={{ marginTop: "32px" }}>
        <iframe
          width="652"
          height="367"
          src="https://www.youtube.com/embed/S-w1xrbS4iY?autoplay=1&controls=0"          title="DOST Case Study Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; loop=1"
          allowFullScreen
        ></iframe>
      </div>
        <div className="banner"> 
          <h1> Price Pulse PH </h1>
          <p> The Department of Science and Technology (DOST) website is not just your ordinary government website; it serves as a central hub connecting 16 regional offices and 6 service institutes, each with its own separate website. While this decentralized structure allows different offices to manage their own content, it also creates navigation and other user experiences challenges </p>
          <a classname= "figma_dost_btn"
            href= "https://www.figma.com/proto/C1NQvbSVUT0wNbucFIoSVJ/Price-Pulse-PH?page-id=0%3A1&node-id=86-895&p=f&viewport=470%2C393%2C0.19&t=N4mtnzX42womFXDT-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=86%3A895"
            target="_blank"
            className="btn btn-primary card_concept_works_button">
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
            <li> Designed for consumers, vendors, and local government use  </li>
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