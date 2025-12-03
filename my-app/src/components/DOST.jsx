import React, { useEffect, useState } from "react";
// 1. Import useNavigate for routing
import { useNavigate } from "react-router-dom"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import IAExisting from "../assets/mock-ups/IA-Existing.png";
import IAUpdated from "../assets/mock-ups/IA-Updated.png";

import JourneyMap1 from "../assets/mock-ups/JourneyMap1.png";
import JourneyMap2 from "../assets/mock-ups/JourneyMap2.png";

import QualiFindings2 from "../assets/mock-ups/quali-findings2.png";
import QualiFindings3 from "../assets/mock-ups/quali-findings3.png";

import Personas from "../assets/mock-ups/personas.png";
import ProtoPersonas from "../assets/mock-ups/proto-personas.png";

import Rootcause from "../assets/mock-ups/root.png";
import Features from "../assets/mock-ups/features.png";
import UserFeedback from "../assets/mock-ups/user-feedback.png";
import Conclusion from "../assets/mock-ups/conclusion.png";

import Scholars from "../assets/mock-ups/character-scholar.png";
import Researchers from "../assets/mock-ups/character-researcher.png";
import PrivateCitizens from "../assets/mock-ups/character-private-citizen.png";
import Educators from "../assets/mock-ups/character-educator.png";
import Scientists from "../assets/mock-ups/character-scientist.png";

import Performance from "../assets/mock-ups/metrics-performance.png";
import Accessibility from "../assets/mock-ups/metrics-accessibility.png";
import BestPractice from "../assets/mock-ups/metrics-best-practice.png";
import SEO from "../assets/mock-ups/metrics-seo.png";

import AI from "../assets/mock-ups/DOST-screens/ai.png"
import Autofill from "../assets/mock-ups/DOST-screens/auto-fill.png"
import Recommendation from "../assets/mock-ups/DOST-screens/recco.png"
import Services from "../assets/mock-ups/DOST-screens/services.png"

// 2. Import both faArrowRight and faArrowLeft for the back button
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons"; 

export default function DOST() {
    // 3. Initialize the navigate function
    const navigate = useNavigate();

    // 4. Define the click handler to go back to the homepage ("/")
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
        <div className="DOST_casestudy">
            
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
                        src="https://www.youtube.com/embed/_40X3xepU7Q?autoplay=1&controls=0"
                        title="DOST Case Study Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; loop=1"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="banner"> 
                    <h1> DOST Website Revamp </h1>
                    <p> The Department of Science and Technology (DOST) website is not just your ordinary government website; it serves as a central hub connecting 16 regional offices and 6 service institutes, each with its own separate website. While this decentralized structure allows different offices to manage their own content, it also creates navigation and other user experiences challenges </p>
                    <a
                        href="https://www.figma.com/proto/a24EEJXPrbTNl6SKsy2ZyE/DOST-Website--UX-University-2025-?page-id=0%3A1&node-id=169-30&p=f&viewport=36%2C238%2C0.02&t=HKVl3CBw9iU5GWRy-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=169%3A30&show-proto-sidebar=1"
                        target="_blank"
                        // COMBINED all desired classes into a single string
                        className="figma_dost_btn btn btn-primary card_concept_works_button"
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
            
            {/* I. Project Overview and Background */}
            <div className="content">
                <h2> I. Project Overview </h2>
            {/*   <div className="content_specific">
                    <h3> Problem Statement</h3>
                    <p> The Department of Science and Technology (DOST) website serves as a central hub connecting 16
                        regional offices and 6 service institutes, each with its own separate website. While this decentralized
                        structure allows different offices to manage their own content, it also creates navigation and other user
                        experience challenges. </p>
                    <p> The website has the potential to be a powerful and accessible platform, but its current design and
                        functionality limit its effectiveness. If its features were better optimized and tailored to user needs, the
                        website could reach its full potential as a centralized and efficient digital hub for
                        science and technology-related services </p>
                </div> */}
                
                <div className="content_specific"> 
                    <h3> The Problem </h3>
                    <p> The existing structure leads to a fragmented UI, inconsistent design, and disorganized content. Users struggle to locate services efficiently, leading to frustration, increased reliance on customer support, and high abandonment rates </p>
                    <div className="content_specific">
                        <h4> Root Cause Analysis </h4>
                        <div className="root-cause_imgs">
                            <img src={Rootcause} className="Personas" alt="Personas" />
                        </div>
                        <div className="content_specific">
                        <h4> Current State Metrics </h4>
                        <p> As of March 02, 2025 | Source: Lighthouse Audit </p>
                        <div className="metrics-container">
                            <div className="metrics"> 
                                <img src={Performance} className="metrics-img" alt="Performance" />
                                <h4> Performance </h4>
                            </div>
                            <div className="metrics"> 
                                <img src={Accessibility} className="metrics-img" alt="Performance" />
                                <h4> Accessibility </h4>
                            </div>
                            <div className="metrics"> 
                                <img src={BestPractice} className="metrics-img" alt="Performance" />
                                <h4> Best practice </h4>
                            </div>
                            <div className="metrics"> 
                                <img src={SEO} className="metrics-img" alt="Performance" />
                                <h4> SEO </h4>
                            </div>
                        </div>
                        <p> The decentralized structure of the DOST website results in a fragmented UI, inconsistent branding, disorganized content, and complex navigation. </p>
                        <p> Because of this, users face redundant pages, unclear categorization, and excessive clicks to access key services, leading to frustration, higher abandonment rates, and increased reliance on customer support. </p>
                        <p> These issues negatively impact Performance (58), Accessibility (77), and SEO (75), reducing overall user engagement and efficiency. </p>
                        </div>               
                    </div>
                </div>
                
                <div className="content_specific"> 
                    <h3> The Proposed Solution: A centralized service hub  </h3> 
                    <p> By identifying and understanding users, the DOST website can implement personalized user experiences, such as user accounts, to enhance engagement and streamline interactions. This insight-driven approach will result into the optimization of the website’s layout, branding, and functionality, ensuring a seamless, intuitive, and efficient centralized digital hub that could effectively serves its diverse audience.</p>
                    
                <div className="content_specific">  
                    <div className="screen_imgs_container">    
                        <div className="DOSTscreen_imgs">
                            <img src={AI} className="Screen" alt="AI Chatbot Modal" />
                            <p> Tuklas AI Chatbot </p>
                        </div> 
                        <div className="DOSTscreen_imgs">
                            <img src={Autofill} className="Screen" alt="Form Page" />
                            <p> Auto-fill feature on forms </p>
                        </div>                                                                        
                    </div>
                    <div className="screen_imgs_container">
                        <div className="DOSTscreen_imgs">
                            <img src={Recommendation} className="Screen" alt="Profile Page" />
                            <p> User Account for Personalized Contents </p>
                        </div> 
                        <div className="DOSTscreen_imgs">
                            <img src={Services} className="Screen" alt="Services Page" />
                            <p> In web application system  </p>
                        </div>  
                    </div>
                </div>
                </div>                            
            </div>

            {/* II. UX Research & Synthesis */}
            <div className="content">
                <h2> II. UX Research </h2>
                <div className="content_specific">
                    <h3> Research Objectives </h3>
                    <div className="smart">
                        <h1 className="content_smart"> S </h1>
                        <div>
                            <h4> Specific </h4>
                            <p> Improve website navigation for seamless access to information and services, establish a unified
                                design, and enhance usability while maintaining functionality. Implement a user-centered experience to
                                boost engagement.</p>
                        </div>
                    </div>
                    <div className="smart">
                        <h1 className="content_smart"> M </h1>
                        <div>
                            <h4> Measurable </h4>
                            <p> Track success through user task completion rate and positive user feedback.</p>
                        </div>
                    </div>
                    <div className="smart">
                        <h1 className="content_smart"> A</h1>
                        <div>
                            <h4> Achievable </h4>
                            <p> Leverage existing structures and UX/UI best practices, using an iterative development approach informed by user feedback. </p>
                        </div>
                    </div>
                    <div className="smart">
                        <h1 className="content_smart"> R </h1>
                        <div>
                            <h4> Relevant </h4>
                            <p> Directly addresses navigation issues, fragmented design, and low engagement to enhance accessibility and user satisfaction.</p>
                        </div>
                    </div>
                    <div className="smart">
                        <h1 className="content_smart"> T </h1>
                        <div>
                            <h4> Time-bound </h4>
                            <p> Phased execution—research and prototyping within a week, hypothetically followed by six months of development and testing, with full implementation within a year.</p>
                        </div>
                    </div>
                </div>                
                <div className="content_specific">
                    <h3> Target Audience </h3>
                    <p> The following groups will benefit the most from the DOST website: </p>
                    <div className="target_audience">
                        <img src={Scholars} className="character" alt="Scholars" />
                        <div>
                            <h4> Scholars </h4>
                            <p> Access to research grants, scholarships, and academic resources.</p>
                        </div>
                    </div>
                    <div className="target_audience">
                        <img src={Researchers} className="character" alt="Scholars" />
                        <div>
                            <h4> Researchers </h4>
                            <p> Streamlined access to scientific data, funding opportunities, and collaboration tools </p>
                        </div>
                    </div> 
                    <div className="target_audience">
                        <img src={PrivateCitizens} className="character" alt="Scholars" />
                        <div>
                            <h4> Private Citizens </h4>
                            <p> Information on government programs, funding assistance, and scientific initiatives. </p>
                        </div>
                    </div> 
                    <div className="target_audience">
                        <img src={Educators} className="character" alt="Scholars" />
                        <div>
                            <h4> Educators </h4>
                            <p> Teaching materials, training programs, and science education resources. </p>
                        </div>
                    </div> 
                    <div className="target_audience">
                        <img src={Scientists} className="character" alt="Scholars" />
                        <div>
                            <h4> Scientists </h4>
                            <p> Research publications, funding programs, and networking opportunities </p>
                        </div>
                    </div>
                    <p> Sample size: 10-15 participants with 2-3 representative per sector will have a strong and acceptable data feedback for the website </p>
                </div>
                <div className="content_specific">
                    <h3> Proto-Personas: Pain Points </h3>

                    <div className="content_specific"> 
                        <p> The research included five groups of person: scholars, researchers, private citizens, educators, and scientists.
                            But in this example, the researcher will deep dive on the role of scholars or researches with their preferences in navigating the DOST Website, 
                            since according to a study (College student Web use, perceptions of information credibility, and verification behavior, 2003) students has high dependency on the internet on both general and academic aspects 

                            According to the same research, students have high verification efforts, they perceive a credible information across internet browsing and
                            having high number of resources will help them in the academe </p>
                    </div>
                    <div className="persona_imgs">
                        <img src={Personas} className="Personas" alt="Personas" />
                    </div>
                    <div className="persona_imgs">
                        <img src={ProtoPersonas} className="Proto-Personas" alt="Proto-Personas" />
                    </div>                    
                </div>
            </div>

            {/* III. Methodology & Testing Approach */}
            <div className="content">
                <h2> III. Methodology & Testing Approach </h2>
                <div className="content_specific">
                    <h3> Research Methods </h3>
                    <p> These methods are cost-effective, data-driven, and adaptable within the constraints of government
                        website development. They ensure incremental improvements without requiring a complete overhaul,
                        aligning with usability goals while respecting budget, time, and policy limitations </p>
                    <div> 
                        <ul>
                        <li>
                            <h4>A/B Testing</h4>
                            <p>
                            The research will compare the original and revamped designs to determine which
                            provides a better user experience, revealing insights on navigation, engagement, and task efficiency to
                            guide further improvements.
                            </p>
                        </li>
                        <li>
                            <h4>Survey</h4>
                            <p>
                            The research will gather direct user feedback on the overall design, uncovering
                            preferences, frustrations, and suggestions to drive continuous improvements while keeping the website
                            aligned with user needs.
                            </p>
                        </li>
                        <li>
                            <h4>Usability Testing</h4>
                            <p>
                            The research will observe users interacting with the revamped design to identify
                            usability issues and areas for enhancement, ensuring the website is intuitive and meets user expectations.
                            </p>
                        </li>
                        </ul>
                    </div>
                </div>
                <div className="content_specific">
                    <h3> Usability Testing Approach </h3>
                    <p> The researcher used both moderated and unmoderated testing. </p>
                    <ul>
                        <li> Unmoderated testing was applied to task-based activities, allowing users to explore both websites freely while the researcher observed their behavior. </li>
                        <li> Moderated testing was used when introducing new features (personal account, auto-fill, AI chatbot), as users were unfamiliar with the proposed design. </li>
                    </ul>
                    <p> Participants were balanced between remote and in-person setups: </p>
                    <ul>
                        <li> 2 remote users (affiliated with DOST) were assumed to be more familiar with the site. </li>
                        <li> 2 in-person users (not affiliated with DOST) used their own devices. </li>
                    </ul>
                    <p> Observing them helped capture first-time reactions and provided opportunities for guidance when needed. </p> 
                </div>
                <div className="content_specific">
                    <h3> Sampling Method </h3>
                    <p> The researcher intentionally selected 2 DOST-affiliated participants (e.g., scholars, innovators) as they represent the platform's primary users. Additionally, 2 non-DOST participants (e.g., educator, government employee) were included to capture perspectives from potential users who may benefit from the services. </p>
                    <p> This purposive sampling approach ensures relevance to the website’s intended use cases and user groups.</p>

                </div> 
                <div className="content_specific">
                    <h3> Key Tasks for Testing </h3>
                    <ol>
                        <li> Search for available scholarships and view details on how to apply. And apply if applicable </li>
                        <li> Explore startup & innovation support, and apply if possible </li>
                        <li> File a complaint and explore general public services. </li>
                        <li>Search and dowload for available resources </li>
                    </ol>
                </div>
            </div>

            {/* IV. UX Solution Ideation & Design */}
            <div className="content">
                <h2> IV. UX Solution Ideation & Design </h2>
                <div className="content_specific">
                    <h3> Ideation Framework </h3>
                    <div className="content">
                        <div className="scamper">
                            <h1 className="content_scamper"> S </h1>
                            <div>
                                <h4> Implement an AI-Powered Virtual Assistant </h4>
                                <p> Introduce an AI chatbot that provides instant responses to
                                    common inquiries instead of a static FAQs section and Contact Us
                                    page </p>
                            </div>
                        </div>

                        <div className="scamper">
                            <h1 className="content_scamper"> C </h1>
                            <div>
                                <h4> Execute a New Design Architecture </h4>
                                <p> Implement a new design architecture that consolidates redundant
                                    sections of the website.</p>
                            </div>
                        </div>
                        <div className="scamper-imgs">
                            <img src={IAExisting} className="IA" alt="IA Existing" />
                            <img src={IAUpdated} className="IA" alt="IA Updated" />
                        </div>
                        
                        <div className="scamper">
                            <h1 className="content_scamper"> A </h1>
                            <div>
                                <h4> Integrate a Comprehensive Search Engine </h4>
                                <p> Integrate a comprehensive search engine for the entire website and
                                    for sections with extensive content.</p>
                            </div>
                        </div>

                        <div className="scamper">
                            <h1 className="content_scamper"> M </h1>
                            <div>
                                <h4> Enhance Content Discovery Improve design that will help the user </h4>
                                <p> Improve design that will help the user understand each section by
                                    using context-aware call-to-action (CTA) buttons and infographics
                                    instead of plain texts </p>
                            </div>
                        </div>

                        <div className="scamper">
                            <h1 className="content_scamper"> P </h1>
                            <div>
                                <h4> Introduce an Online Complaint Submission System </h4>
                                <p> Instead of providing only text-based instructions for submitting
                                    complaints, introduce an online complaint submission system.</p>
                            </div>
                        </div>

                        <div className="scamper">
                            <h1 className="content_scamper"> E </h1>
                            <div>
                                <h4> Reduce the Homepage and Navigation Bar Clutter </h4>
                                <p> Remove less essential services from the landing page and quick links
                                    to declutter the homepage and the other sections of the website.</p>
                            </div>
                        </div>

                        <div className="scamper">
                            <h1 className="content_scamper"> R </h1>
                            <div>
                                <h4> Enforce User Accounts </h4>
                                <p> Develop a user account system that identifies the user’s role within
                                    a sector (e.g., scholar, researcher, educator, private citizen). That will
                                    enable smart personalized content suggestions </p>
                            </div>
                        </div> 
                        
                    </div>
                </div>
                <div className="content_specific">
                    <h3> Digital Solution </h3>
                    <div className="content_specific">
                        <h4> Centralized Hub for DOST Services </h4>
                            <p> This is a seamless and intuitive website that consolidates the 16 regional offices and 6 service institutes into a single, cohesive platform under a standardized digital experience. </p>
                            <p> The centralized hub will streamline the user experience by proper website design, including clear information architecture (IA), content segmentation, and intuitive navigation, ensuring that users can efficiently find and utilize resources.  </p>
                            <p> These enhancements will improve the issues identified in the Lighthouse to optimize performance, accessibility, best practices, and SEO, leading to a more efficient and user-friendly experience.</p>                    
                    </div>
                    <div className="content_specific"> 
                        <h4> Core features </h4>
                            <div className="features_imgs">
                                <img src={Features} className="Features" alt="features" />
                            </div>    
                    </div>                
                </div>
            </div>

            {/* V. Validation, Results, & Conclusion */}
            <div className="content">
                <h2>V. Validation, Results, & Conclusion</h2>
                <div className="content_specific">
                    <h3> User Behavior </h3>
                        <div className="content_specific">
                        <div className="userbehavior-imgs">
                                <img src={JourneyMap1} className="JourneyMap" alt="JourneyMap" />
                                <img src={JourneyMap2} className="JourneyMap" alt="JourneyMap" />
                            </div>
                        </div>
                <div className="content_specific"> 
                    <p> With the help of user behavior map, the test concludes that identifying the problem and applying the proposed solution, the task completion rate of the users will raise from 25% to 100% </p>    
                    <p> Overall, users (4/4) prefered the revamped design because it's more efficient compared to the current website, stating, “Kasi minimalized niya ‘yung interactions eh. Number one factor sa UX is efficiency, it saves a lot of time and energy.” </p>
                </div>
                   
                </div>
                <div className="content_specific">
                    <h3> UX Solution Validation </h3>
                    <ol>
                        <li> The search engine is the users’ first preference when looking for information on the website. However, when the results do not meet their needs, it leads to frustration and task redirection </li>
                            <ul>
                                <li> Users (4/4) prefer using the search bar right away, stating, “madaling makita from there.” But, if it no relevant results are displayed it leads to frustrating and task reduction, stating, “Ine-expect ko kapag nag-search ako may lalabas (na scholarship grants) pero puro articles lang lumabas” </li>
                                <li> However, some users (2/4) cleared that if they could already see what they are finding, they get to the browsing right away, stating, “Like kung naka present naman na, hindi na kailangan mag-search.” </li>
                            </ul>
                        <div className="content_specific"> 
                            <p> <span style={{ color: "#FEB341" }}> UX Solution: </span>  A clearer, better-designed presentation of information allows users to quickly find what they need, minimizing dependence on the search bar and avoiding frustration from irrelevant or incomplete search results. </p>
                        </div>
                        <li> The Navigation bar confused the users due to it’s inconsistent design and overlapping texts </li>
                            <ul>
                                <li> Most of the users (3/4) are confused of the navigation bar stating, “bakit gano’n, gulo-gulo?” </li>
                                <li> In addition, a user states, “’yung iba naka drop-down, siya lang hindi kaya akala ko wala siyang laman” </li>
                            </ul>
                        <div className="content_specific"> 
                            <p> <span style={{ color: "#FEB341" }}> UX Solution: </span>  An intuitive navigation system further enhances the user journey by efficiently directing them to the appropriate content. </p>
                        </div> 
                        <div className="content_specific">
                            <div className="ux-solution_imgs">
                                <img src={QualiFindings2} className="UX-Solution" alt="UX-Solution" />
                            </div>
                        </div>

                        <li> When the content layout lacks clarity and user-centered design, users become unsure of where to go </li>
                            <ul>
                                <li> Even when users reach the right page, they often feel overwhelmed by the content. One respondent shared, “Mas gusto ko ‘to naka ‘Grid’ kaysa naka ‘List’. Nakatulong sa akin ‘tong grid type kasi may simple description na siya kung tungkol saan ‘yung pipindutin mo.” </li>
                            </ul>
                        <div className="content_specific"> 
                            <p> <span style={{ color: "#FEB341" }}> UX Solution: </span>  Organizing content in a user-centric and visually coherent layout reduces the need for excessive clicks or reliance on anchored links, enabling smoother navigation and alleviating confusion or frustration caused by unclear paths or broken links. </p>
                        </div>   
                        <div className="content_specific">
                            <div className="ux-solution_imgs">
                                <img src={QualiFindings3} className="UX-Solution" alt="UX-Solution" />
                            </div>
                        </div>                                                   
                    </ol>

                </div>
                <div className="content_specific">
                    <h3> Overall User Feedback </h3>
                    <div className="content_specific">
                        <div className="userfeedback_imgs">
                            <img src={UserFeedback} className="UserFeedback" alt="UserFeedback" />
                        </div>
                    </div>
                    <ol>
                        <li>  User Account for a more personalized contents </li>
                            <div className="userfeedback_imgs">
                                <p> All users shared that they have prior experience creating accounts on websites and agreed that account creation should depend on the user’s intent and needs. They are more inclined to register if it results in a more personalized and streamlined experience. One user noted, “Kung iba makikita ko pag nagka-account ako,” expressing the value of tailored content. A teacher also emphasized this by saying, “If halo-halo nakikita mo, nakakalito. Magbibigay ng certificates DepEd, makikita mo pati ‘yung sa iba, tapos hahanapin mo pa ‘yung sa’yo,” highlighting the importance of filtering relevant information. </p>
                            </div>       
                            <div className="userfeedback_imgs">
                                <p> Additionally, respondents recommended adding: </p>
                                <ul>
                                    <li> Having multiple roles. For a more accurate personalization, demanding, “Ako teacher ako, pero at the same time student and researcher din” </li>
                                </ul>
                                <p>Hence, the researcher concludes that creating an account should remain optional to accommodate different user needs. However, whether or not a user has an account, the website’s content must remain cohesive, accessible, and user-friendly.
                                    Additionally, the user may pick multiple user roles and makes the changing of the roles availble from time to time to a more updated and personalized user experience</p>
                            </div>                                                                               
                        <li> In web application system to lessen anchored links </li>
                            <p> All users appreciated the presence of an application system on the website for various reasons: </p>
                            <ul>
                                <li> Reduces Errors. Users preferred a “form” type setup, with one stating: “Siguro doon ako mas sanay, tapos nalalaman mo pa kung saan ka may kulang or nagkamali, kasi ‘di ba kapag online form may indication.” </li>
                                <li> More Direct. Respondents noted that the process felt more straightforward, reducing reliance on anchored links and minimizing clicks. One mentioned: “Dire-diretso na.” </li>
                                <li> Sets Expectations. One user emphasized the progress bar included on the design when filling out forms, stating: “Ang tagal-tagal parang hindi natatapos,” suggesting that visual feedback helps manage their expectations. </li>
                            </ul>
                            <p> Additionally, respondents recommended adding: </p>
                            <ul>
                                <li> An anonymous option for sensitive complaint applications, </li>
                                <li> A confirmation message to serve as proof of submission, and </li>
                                <li> A tracker or status update feature to notify users of their application progress. </li>
                                <li> A video demo to provide more guidance to the user </li>
                            </ul>
                        <li> Auto-fill feature on forms for multiple submission </li>
                            <p> All users initially overlooked the “Auto-fill” button, with one respondent suggesting that its color may have made it less noticeable.

                                Half of the respondents (2/4) quickly recognized that the form on the website was based on the CSC Form 212 (Revised 2017) - Personal Data Sheet, and both appreciated this reference as it made the process easier. One respondent remarked, “Maganda ‘to, kasi ang mga tao tamad,” implying that the feature supports users by simplifying repetitive tasks. Another user added, “Paulit-ulit nagfi-fill-up every time mag-apply ka. Nakakapagod,” emphasizing how the feature reduces redundancy.

                                However, one user raised concerns about privacy, expressing that while autofill is helpful, some users might hesitate if they feel the website has access to their personal information. She suggested including a prompt or message acknowledging the use of their data and clearly referencing the Data Privacy Act, to ensure transparency and user consent.
                                </p>
                        <li> AI Chatbot for a faster customer service </li>
                            <p> All users appreciated the chatbot’s design and animation, which made it easily noticeable.
                                Preferences for using an AI chatbot versus contacting customer service varied based on urgency and context: </p>
                            <ul>
                                <li> User 1 preferred the chatbot for faster responses and only consulted people if necessary. </li>
                                <li> User 2 chose between customer service or AI depending on the nature of the concern. He also gave example that he called customer service regarding his delayed stipend. </li>
                                <li> User 3 explored the website first, then used the chatbot, and only resorted to calling or emailing if needed. </li>
                                <li> User 4 preferred talking to a person for concerns but used the chatbot for general website info. </li>
                            </ul>
                            <p> One user highlighted the chatbot's role in improving navigation efficiency, saying, “Mabilis mag-provide ng info. It could help sa efficiency sa pag-navigate,” noting that such features make a website stand out. However, one user suggested that the chatbot should save previous queries to avoid re-entering concerns every visit. </p>
                    </ol>
                    <div className="content_specific">
                        <div className="userfeedback_imgs">
                            <img src={Conclusion} className="UserFeedback" alt="UserFeedback" />
                        </div>
                    </div>
                </div>
                <div className="content_specific">
                    <h3> Future Development </h3>
                    <p> The researcher suggests to implement the following for future development: </p>
                    <ul>
                        <li> Inclusive Design </li>
                        <p> Since one of the participant is visually impaired, it is hard for them to read some of the texts. In consideration also to our PWD sector </p>
                        <li> Scholarship Specific Page </li>
                        <p> Since most of the traffic is present in this area. It is suggested that the website will have a specific page for the scholarships. </p>
                    </ul>
                </div> 
            </div>

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