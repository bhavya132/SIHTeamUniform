import React from "react";
import { useRef, useContext } from "react";
import { FloodUploadContext } from "../contexts/FloodUploadContext";

const FileUploader = (props) => {
  const { setNewFile } = useContext(FloodUploadContext);

  const hiddenFileInput = useRef(null);
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    setNewFile(fileUploaded);
    console.log(fileUploaded);
    props.getFile(fileUploaded);
  };

  return (
    <div>
      <input
        type="file"
        style={{ display: "none" }}
        ref={hiddenFileInput}
        onChange={handleChange}
      />
      <button
        type="button"
        className="custom__button"
        onClick={handleClick}
        style={{ color: "white", background: "black" }}
      >
        Upload a picture
      </button>
    </div>
  );
};

export default FileUploader;
