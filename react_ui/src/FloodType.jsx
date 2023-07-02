import React from "react";
import CoastAccordian from "./components/Accordian";

const FloodType = (props) => {
  return (
    <div className="app_bg">
      <div
        className="app__bg app__wrapper"
        id="floodType"
        style={{ padding: "40px" }}
      >
        <div className="app__wrapper_info">
          <h1
            style={{
              color: "white",
              fontFamily: "SFProDisplayRegular",
              fontSize: "65px",
              marginBottom: "1rem",
            }}
          >
            {props.title}
          </h1>
          <div className="app__wrapper-content">
            <p
              style={{
                fontFamily: "SFProDisplayRegular",
                color: "white",
                fontSize: "20px",
              }}
            >
              {props.content}
            </p>
            <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
              <img
                src={props.image.src}
                alt={props.image.alt}
                style={{ height: "400px", width: "fitContent" }}
              />
            </div>
          </div>
        </div>
        <div className="app__wrapper_img">
          <model-viewer
            id="my-model-viewer"
            ar
            ar-scale="fixed"
            disable-zoom
            alt={props.model.alt}
            src={props.model.src}
            auto-rotate
            camera-controls
            style={{ width: "500px", height: "600px" }}
          />
        </div>
      </div>
      <div
        className="app_bg"
        style={{
          backgroundColor: "#0c0c0c",
          paddingLeft: "40px",
          paddingRight: "100px",
          marginTop: "-2rem",
        }}
      >
        <p
          style={{
            fontFamily: "SFProDisplayRegular",
            color: "white",
            fontSize: "20px",
          }}
        >
          {props.subContent}
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
        {props.accordian === "coast" && <CoastAccordian />}
      </div>
    </div>
  );
};

export default FloodType;
