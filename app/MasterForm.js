import React, { Component } from "react";

import Step1 from "./components/Steps/Step1";
import Step2 from "./components/Steps/Step2";
import Step3 from "./components/Steps/Step3";
import Step4 from "./components/Steps/Step4";

import Button from "./components/Button/Button";

class MasterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 1,
      selectedItem: "Email",
      selected: "no"
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    if (name === "yes" || name === "no") {
      this.setState({
        selected: value
      });
    } else {
      this.setState({
        selectedItem: value
      });
    }
    
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, username, password } = this.state;
    alert(`Your registration detail: \n 
      Email: ${email} \n 
      Username: ${username} \n
      Password: ${password}`);
  };

  _next = () => {
    let currentStep = this.state.currentStep;

    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 5 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep
    });
  };

  _prev = () => {
    let currentStep = this.state.currentStep;
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  };

  get previousButton() {
    let currentStep = this.state.currentStep;

    // If the current step is not 1, then render the "previous" button
    if (currentStep !== 1) {
      return (
        <Button className="button-secondary mr-2" click={this._prev}>
          <svg
            className="mr-2"
            width="11"
            height="17"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M.186 8.03L8.064.202A.663.663 0 0 1 8.547 0c.186 0 .347.068.483.203l1.766 1.754a.596.596 0 0 1 .204.461.654.654 0 0 1-.204.48L5.147 8.49l5.649 5.611a.654.654 0 0 1 .204.48.634.634 0 0 1-.204.461L9.03 16.797a.663.663 0 0 1-.483.203.663.663 0 0 1-.483-.203L.186 8.971a.687.687 0 0 1 0-.942z"
              fill="#9F9F9F"
            />
          </svg>
          Previous
        </Button>
      );
    }

    return null;
  }

  get nextButton() {
    let currentStep = this.state.currentStep;
    // If the current step is not 3, then render the "next" button
    if (currentStep < 5) {
      return (
        <Button className="button" click={this._next}>
          Next
          <svg
            className="ml-2"
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="17"
            viewBox="0 0 11 17"
            fill="none"
          >
            <path
              d="M10.8 9L2.9 16.8C2.8 16.9 2.6 17 2.5 17 2.3 17 2.1 16.9 2 16.8L0.2 15C0.1 14.9 0 14.8 0 14.6 0 14.4 0.1 14.2 0.2 14.1L5.9 8.5 0.2 2.9C0.1 2.8 0 2.6 0 2.4 0 2.2 0.1 2.1 0.2 2L2 0.2C2.1 0.1 2.3 0 2.5 0 2.6 0 2.8 0.1 2.9 0.2L10.8 8C10.9 8.2 11 8.3 11 8.5 11 8.7 10.9 8.8 10.8 9Z"
              fill="white"
            />
          </svg>
        </Button>
      );
    }
    return null;
  }

  get submitButton() {
    let currentStep = this.state.currentStep;

    // If the current step is the last step, then render the "submit" button
    if (currentStep > 4) {
      return (
        <Button click={this.handleSubmit} className="button">
          Submit
        </Button>
      );
    }
    return null;
  }

  render() {

    const {selectedItem,selected} = this.state;
    const typeOfScams = ["Email", "Phone", "Social media", "Website"];

    return (
      <div className="rich-content line-limit-width">
        <h1>Scams Tool</h1>
            <form>
              <div className="steps-container">
                <Step1
                  currentStep={this.state.currentStep}
                  handleChange={this.handleChange}
                  scams={typeOfScams}
                  selectedItem={selectedItem}
                />
                <Step2
                  currentStep={this.state.currentStep}
                  handleChange={this.handleChange}
                  selected={selected}
                />
                <Step3
                  currentStep={this.state.currentStep}
                  handleChange={this.handleChange}
                  
                />
                <Step4
                  currentStep={this.state.currentStep}
                  handleChange={this.handleChange}
                  
                />
              </div>
              <div className="button-group flex">
                {this.previousButton}
                {this.nextButton}
                {this.submitButton}
              </div>
            </form>
      </div>
    );
  }
}

export default MasterForm;