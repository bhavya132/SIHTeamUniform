import React, { useState, useContext, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import FileUploader from "./FileUploader";
import LocationGetter from "./LocationGetter";
import { FloodUploadContext } from "../contexts/FloodUploadContext";
import { doc, setDoc, addDoc, collection } from "firebase/firestore";
import db, { storage } from "../firebase-config.js";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const MyModal = (props) => {
  const [image, setImage] = useState("");
  const { newFile, setNewFile } = useContext(FloodUploadContext);
  const [lat, setLat] = useState("0");
  const [error, setError] = useState("");
  const [lon, setLon] = useState("0");

  const [file, setFile] = useState({});
  const fileFromDragDrop = props.file;
  fileFromDragDrop && setFile(fileFromDragDrop);

  console.log(file);
  console.log("newFile", newFile);

  // const uploadImage = async () => {

  // };

  const uploadToFirebase = async () => {
    // await uploadImage();
    const name = new Date().getTime() + newFile.name;
    const storageRef = ref(storage, name);

    const uploadTask = uploadBytesResumable(storageRef, newFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          const imageUrl = downloadURL;
          await addDoc(collection(db, "floods"), {
            lat: lat,
            lon: lon,
            image: imageUrl,
            flood: false,
          });
        });
      }
    );
  };

  const checkAndUpload = async () => {
    if (newFile.name && lat !== "0" && lon !== "0") {
      console.log("uploading");
      await uploadToFirebase();
      setError("");
      setLat("0");
      setLon("0");
      setNewFile({});
      props.handleClose();
    } else {
      setError("Please fill all the fields");
    }
  };

  const getLatLon = (lat, lon) => {
    setLat(lat);
    setLon(lon);
  };

  const getFile = (file) => {
    setFile(file);
  };

  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header closeButton style={{ backgroundColor: "#dcca87" }}>
        <Modal.Title style={{ fontFamily: "SFProDisplayRegular" }}>
          Report A Flood
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "#dcca87" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <FileUploader getFile={getFile} />
          <div style={{ margin: "auto" }}>
            {newFile.name ? newFile.name : "No file chosen"}
          </div>
        </div>
        <hr />
        <p style={{ fontFamily: "SFProDisplayRegular", fontSize: "20px" }}>
          Flood location:
        </p>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <LocationGetter getLatLon={getLatLon} />
          <p
            style={{
              fontFamily: "SFPRODISPLAYLIGHTITALIC",
              margin: "auto 1rem auto 1rem",
            }}
          >
            or
          </p>
          <input
            type="text"
            placeholder="Search for a location"
            style={{ textAlign: "center", flex: "2" }}
          />
        </div>
        <hr />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <p style={{ fontFamily: "SFPRODISPLAYLIGHTITALIC" }}>
            Latitude: {lat}
          </p>
          <p style={{ fontFamily: "SFPRODISPLAYLIGHTITALIC" }}>
            Longitude: {lon}
          </p>
        </div>
        <p style={{ fontFamily: "SFProDisplayRegular", color: "red" }}>
          {error}
        </p>
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: "#dcca87" }}>
        <Button
          variant="secondary"
          onClick={props.handleClose}
          style={{ background: "white", border: "white", color: "black" }}
        >
          Close
        </Button>
        <Button
          variant="primary"
          style={{ background: "black", border: "black" }}
          onClick={checkAndUpload}
        >
          Upload
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyModal;
