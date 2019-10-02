import React, { Component } from "react";

import Progress, { Stage } from "./components/Progress/Progress";

class Stepper extends Component {
  static Progress = Progress;  
  static Stage = Stage;

  render() {
    return <div>{this.props.children}</div>;
  }
}

export default Stepper;
