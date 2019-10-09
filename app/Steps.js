import React, { Component } from 'react';

import data from './scams.json';

import StepOne from './components/Steps/StepOne';
import StepTwo from './components/Steps/StepTwo';
import ShowSummary from './components/Steps/ShowSummary';
import ButtonContainer from './components/ButtonContainer/ButtonContainer';

class Steps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      currentStep: 1,
      isResult: false,
      scams: [{selected : null, NextStepId: null }]
    };
  }

  _addtoArray = (arr, obj) => {
    const currentObj = obj;
    let dummyObj = {
        selected: currentObj.AnswerCode,
        NextStepId: currentObj.NextStepId
    }
    const currentArrLength = arr.length;
    const { currentStep } = this.state;

    const found = arr.some(el => el.selected === currentObj.selected);
    
    if (!found) {
      arr.push(dummyObj);
    }

    return arr;
  };

  _checkIsResult = test => {
    const check = 'R';
    let result = false;
    if (test.NextStepId.indexOf(check) !== -1) {
      result = true;
    }
    return result;
  };

  _handleChange = (e, data) => {
    const { currentStep, scams } = this.state;
    const isResult = this._checkIsResult(data);
    const scamsArray = this._addtoArray(scams, data);
    console.log(scamsArray);
    if (isResult) {
      this.setState({
        ...this.state,
        isResult: true
      });
    } else {
      // if() {

      // } else{

      // }

      this.setState({
        scams: [
          {
            selected: e.target.value,
            NextStepId: data.NextStepId
          }
        ]
      });
    }
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
    console.log('state ', this.state);

    const FirstQuestionId = data.StartingQuestionId;
    const FirstQuestion = data
      ? data['Questions'].filter(item => item.Id === FirstQuestionId)
      : null;
    const OtherQuestion =
      currentStep > 1
        ? data['Questions'].filter(item => item.Id === scams[0]['NextStepId'])
        : null;

    const FirstQuestionAnswers = FirstQuestion.map(question => {
      return question.Answers.filter(answer => answer);
    });
    const OtherQuestionAnswers =
      OtherQuestion &&
      OtherQuestion.map(item => {
        return item.Answers.filter(answer => answer);
      });

    // const summary = data['ResultSummary'].filter(
    //   item => item.Id === scams[0]['NextStepId']
    // );
    //console.log(summary);

    const Question = currentStep > 1 ? OtherQuestion : FirstQuestion;
    const Answers =
      currentStep > 1 ? OtherQuestionAnswers[0] : FirstQuestionAnswers[0];
    const selected = scams.length > 0 ? scams[0]["selected"] : scams[0]["selected"];

    return (
      <React.Fragment>
        <h1>{data.Title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.Introduction }}></div>

        <form action="" className="rich-content line-limit-width">
          <StepOne
            currentStep={currentStep}
            question={Question}
            results={Answers}
            selected={scams[0]["selected"]}
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
