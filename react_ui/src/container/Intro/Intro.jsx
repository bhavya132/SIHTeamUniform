import React from "react";
import { flood } from "../../constants";
import { indian_flag } from "../../constants";
import "./Intro.css";
import "../Header/Header.css";

const Intro = () => {
  return (
    <div
      id="home"
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#0c0c0c",
      }}
    >
      <div
        className="cont"
        style={{ backgroundColor: "#0c0c0c", width: "35vw", padding: "1rem" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <h1 className="app__header-h1" style={{ paddingLeft: "10px" }}>
            Mumbai
          </h1>
          <img
            src={indian_flag}
            alt=""
            height={70}
            style={{ padding: "3px", marginTop: "25px" }}
          />
        </div>

        <h3
          style={{
            color: "white",
            fontSize: "30px",
            fontFamily: "Cormorant Upright",
            paddingLeft: "10px",
            fontFamily: "SFProDisplayRegular",
          }}
        >
          Summary
        </h3>
        <p
          style={{
            color: "white",
            paddingLeft: "10px",
            paddingTop: "3px",
            fontSize: "18px",
            fontFamily: "SFProDisplayRegular",
          }}
        >
          Mumbai is the capital city of the Indian state of Maharashtra. Mumbai
          is the de facto financial centre and the most populous city of India
          with an estimated city proper population of 12.5 million. It is the
          centre of the Mumbai Metropolitan Region, the sixth most populous
          metropolitan area in the world with a population of over 23 million.
          Mumbai lies on the Konkan coast on the west coast of India and has a
          deep natural harbour. In the geography of climate risk, Mumbai faces
          the combined threat of rising sea levels and extreme weather events.
        </p>

        <h3
          style={{
            color: "#dcca87",
            fontSize: "30px",
            fontFamily: "Cormorant Upright",
            paddingLeft: "10px",
            paddingTop: "10px",
            fontFamily: "SFProDisplayRegular",
          }}
        >
          Key Statistics
        </h3>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            padding: "10px 20px 0px 20px",
            justifyContent: "space-between",
          }}
        >
          <p style={{ color: "white", fontSize: "25px" }}>14 metres</p>
          <p style={{ color: "white", fontSize: "25px" }}>21,297,000</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            padding: "0px 20px 0px 20px",
            paddingTop: "0px",
            justifyContent: "space-between",
          }}
        >
          <p
            style={{
              color: "#dcca87",
              fontSize: "20px",
              fontFamily: "SFProDisplayRegular",
            }}
          >
            Elevation
          </p>
          <p
            style={{
              color: "#dcca87",
              fontSize: "20px",
              fontFamily: "SFProDisplayRegular",
            }}
          >
            Population
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            padding: "15px 20px 0px 20px",
            justifyContent: "space-between",
          }}
        >
          <p style={{ color: "white", fontSize: "25px" }}>242.2 cm / year</p>
          <p style={{ color: "white", fontSize: "25px" }}>2 mm / year</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            padding: "0px 20px 0px 20px",
            paddingTop: "0px",
            justifyContent: "space-between",
          }}
        >
          <p
            style={{
              color: "#dcca87",
              fontSize: "20px",
              fontFamily: "SFProDisplayRegular",
            }}
          >
            Precipitation
          </p>
          <p
            style={{
              color: "#dcca87",
              fontSize: "20px",
              fontFamily: "SFProDisplayRegular",
            }}
          >
            Land Subsidence
          </p>
        </div>
      </div>

      <div
        className="video"
        style={{
          width: "63vw",
          position: "relative",
        }}
      >
        <div className="overlay"></div>
        <video
          src={flood}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          style={{ width: "63vw", height: "100%", objectFit: "fill" }}
        />
      </div>
    </div>
  );
};

export default Intro;
