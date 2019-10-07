import React, { Component } from "react";

import data from "./scams.json";

import StepOne from "./components/Steps/StepOne";
import StepTwo from "./components/Steps/StepTwo";
import ButtonContainer from "./components/ButtonContainer/ButtonContainer";

class Steps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      currentStep: 1,
      selected: "email",
      nextStepID : "Q-email"
    };
  }

  _handleChange = (e,l) => {
    e.preventDefault();
    this.setState({
      selected: e.target.value,
      nextStepID: l.NextStepId
    });
  };

  _next = (e) => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 5 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep
    });
  };

  _prev = (e) => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  };

  render() {
    const { data, selected, currentStep, nextStepID } = this.state;
    console.log(this.state);
    const FirstQuestionId = data.StartingQuestionId;
    const FirstQuestion = data
      ? data["Questions"].filter(item => {
          return item.Id === FirstQuestionId;
        })
      : null;

    const FirstQuestionAnswers = FirstQuestion.map(question => {
      return question.Answers.filter(answer => answer);
    });

    const SecondQuestion = selected ?  data["Questions"].filter( item => {
        return item.Id === nextStepID
    }): null;
    console.log("Second", SecondQuestion);
    const SecondQuestionAnswers = SecondQuestion && SecondQuestion.map( item => {
        return item.Answers.filter(answer => answer)
    })

    return (
      <React.Fragment>
        <h1>{data.Title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.Introduction }}></div>

        <form action="" className="rich-content line-limit-width">
          <StepOne
            currentStep={currentStep}
            question={FirstQuestion}
            results={FirstQuestionAnswers[0]}
            selected={selected}
            handleChange={this._handleChange}
          />

          <StepTwo
            currentStep={currentStep}
            question={SecondQuestion}
            results={SecondQuestionAnswers[0]}
            selected={selected}
            handleChange={this._handleChange}
          />

          <div className="button-group flex pv-4">
            <ButtonContainer
              currentStep={currentStep}
              next={this._next}
              previous={this._prev}
            />
          </div>
        </form>
      </React.Fragment>
    );
  }
}
export default Steps;