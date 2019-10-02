import React, { Component } from "react";
import { StepperContext } from "../../MasterForm";

export const Stage = ({ num }) => (
  <StepperContext.Consumer>
    {value => <React.Fragment>{renderIcon(value.stage, num)}</React.Fragment>}
  </StepperContext.Consumer>
);

const renderIcon = (stage, num) => {
  if (stage < num) {
    return (
        <li className="step-icon">{num}</li>
    );
  }
  return (
    // <img
    //   className="animated fadeIn"
    //   style={{ width: "12px" }}
    //   src="https://rawgit.com/shaunoff/Stepper/cc93083fce0eba1dfc7867af098ddc4eef9ce298/public/icons/checked2.svg"
    // />
    <li className="step-icon completed">{num}</li>
  );
};

export default class Progress extends Component {
  render() {
    return <ul className="flex flex-row list-style-none justify-between">{this.props.children}</ul>;
  }
}
