import React, { Component } from "react";

import styles from "./styles";
import { StepperContext } from "../../MasterForm";

export const Stage = ({ num }) => (
  <StepperContext.Consumer>
    {value => <div>{renderIcon(value.stage, num)}</div>}
  </StepperContext.Consumer>
);

const renderIcon = (stage, num) => {
  if (stage < num) {
    return (
      <div>
        <div>{num}</div>
      </div>
    );
  }
  return (
    <img
      className="animated fadeIn"
      style={{ width: "12px" }}
      src="https://rawgit.com/shaunoff/Stepper/cc93083fce0eba1dfc7867af098ddc4eef9ce298/public/icons/checked2.svg"
    />
  );
};

const circleStyle = (current, circleSection) => {
  if (current === circleSection) {
    return { ...styles.circle, ...styles.circleActive };
  } else if (current > circleSection) {
    return { ...styles.circle, ...styles.circleComplete };
  }
  return styles.circle;
};

export default class Progress extends Component {
  render() {
    return <div style={styles.progressContainer}>{this.props.children}</div>;
  }
}
