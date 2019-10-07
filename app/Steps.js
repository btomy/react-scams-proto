import React, { Component } from "react";

import data from "./scams.json";
import FormRadioCheck from "./components/FormRadioCheck/component";
import FormLabel from "./components/FormLabel/component";
import Step1 from "./components/Steps/Step1.js";

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

  render() {
    const { data, selected, currentStep } = this.state;
    const FirstQuestionId = data.StartingQuestionId;
    const FirstQuestion = data ? data["Questions"].filter(item => {
          return item.Id === FirstQuestionId;
    }) : null;

    const FirstQuestionAnswers = FirstQuestion.map(question => {
      return question.Answers.filter(answer => answer);
    });

    return (
      <React.Fragment>
        <h1>{data.Title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.Introduction }}></div>

        <StepOne
          currentStep={currentStep}
          questions={FirstQuestion}
          results={FirstQuestionAnswers[0]}
          selected={selected}
          handleChange={this._handleChange}
        />
      </React.Fragment>
    );
  }
}
export default Steps;

const StepOne = ({currentStep,questions,results,selected,handleChange}) => {
  if (currentStep !== 1) {
    return null;
  }
  return (
    <div className="rich-content">
      <QuestionBlock questions={questions} />

      <fieldset className="p-0 m-0">
        <Answers
          results={results}
          selected={selected}
          handleChange={handleChange}
        />
      </fieldset>
    </div>
  );
};

const QuestionBlock = ({ questions }) => {
  const QuestionBlock = questions.map(question => question.QuestionText);
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
