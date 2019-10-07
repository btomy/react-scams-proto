import React, { Component } from "react";

import data from "./scams.json";
import FormRadioCheck from "./components/FormRadioCheck/component";
import FormLabel from "./components/FormLabel/component";
import Step1 from "./components/Steps/Step1.js";
import ButtonContainer from "./components/ButtonContainer/ButtonContainer";

class Steps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      currentStep: 1,
      selected: "email"
    };
  }

  _handleChange = e => {
    e.preventDefault();
    this.setState({
      selected: e.target.value
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
    const { data, selected, currentStep } = this.state;
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

          <div className="button-group flex pv-4">
            <ButtonContainer 
                currentStep={currentStep}
                next={this._next}
                previous={this._prev} />
          </div>
        </form>
      </React.Fragment>
    );
  }
}
export default Steps;

const StepOne = ({currentStep,question,results,selected,handleChange})=> {
  if (currentStep !== 1) {
    return null;
  }
  return (
    <React.Fragment>
      <QuestionBlock question={question} />

      <fieldset className="b-none p-0 m-0 mb-4">
        <Answers
          results={results}
          selected={selected}
          handleChange={handleChange}
        />
      </fieldset>
    </React.Fragment>
  );
};

const QuestionBlock = ({ question }) => {
  const QuestionBlock = question.map(question => question.QuestionText);
  return <h3>{QuestionBlock}</h3>;
};

const Answers = ({ results, selected, handleChange }) => {
  const resultsBlock = results.map((result, id) => {
    return (
      <div className="block mv-2" key={id}>
        <div className="checkbox">
          <FormRadioCheck
            type="checkbox"
            id={result.AnswerCode}
            name={result.AnswerCode}
            value={result.AnswerCode}
            checked={result.AnswerCode === selected}
            handleChange={handleChange}
            classNames="input"
          />
          <FormLabel
            htmlFor={result.AnswerCode}
            classNames="ml-2 lh-2 semi-bold"
          >
            {result.Answer}
          </FormLabel>
        </div>
      </div>
    );
  });
  return <React.Fragment>{resultsBlock}</React.Fragment>;
};
