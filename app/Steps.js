import React, { Component } from 'react';

import data from './scams.json';

import StepOne from './components/Steps/StepOne';
import StepTwo from './components/Steps/StepTwo';
import ShowSummary from './components/Steps/ShowSummary';
import ButtonContainer from './components/ButtonContainer/ButtonContainer';
import { log } from 'util';

class Steps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      currentStep: 1,
      isResult: false,
      scams: [{ selected: 'phone', nextStepID: 'Q-phone' }]
    };
  }

  _handleChange = (e, l) => {
    //const check ="R";
    // if (l.NextStepId.indexOf(check) !== -1) {
    //   this.setState({
    //     showSummary: true,
    //     selected: e.target.value,
    //     nextStepID: l.NextStepId
    //   })
    //   return;
    // } else{
    this.setState({
      scams: [
        {
          selected: e.target.value,
          nextStepID: l.NextStepId
        }
      ]
    });
  };

  _next = e => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 5 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep
    });
  };

  _prev = e => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  };

  render() {
    const { data, currentStep, scams, isResult } = this.state;
    //console.log(scams);
    const FirstQuestionId = data.StartingQuestionId;
    const FirstQuestion = data
      ? data['Questions'].filter(item => item.Id === FirstQuestionId)
      : null;

    const FirstQuestionAnswers = FirstQuestion.map(question => {
      return question.Answers.filter(answer => answer);
    });

    const SecondQuestion = data['Questions'].filter(
      item => item.Id === scams[0]['nextStepID']
    );
    //console.log('Second', SecondQuestion);
    const SecondQuestionAnswers =
      SecondQuestion &&
      SecondQuestion.map(item => {
        return item.Answers.filter(answer => answer);
      });

    const summary = data['ResultSummary'].filter(
      item => item.Id === scams[0]['nextStepID']
    );
    //console.log(summary);

    const Question = (scams.length === 1) ? FirstQuestion : SecondQuestion; 
    console.log(Question)
    return (
      <React.Fragment>
        <h1>{data.Title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.Introduction }}></div>

        <form action="" className="rich-content line-limit-width">
          <StepOne
            currentStep={currentStep}
            question={Question}
            results={FirstQuestionAnswers[0]}
            selected={scams[0]['selected']}
            handleChange={this._handleChange}
          />
          {/* <StepTwo
            currentStep={currentStep}
            question={SecondQuestion}
            results={SecondQuestionAnswers[0]}
            selected={scams[0]["selected"]}
            handleChange={this._handleChange}
          /> */}

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
