import React, { Component } from "react";

// Custom Components
import Header from "./components/Header";
import Progress from "./components/Progress/Progress";

// Material-UI
import { deepOrange500 } from "material-ui/styles/colors";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

// Font
import "typeface-roboto";

// Click handler
// import injectTapEventPlugin from "react-tap-event-plugin";
// injectTapEventPlugin();

// Styles

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
          <Progress />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default App;
