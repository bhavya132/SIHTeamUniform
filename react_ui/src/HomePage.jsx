import React from "react";
import { Widget, addResponseMessage } from "react-chat-widget";
import { useEffect, useState } from "react";

import "./chatbot.css";

import FloodTypeIntro from "./container/FloodTypes/FloodTypeIntro";
// import { Navbar } from "./components";
import "./App.css";
import MyModal from "./components/MyModal";
import { FloodUploadContext } from "./contexts/FloodUploadContext";
import ReportFlood from "./container/ReportFlood/ReportFlood";
import Intro from "./container/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";

const HomePage = () => {
  const [show, setShow] = useState(false);
  const [newFile, setNewFile] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    addResponseMessage(
      "Hello this is **FloodBot**! I am here to help you with your queries. You can ask me anything about sea level rise and floods and I will try my best to answer it :)"
    );
  }, []);

  return (
    <div className="app_bg">
      <FloodUploadContext.Provider value={{ newFile, setNewFile }}>
        <MyModal
          show={show}
          handleClose={handleClose}
          handleShow={handleShow}
        />
        <Navbar />
        <Intro />
        <FloodTypeIntro />
        <ReportFlood handleShow={handleShow} />
        <Widget
          title={"FloodBot"}
          subtitle={"An intelligent chatbot powered by OpenAI"}
        />
      </FloodUploadContext.Provider>
    </div>
  );
};

export default HomePage;
