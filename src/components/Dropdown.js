import React, { Component } from "react";

import DropDownMenu from "material-ui/DropDownMenu";
import {
  deepOrange500,
  grey300,
  grey400,
  grey500
} from "material-ui/styles/colors";

const rootStyle = {
  border: "1px solid",
  borderColor: grey300,
  borderRadius: "25px",
  color: grey300,
  height: "34px",
  width: "100%",
  position: "relative",
  top: "5px",

  "&:hover": {
    border: "1px solid",
    borderColor: deepOrange500
  }
};

const labelStyle = {
  border: "none",
  color: grey400,
  position: "relative",
  top: "-11px",
  height: "34px"
};

const hintStyle = {
  top: "5px",
  left: "20px"
};

const iconStyle = {
  top: "-5px"
};

const underlineStyle = {
  display: "none"
};

const menuStyle = {
  position: "relative",
  borderRadius: "25px"
};

const menuItemStyle = {
  "&:hover": {
    backgroundColor: grey500
  }
};

const listStyle = {};

class Dropdown extends Component {
  state = {
    value: undefined
  };

  handleChange = (event, index, value) => this.setState({ value });

  render() {
    return (
      <React.Fragment>
        <DropDownMenu
          value={this.state.value}
          onChange={this.handleChange}
          autoWidth={false}
          menuStyle={menuStyle}
          menuItemStyle={menuItemStyle}
          labelStyle={labelStyle}
          iconStyle={iconStyle}
          listStyle={listStyle}
          underlineStyle={underlineStyle}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          style={rootStyle}
        >
          {this.props.children}
        </DropDownMenu>
      </React.Fragment>
    );
  }
}

export default Dropdown;
