import React, { Component } from "react";

import Step1 from './components/Step1'
import Step2 from './components/Step2'
import Step3 from './components/Step3'
import Step4 from './components/Step4'

import MultiStepProgressBar from "./MultiStepProgressBar";

class MasterForm extends Component {
  constructor(props) {
    super(props);

    // Set the intiial input values
    this.state = {
      currentStep: 1,
      email: "",
      username: "",
      password: ""
    };

    // Bind the submission to handleChange()
    
    this.handleSubmit = this.handleSubmit.bind(this)

    // Bind new functions for next and previous
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
  }

  // Use the submitted data to set the state
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  // Trigger an alert on form submission
  handleSubmit(event) {
    event.preventDefault();
    const { email, username, password } = this.state;
    alert(`Your registration detail: \n 
      Email: ${email} \n 
      Username: ${username} \n
      Password: ${password}`);
  };

  // Test current step with ternary
  // _next and _previous functions will be called on button click
  _next() {
    let currentStep = this.state.currentStep;

    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 5 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep
    });
  }

  _prev() {
    let currentStep = this.state.currentStep;
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  }

  // The "next" and "previous" button functions
  get previousButton() {
    let currentStep = this.state.currentStep;

    // If the current step is not 1, then render the "previous" button
    if (currentStep !== 1) {
      return (
        <button type="button" className="btn btn-secondary float-left" onClick={this._prev}>
          Previous
        </button>
      );
    }

    // ...else return nothing
    return null;
  }

  get nextButton() {
    let currentStep = this.state.currentStep;
    // If the current step is not 3, then render the "next" button
    if (currentStep < 5) {
      return (
        <button type="button" className="btn btn-primary float-right" onClick={this._next}>
          Next
        </button>
      );
    }
    // ...else render nothing
    return null;
  }

  get submitButton() {
    let currentStep = this.state.currentStep;

    // If the current step is the last step, then render the "submit" button
    if (currentStep > 4) {
      return <button className="btn btn-primary float-right">Submit</button>
    }
    // ...else render nothing
    return null;
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className="card">
            <div className="card-header">Create an Account</div>
            <div className="card-body">
              <div className="card-title">
                <MultiStepProgressBar currentStep={this.state.currentStep} />
              </div>
              <p className="card-text" />
              <Step1
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                email={this.state.email}
              />
              <Step2
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                email={this.state.username}
              />
              <Step3
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                email={this.state.password}
              />
              <Step4
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                email={this.state.password}
              />

            </div>
            <div className="card-footer">
              {this.previousButton}
              {this.nextButton}
              {this.submitButton}
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default MasterForm;
