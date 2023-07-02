import React from "react";

import { minor_flood } from "../../constants";
import { useNavigate } from "react-router-dom";
import "../../font.css";

const FloodTypeIntro = () => {
  const navigate = useNavigate();

  return (
    <div
      className="app__bg app__wrapper"
      id="floodTypes"
      style={{ padding: "0 2rem" }}
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
          Flood Types
        </h1>
        <div className="app__wrapper-content">
          <p
            style={{
              fontFamily: "SFProDisplayRegular",
              color: "white",
              fontSize: "20px",
            }}
          >
            Understanding different types of floods is crucial for effective
            disaster preparedness and response. By familiarizing ourselves with
            river floods, flash floods, coastal floods and other variations, we
            can assess specific risks, tailor preparedness strategies,
            coordinate emergency responses, engage communities, and implement
            long-term mitigation measures. Let's learn about them with some
            interactive AR models.
          </p>
        </div>

        <div
          style={{
            justifyContent: "space-between",
            display: "flex",
            width: "100%",
          }}
        >
          <button
            type="button"
            className="custom__button"
            style={{ marginTop: "2rem" }}
            onClick={() => navigate("/coastalflood")}
          >
            Coastal Floods
          </button>

          <button
            type="button"
            className="custom__button"
            style={{ marginTop: "2rem" }}
          >
            River Floods
          </button>

          <button
            type="button"
            className="custom__button"
            style={{ marginTop: "2rem" }}
          >
            Flash Floods
          </button>
        </div>
      </div>
      <div className="app__wrapper_img">
        <model-viewer
          id="my-model-viewer"
          alt="astronaut"
          src={minor_flood}
          auto-rotate
          camera-controls
          ar
          ar-scale="fixed"
          disable-zoom
          style={{ width: "600px", height: "800px" }}
        />
      </div>
    </div>
  );
};

export default FloodTypeIntro;
