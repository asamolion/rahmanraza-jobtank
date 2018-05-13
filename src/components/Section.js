import React, { Component } from "react";

const containerStyle = {
  maxWidth: "60%"
};

const headingStyle = {
  fontSize: "20px",
  fontWeight: "700",
  color: "#666",
  marginBottom: "30px"
};

class Section extends Component {
  render() {
    return (
      <section style={containerStyle} className="container">
        {this.props.heading ? (
          <h1 style={headingStyle}>{this.props.heading}</h1>
        ) : null}

        <div>{this.props.children}</div>
      </section>
    );
  }
}

export default Section;
