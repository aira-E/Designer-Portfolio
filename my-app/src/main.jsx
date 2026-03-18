import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import PricePulse from "./components/PricePulse"; 
import DOST from "./components/DOST";
import GreenleafGrocers from "./components/GreenleafGrocers";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      {/* 1. Home Route: Maps the base path "/" to your main App component */}
      <Route path="/" element={<App />} />
      
      {/* 2. DOST Route: Maps "/dost" to the DOST component (This works correctly) */}
      <Route path="/dost" element={<DOST />} />
      
      {/* 3. FIX: PricePulse Route: Maps "/pricepulse" to the PricePulse component. 
             This matches the navigate("/pricepulse") call in App.jsx. */}
      <Route path="/pricepulse" element={<PricePulse />} />
      
      {/* 4. GreenleafGrocers Route: Maps "/greenleafgrocers" to the GreenleafGrocers component. */}
      <Route path="/greenleafgrocers" element={<GreenleafGrocers />} />
      
      {/* REMOVED: 
          <Route path="/" element={<App />} />  <- Duplicate route
          <Route path="/dost" element={<PricePulse />} /> <- Incorrectly using the /dost path
      */}
    </Routes>
  </BrowserRouter>
);