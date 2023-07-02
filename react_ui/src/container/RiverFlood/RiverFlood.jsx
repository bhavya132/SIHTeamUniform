import React from "react";
import { river_flood } from "../../constants";
import Accordian from "../../components/Accordian";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const RiverFlood = () => {
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
            River Floods
          </h1>
          <div className="app__wrapper-content">
            <p
              style={{
                fontFamily: "SFProDisplayRegular",
                color: "white",
                fontSize: "20px",
              }}
            >
              A fluvial, or river flood, occurs when the water level in a river,
              lake or stream rises and overflows onto the neighboring land. The
              water level rise of the river could be due to excessive rain or
              snowmelt. The damage from a river flood can be widespread as the
              overflow affects smaller rivers downstream, which can cause dams
              and dikes to break and swamp nearby areas.
            </p>
            <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
              <img
                src={river_flood}
                alt="River Flood"
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
        To determine the probability of river flooding, models consider past
        precipitation, forecasted precipitation, current river levels, as well
        as soil and terrain conditions. The severity of a river flood is
        determined by the terrain profile and the duration and intensity
        (volume) of rainfall in the river’s catchment area. In hilly or
        mountainous areas, floods can occur within minutes after a heavy rain,
        drain very quickly and cause damage due to debris flow.
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
      <Accordian />

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

export default RiverFlood;
