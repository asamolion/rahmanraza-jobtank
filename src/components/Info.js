import React, { Component } from "react";

import MenuItem from "material-ui/MenuItem";

import InputField from "./InputField";
import Dropdown from "./Dropdown";

const colStyle = {
  boxSizing: "border-box",
  paddingLeft: "0"
};

class Info extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div style={colStyle} className="col-4">
            <InputField hintText="Name" labelText="Name" />
          </div>
          <div style={colStyle} className="col-4">
            <InputField hintText="Mothertongue" labelText="Mothertongue" />
          </div>
          <div style={colStyle} className="col-4">
            <InputField hintText="Phone Number" labelText="Phone Number" />
          </div>
        </div>
        <div className="row">
          <div style={colStyle} className="col-4">
            <InputField hintText="Email" labelText="Email" />
          </div>
          <div style={colStyle} className="col-4">
            <InputField hintText="Nationality" labelText="Nationality" />
          </div>
          <div style={colStyle} className="col-4">
            <InputField hintText="MM/DD/YYYY" labelText="DOB" />
          </div>
        </div>
        <div className="row">
          <div style={colStyle} className="col-4">
            <InputField
              hintText="Preferred Location"
              labelText="Current Location"
            />
          </div>
          <div style={colStyle} className="col-4">
            <Dropdown>
              <MenuItem value={undefined} primaryText="Gender" />
              <MenuItem value={"m"} primaryText="Male" />
              <MenuItem value={"f"} primaryText="Female" />
              <MenuItem value={"o"} primaryText="Other" />
            </Dropdown>
          </div>
          <div style={colStyle} className="col-4">
            <Dropdown>
              <MenuItem value={undefined} primaryText="Select" />
              <MenuItem value={"ft"} primaryText="Full-time" />
              <MenuItem value={"ftc"} primaryText="Full-time (Contactor)" />
              <MenuItem value={"pt"} primaryText="Part-time" />
              <MenuItem value={"ptc"} primaryText="Part-time (Contactor)" />
              <MenuItem value={"i"} primaryText="Intern" />
              <MenuItem value={"al"} primaryText="Actively Looking" />
              <MenuItem value={"jla"} primaryText="Just look around" />
            </Dropdown>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Info;
