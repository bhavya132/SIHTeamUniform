import React from "react";
import "./App.css";
import CoastalFlood from "./container/FloodTypes/CoastalFlood/CoastalFlood";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
// import FetchBack from "./components/FetchBack";

const App = () => {
  return (
    <div className="app_bg">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/coastalflood" element={<CoastalFlood />} />
          {/* <Route path="/fetch" element={<FetchBack />} /> */}
        </Routes>
      </Router>

    </div>
  );
}

export default App;
