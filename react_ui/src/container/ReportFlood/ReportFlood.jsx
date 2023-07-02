import React from "react";

import "./ReportFlood.css";
import DragDrop from "../../components/DragDrop";
import { useState } from "react";
import quote from "../../assets/quote.png";

const ReportFlood = (props) => {
  const [file, setFile] = useState({});
  const getFile = (file) => {
    setFile(file);
  };
  console.log(file);

  return (
    <div
      id="report"
      className="app__bg app__wrapper section__padding"
      style={{ minHeight: "0" }}
    >
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <DragDrop handleShow={props.handleShow} getFile={getFile} />
      </div>

      <div className="app__wrapper_info">
        <h1
          className="headtext__cormorant"
          style={{
            color: "white",
            fontFamily: "SFProDisplayRegular",
            fontSize: "65px",
          }}
        >
          Report A Flood
        </h1>

        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={quote} alt="quote" />
            <p
              style={{
                fontFamily: "SFProDisplayRegular",
                color: "white",
                fontSize: "20px",
              }}
            >
              By uploading pictures of floods on our website,
            </p>
          </div>
          <p
            style={{
              fontFamily: "SFProDisplayRegular",
              color: "white",
              fontSize: "20px",
            }}
          >
            you become an essential part of crowd data collection, providing
            valuable information for timely alerts and assistance to users in
            flood-prone areas. Your uploaded flood pictures serve as real-time
            evidence, enabling us to monitor the severity and extent of
            flooding, which in turn helps in accurate flood forecasting and
            emergency response coordination.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <button
            type="button"
            className="custom__button"
            onClick={props.handleShow}
          >
            Upload a picture
          </button>

          <button type="button" className="custom__button">
            Browse uploaded pictures
          </button>
        </div>

        <div className="app__chef-sign"></div>
      </div>
    </div>
  );
};

export default ReportFlood;
