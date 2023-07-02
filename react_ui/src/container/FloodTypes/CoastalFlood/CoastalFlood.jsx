import React from "react";
import { coastal_flood, coast } from "../../../constants";
import CoastAccordian from "../../../components/Accordian";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const CoastalFlood = () => {
  const navigate = useNavigate();
  return (
    <div
      className="app_bg"
      style={{
        padding: "3rem",
        paddingLeft: "4rem",
        backgroundColor: "#0c0c0c",
      }}
    >
      <IoArrowBackCircleSharp
        style={{ color: "white" }}
        size={55}
        onClick={() => navigate(-1)}
      />
      <div className="app__bg app__wrapper">
        <div className="app__wrapper_info">
          <h1
            style={{
              color: "white",
              fontFamily: "SFProDisplayRegular",
              fontSize: "65px",
              marginBottom: "1rem",
            }}
          >
            Coastal Floods
          </h1>
          <div className="app__wrapper-content">
            <p
              style={{
                fontFamily: "SFProDisplayRegular",
                color: "white",
                fontSize: "20px",
              }}
            >
              Coastal flooding is the inundation of land areas along the coast
              by seawater. Common causes of coastal flooding are intense
              windstorm events occurring at the same time as high tide (storm
              surge), and tsunamis.
            </p>
            <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
              <img
                src={coastal_flood}
                alt="Coastal Flood"
                style={{ height: "400px", width: "fitContent" }}
              />
            </div>
          </div>
        </div>
        <div>
          <model-viewer
            id="my-model-viewer"
            ar
            ar-scale="fixed"
            disable-zoom
            alt="coast"
            src={coast}
            auto-rotate
            camera-controls
            camera-orbit="45deg 0deg"
            style={{ width: "500px", height: "600px" }}
          />
          <p
            style={{
              color: "white",
              fontFamily: "SFPRODISPLAYLIGHTITALIC",
              textAlign: "center",
            }}
          >
            Model showing: Flooded coast from bird's-eye view
          </p>
        </div>
      </div>
      <p
        style={{
          fontFamily: "SFProDisplayRegular",
          color: "white",
          fontSize: "20px",
        }}
      >
        Coastal flooding is the inundation of land areas along the coast by
        seawater. Common causes of coastal flooding are intense windstorm events
        occurring at the same time as high tide (storm surge), and tsunamis. To
        determine the probability and magnitude of a storm surge, coastal flood
        models consider this information in addition to data from historical
        storms that have affected the area. But as sea levels rise due to
        climate change, more coastal cities and communities will become
        vulnerable coastal flooding.
      </p>
      <h2
        style={{
          fontFamily: "SFProDisplayRegular",
          color: "white",
          marginTop: "1rem",
        }}
      >
        Ways to protect yourself:
      </h2>
      <CoastAccordian />

      {/* <div
        className="app_bg"
        style={{
          backgroundColor: "#0c0c0c",
          paddingLeft: "40px",
          paddingRight: "100px",
          marginTop: "-2rem",
        }}
      ></div> */}
    </div>
  );
};

export default CoastalFlood;
