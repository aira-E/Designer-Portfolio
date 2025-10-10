import React from 'react';
// Assuming the following icons/images are passed as props or imported in App.jsx
// For now, we'll assume mdb, rl, figmaIcon, aiIcon, psIcon, canvaIcon are passed as props or globally available
import './Carousel.css'; // Import the new CSS file

function BrandingCarousel({ mdb, rl, figmaIcon, aiIcon, psIcon, canvaIcon }) {
    return (
        <div className="section_branding">
            <h2> Branding </h2>
            
            <div className="carousel-wrapper">
                {/* 1. Radio Button Controls (Hidden) */}
                {/* defaultChecked makes Image 1 the initial slide */}
                <input type="radio" name="slider" id="image1" defaultChecked />
                <input type="radio" name="slider" id="image2" />
                
                {/* 2. Slides Container */}
                <div className="slides-container">
                    
                    {/* Slide 1: MDB */}
                    <div className="slide branding-slide">
                        <div className="card_branding_mockups"> 
                            <img src={mdb} className="branding_mockups" alt="MDB Branding Mockup" />
                            <div className="card_case_studies_footer">
                                <img src={figmaIcon} className="icon_logos_technologies" alt="icon_figma" />
                                <img src={aiIcon} className="icon_logos_technologies" alt="icon_ai" />
                                <img src={psIcon} className="icon_logos_technologies" alt="icon_ps" />
                                <img src={canvaIcon} className="icon_logos_technologies" alt="icon_canva" />
                            </div>
                        </div>
                    </div>
                    
                    {/* Slide 2: RL */}
                    <div className="slide branding-slide">
                        <div className="card_branding_mockups"> 
                            <img src={rl} className="branding_mockups" alt="RL Branding Mockup" /> 
                            <div className="card_case_studies_footer">
                                <img src={figmaIcon} className="icon_logos_technologies" alt="icon_figma" />
                                <img src={canvaIcon} className="icon_logos_technologies" alt="icon_canva" />
                            </div>
                        </div>
                    </div>

                </div> {/* Closes slides-container */}

                {/* 3. Navigation Indicators (Radio Button Labels) */}
                <div className="navigation-manual">
                    <label htmlFor="image1" className="manual-btn"></label>
                    <label htmlFor="image2" className="manual-btn"></label>
                </div>

                    {/* 4. Autoplay Trigger (Hidden element for CSS animation) */}
                    <div className="autoplay-trigger">
                        <div className="auto-btn1"></div>
                        <div className="auto-btn2"></div>
                    </div>
                
            </div> {/* Closes carousel-wrapper */}
        </div>
    );
}

export default BrandingCarousel;