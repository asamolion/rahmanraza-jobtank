import React from "react";

import Indicator from "./Indicator";

const containerStyle = {
  maxWidth: "60%"
};

const rowStyle = {
  padding: "40px 0"
};

const colStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "8px 0"
};

class Progress extends React.Component {
  render() {
    return (
      <div style={containerStyle} className="container">
        <div style={rowStyle} className="row">
          <div style={colStyle} className="col-4">
            <Indicator label="Upload" />
          </div>
          <div style={colStyle} className="col-4">
            <Indicator />
          </div>
          <div style={colStyle} className="col-4">
            <Indicator />
          </div>
        </div>
      </div>
    );
  }
}

export default Progress;
