import React, { Component } from "react";

import { grey500 } from "material-ui/styles/colors";

import EmploymentInput from "./EmploymentInput";

const rowStyles = {
  position: "relative"
};

const addButtonContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  top: "0",
  right: "0",
  minHeight: "100%"
};

const addButtonStyles = {
  cursor: "pointer",
  color: grey500
};

class EmploymentContainer extends Component {
  state = { inputs: [0] };

  addEmployment = evt => {
    evt.preventDefault();
    this.setState({
      inputs: [...this.state.inputs, this.state.inputs.length]
    });
  };

  removeEmployment = () => {
    let inputs = [...this.state.inputs];
    inputs.pop();

    if (inputs.length > 0) {
      this.setState({
        inputs
      });
    }
  };

  render() {
    return (
      <div style={rowStyles} className="row">
        <div style={{ marginLeft: "0" }} className="col-8">
          {this.state.inputs.map(value => (
            <EmploymentInput
              key={value}
              number={value}
              closeHandler={this.removeEmployment}
            />
          ))}
        </div>
        <div style={addButtonContainer} className="col-4">
          <a style={addButtonStyles} onClick={this.addEmployment}>
            + Add Attribute
          </a>
        </div>
      </div>
    );
  }
}

export default EmploymentContainer;
