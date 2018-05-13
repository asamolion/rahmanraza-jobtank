import React, { Component } from "react";

// Custom Components
import Header from "./components/Header";
import Progress from "./components/Progress/Progress";
import Section from "./components/Section";
import Info from "./components/Info";

// Material-UI
import { deepOrange500 } from "material-ui/styles/colors";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

// Font
import "typeface-roboto";
// Theme
const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <React.Fragment>
          <Header />
          <Section>
            <Progress />
          </Section>
          <Section heading="Personal Information">
            <Info />
          </Section>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default App;
