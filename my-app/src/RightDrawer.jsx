import React, { useEffect, useRef } from 'react';
import './RightDrawer.css'; // Import the dedicated CSS

function RightDrawer({ isOpen, onClose, children }) {
    // Ref to the drawer's content div to detect clicks inside it
    const drawerRef = useRef(null);

    // Effect for handling clicks outside the drawer
    useEffect(() => {
        function handleClickOutside(event) {
            // Check if the drawer is open AND the click target is NOT inside the drawer
            if (isOpen && drawerRef.current && !drawerRef.current.contains(event.target)) {
                onClose();
            }
        }
        
        // Attach the click listener to the entire document
        document.addEventListener("mousedown", handleClickOutside);
        
        // Cleanup function to remove the listener when the component unmounts
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose]); // Depend on isOpen and onClose

    return (
        <>
            {/* 1. Overlay (Dims the background, closes on click) */}
            <div 
                className={`drawer-overlay ${isOpen ? 'active' : ''}`}
                onClick={onClose} 
            />

            {/* 2. Drawer Panel */}
            <div 
                className={`right-drawer ${isOpen ? 'active' : ''}`}
                ref={drawerRef} // Attach ref for outside-click detection
            >
                <button className="drawer-close-btn" onClick={onClose}>
                    &times; {/* Close 'x' icon */}
                </button>
                
                <div className="drawer-content">
                    {children}
                </div>
            </div>
        </>
    );
}

export default RightDrawer;