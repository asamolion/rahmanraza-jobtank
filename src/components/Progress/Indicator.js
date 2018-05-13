import React, { Component } from "react";

import {
  deepOrange700,
  grey300,
  grey500
} from "material-ui/styles/colors";

const iconStyle = {
  color: deepOrange700,
  display: "inline-block",
  fontSize: "30px"
};

const dottedIconContainer = {
  display: "inline-block",
  minWidth: "70%",
  padding: "0",
  marginLeft: "10px"
};

const labelStyle = {
  color: grey500,
  display: "inline-block"
};

const dottedIcon = {
  display: "block",
  width: "100%",
  borderBottom: "4px dotted",
  borderColor: grey300
};

class Indicator extends Component {
  render() {
    return (
      <React.Fragment>
        <i style={iconStyle} className="material-icons">
          check_circle
        </i>
        <span style={labelStyle}>{this.props.label}</span>
        <div style={dottedIconContainer}>
          <i style={dottedIcon} />
        </div>
      </React.Fragment>
    );
  }
}

export default Indicator;
