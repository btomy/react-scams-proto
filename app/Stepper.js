import React, { Component } from "react";

import Progress, { Stage } from "./components/Progress/Progress";

class Stepper extends Component {
  static Progress = Progress;  
  static Stage = Stage;

  render() {
    return <React.Fragment>{this.props.children}</React.Fragment>;
  }
}

export default Stepper;
