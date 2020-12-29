import React, { Component } from "react";
class FileUpload extends Component {
  state = {
    drag: false,
  };
  dropRef = React.createRef();

  handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  handleDragIn = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // this.dragCounter++;
    // if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
    //   this.setState({ drag: true });
    // }
  };

  handleDragOut = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // this.dragCounter--;
    // if (this.dragCounter === 0) {
    //   this.setState({ drag: true });
    // }
  };

  handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ drag: false });
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      this.props.handleDrop(e.dataTransfer.files);
      e.dataTransfer.clearData();
      this.dragCounter = 0;
    }
  };

  componentDidMount() {
    let div = this.dropRef.current;
    div.addEventListener("dragenter", this.handleDragIn);
    div.addEventListener("dragleave", this.handleDragOut);
    div.addEventListener("dragover", this.handleDrag);
    div.addEventListener("drop", this.handleDrop);
  }

  componentWillUnmount() {
    let div = this.dropRef.current;
    div.removeEventListener("dragenter", this.handleDragIn);
    div.removeEventListener("dragleave", this.handleDragOut);
    div.removeEventListener("dragover", this.handleDrag);
    div.removeEventListener("drop", this.handleDrop);
  }

  render() {
    return (
      <div
        style={{
          margin: "15px 15px",
          height: "35%",
          width: "30%",
          position: "relative",
          backgroundColor: "#ccc",
        }}
        ref={this.dropRef}
      >
        <div
          style={{
            border: "dotted white 4px",
            backgroundColor: "black",
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 9999,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              right: 0,
              left: 0,
              textAlign: "center",
              color: "#fff",
              fontSize: 36,
              fontWeight: "bold",
            }}
          >
            <div>Drop File(s) here</div>
          </div>
        </div>
      </div>
    );
  }
}
export default FileUpload;
