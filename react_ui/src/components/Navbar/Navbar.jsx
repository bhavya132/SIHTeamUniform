import React from "react";
import { Link } from "react-scroll";
import gericht from "../../assets/gericht.png";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="app__navbar" style={{ zIndex: "10000" }}>
      <div className="app__navbar-logo">
        <img src={gericht} alt="app log" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <Link
            activeClass="active"
            className="nav-link"
            offset="-10px"
            smooth
            duration={-5}
            spy
            to="home"
            style={{ fontFamily: "SFProDisplayRegular" }}
          >
            Home
          </Link>
        </li>
        <li className="p__opensans">
          <Link
            activeClass="active"
            className="nav-link"
            smooth
            duration={-5}
            spy
            to="floodTypes"
            style={{ fontFamily: "SFProDisplayRegular" }}
          >
            Flood Types
          </Link>
        </li>
        <li className="p__opensans">
          <Link
            activeClass="active"
            className="nav-link"
            smooth
            spy
            duration={-5}
            to="report"
            style={{ fontFamily: "SFProDisplayRegular" }}
          >
            Report A Flood
          </Link>
        </li>
        <li className="p__opensans">
          <Link
            activeClass="active"
            className="nav-link"
            smooth
            spy
            to="floodMap"
            style={{ fontFamily: "SFProDisplayRegular" }}
          >
            Flood Map
          </Link>
        </li>
        <li className="p__opensans">
          <Link
            activeClass="active"
            className="nav-link"
            smooth
            spy
            to="simulation"
            style={{ fontFamily: "SFProDisplayRegular" }}
          >
            Simulation
          </Link>
        </li>
        <li className="p__opensans">
          <Link
            activeClass="active"
            className="nav-link"
            smooth
            spy
            to="story"
            style={{ fontFamily: "SFProDisplayRegular" }}
          >
            Story Mode
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
