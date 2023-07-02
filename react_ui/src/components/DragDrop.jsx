import React, { useContext } from "react";
import { useDropzone } from "react-dropzone";
import { FloodUploadContext } from "../contexts/FloodUploadContext";

const DragDrop = (props) => {
  const { setNewFile } = useContext(FloodUploadContext);

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    noClick: true,
    onDrop: (acceptedFiles) => {
      console.log(acceptedFiles[0]);
      setNewFile(acceptedFiles[0]);
      props.getFile(acceptedFiles[0]);
      props.handleShow();
    },
  });
  const files = acceptedFiles.map((file) => (
    <li key={file.path}>{file.path}</li>
  ));
  return (
    <div
      className="container"
      style={{
        height: "300px",
        border: "5px dashed #dcca87",
        padding: "0",
        marginLeft: "-2rem",
      }}
    >
      <div
        {...getRootProps({ className: "dropzone" })}
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input {...getInputProps()} />
        <p
          style={{
            color: "#e1dcdc",
            fontFamily: "SFPRODISPLAYLIGHTITALIC",
            fontSize: "35px",
          }}
        >
          Drag and Drop a picture
        </p>
      </div>
    </div>
  );
};

export default DragDrop;
