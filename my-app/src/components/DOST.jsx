import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../App.css"; // Ensures styles are applied
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function DOST() {
  return (
    <div>
     <div className="casestudy_header">
      <div style={{ marginTop: "32px" }}>
        <iframe
          width="652"
          height="367"
          src="https://www.youtube.com/embed/_40X3xepU7Q"
          title="DOST Case Study Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
        <div className="banner"> 
          <h1> DOST Website Revamp </h1>
          <h3> The Department of Science and Technology (DOST) website is not just your ordinary government website; it serves as a central hub connecting 16 regional offices and 6 service institutes, each with its own separate website. While this decentralized structure allows different offices to manage their own content, it also creates navigation and other user experiences challenges </h3>
          <a
            href="https://www.figma.com/proto/FkYnVlbRZNIPClKQFAI0gV/Hackfest-2024?page-id=0%3A1&node-id=171-97&viewport=-951%2C-1065%2C0.17&t=RejlmN4qBYYdto1S-1&scaling=min-zoom&starting-point-node-id=171%3A97&show-proto-sidebar=1"
            target="_blank"
            className="btn btn-primary card_concept_works_button"
          >
            Figma prototype link <FontAwesomeIcon className="icon_fontawesome" icon={faArrowRight} />
          </a> 
        </div>
      </div>

      <div className="content">
          <h2> Project Background </h2>
          <p> The Department of Science and Technology (DOST) website serves as a central hub connecting 16
            regional offices and 6 service institutes, each with its own separate website. While this decentralized
            structure allows different offices to manage their own content, it also creates navigation and other user
            experience challenges. </p>
          <p> The website has the potential to be a powerful and accessible platform, but its current design and
              functionality limit its effectiveness. If its features were better optimized and tailored to user needs, the
              website could reach its full potential as a centralized and efficient digital hub for
              science and technology-related services </p>
          <h2> UX Solution Ideation </h2>
          <p> The SCAMPER method facilitates creative yet practical solutions for improving existing applications like the DOST website. It
              allows for impactful enhancements without requiring a complete redesign, aligning with government website template
              guidelines. </p>

          
          <div className="scamper">
            <h1> S </h1>
            <div>
              <h3> Implement an AI-Powered Virtual Assistant </h3>
              <p> Introduce an AI chatbot that provides instant responses to
                  common inquiries instead of a static FAQs section and Contact Us
                  page </p>
            </div>
          </div>

          <div className="scamper">
            <h1> C </h1>
            <div>
              <h3> Execute a New Design Architecture </h3>
              <p> Implement a new design architecture that consolidates redundant
                  sections of the website.</p>
            </div>
          </div>

          <div className="scamper">
            <h1> A </h1>
            <div>
              <h3> Integrate a Comprehensive Search Engine </h3>
              <p> Integrate a comprehensive search engine for the entire website and
                    for sections with extensive content.</p>
            </div>
          </div>

          <div className="scamper">
            <h1> M </h1>
            <div>
              <h3> Enhance Content Discovery Improve design that will help the user </h3>
              <p> Improve design that will help the user understand each section by
                  using context-aware call-to-action (CTA) buttons and infographics
                  instead of plain texts </p>
            </div>
          </div>

          <div className="scamper">
            <h1> P </h1>
            <div>
              <h3> Introduce an Online Complaint Submission System </h3>
              <p> Instead of providing only text-based instructions for submitting
                  complaints, introduce an online complaint submission system.</p>
            </div>
          </div>

          <div className="scamper">
            <h1> E </h1>
            <div>
              <h3> Reduce the Homepage and Navigation Bar Clutter </h3>
              <p> Remove less essential services from the landing page and quick links
                  to declutter the homepage and the other sections of the website.</p>
            </div>
          </div>

          <div className="scamper">
            <h1> R </h1>
            <div>
              <h3> Enforce User Accounts </h3>
              <p> Develop a user account system that identifies the user’s role within
                  a sector (e.g., scholar, researcher, educator, private citizen). That will
                  enable smart personalized content suggestions </p>
            </div>
          </div>          
          
      </div>


    </div>
  );
}