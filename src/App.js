import React, { Component } from "react";

// Custom Components
import Header from "./components/Header";
import Progress from "./components/Progress/Progress";
import Section from "./components/Section";
import Info from "./components/Info";
import EducationContainer from "./components/Education/EducationContainer";
import EmploymentContainer from "./components/Employment/EmploymentContainer";
import RatedInputContainer from "./components/Ratings/RatedInputContainer";
import Expectation from "./components/Expectation";
import AttributeContainer from "./components/Attributes/AttributeContainer";
import AttributeInput from "./components/Attributes/AttributeInput";
import InputField from "./components/InputField";

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
          <Section heading="Education">
            <EducationContainer />
          </Section>
          <Section heading="Employment">
            <EmploymentContainer />
          </Section>
          <Section heading="Key Skills">
            <RatedInputContainer defaultValues={["Python", "Java"]} />
          </Section>
          <Section heading="Language">
            <RatedInputContainer defaultValues={["English", "Spanish"]} />
          </Section>
          <Section heading="Expectation">
            <Expectation />
          </Section>
          <Section heading="Patent">
            <AttributeContainer
              labels={[
                {
                  labelText: "Patent Name",
                  hintText: "Patent Name"
                },
                {
                  labelText: "Date",
                  hintText: "MM/DD/YYYY"
                }
              ]}
            />
          </Section>
          <Section heading="Publication">
            <AttributeContainer
              labels={[
                {
                  labelText: "Conference / Journal Name",
                  hintText: "Conference / Journal Name"
                },
                {
                  labelText: "Date",
                  hintText: "MM/DD/YYYY"
                }
              ]}
            />
          </Section>
          <Section heading="License and Certification">
            <AttributeContainer
              labels={[
                {
                  labelText: "Name",
                  hintText: "Name"
                },
                {
                  labelText: "Date",
                  hintText: "MM/DD/YYYY"
                }
              ]}
            />
          </Section>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default App;
