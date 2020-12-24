import React, { PureComponent } from "react";

class FileUpload extends PureComponent {
  state = {
    file: [],
  };

  uploadFile = () => {
    document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
      const dropZoneElement = inputElement.closest(".drop-zone");
      dropZoneElement.addEventListener("click", (e) => {
        inputElement.click();
      });
      inputElement.addEventListener("change", (e) => {
        if (inputElement.files.length) {
          //   updateThumbnail(dropZoneElement, inputElement.files[0]);
        }
      });
      dropZoneElement.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropZoneElement.classList.add("drop-zone--over");
      });

      ["dragleave", "dragend"].forEach((type) => {
        dropZoneElement.addEventListener(type, (e) => {
          dropZoneElement.classList.remove("drop-zone--over");
        });
      });

      dropZoneElement.addEventListener("drop", (e) => {
        e.preventDefault();

        if (e.dataTransfer.files.length) {
          inputElement.files = e.dataTransfer.files;
          //   updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
        }

        dropZoneElement.classList.remove("drop-zone--over");
      });
    });
  };

  render() {
    return (
      <div className="file-upload">
        <div className="drop-zone">
          <span className="drop-zone__prompt">
            Drop file here or click to upload
          </span>
          <input type="file" name="myFile" className="drop-zone__input" />
        </div>
      </div>
    );
  }
}

export default FileUpload;
