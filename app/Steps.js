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
      currentStep: 0,
      isResult: false,
      currentSelection: null,
      scamsHistory: []
    };
  }

  removeDuplicates = (array, key) => {
    return array.filter(
      (obj, index, self) => index === self.findIndex(el => el[key] === obj[key])
    );
  };

  _addtoArray = (arr, obj) => {
    const currentArrLength = arr.length;
    const { currentStep } = this.state;
    const found = arr.some(el => el.selected === obj.selected);

    if (currentArrLength == 0) {
      arr.push({
        selected: obj.AnswerCode,
        NextStepId: obj.NextStepId
      });
    } else if (!found) {
      if (currentStep == currentArrLength) {
        arr.unshift({
          selected: obj.AnswerCode,
          NextStepId: obj.NextStepId
        });
        arr.pop();
      } else {
        arr.push({
          selected: obj.AnswerCode,
          NextStepId: obj.NextStepId
        });
      }
    }

    return arr;
  };

  _checkIsResult = test => {
    const check = "R";
    let result = false;
    if (test.NextStepId.indexOf(check) !== -1) {
      result = true;
    }
    return result;
  };

  _handleChange = (e, data) => {
    const { currentStep, scamsHistory } = this.state;
    //const isResult = this._checkIsResult(data);
    //console.log('data ', data);
    //const scamsArray = this._addtoArray(scams, data);
    this.setState({
      ...this.state,
      currentSelection: {
        AnswerCode: data.AnswerCode,
        NextStepId: data.NextStepId
      }
    });
  };

  _next = e => {
    const { currentSelection, scamsHistory } = this.state;
    let currentStep = this.state.currentStep + 1;
    const isResult =
      currentStep > 1 ? this._checkIsResult(currentSelection) : null;
    //check if anything exist in currentSelection else

    if (isResult) {
      this.setState({
        ...this.state,
        isResult: true
      });
    } else if (currentSelection) {
      this.setState({
        currentStep: currentStep,
        scamsHistory: [...scamsHistory, currentSelection]
      });
    } else {
      //show validation
    }
  };

  _prev = e => {
    const { currentSelection, scamsHistory } = this.state;
    let currentStep = this.state.currentStep - 1;
    console.log("Hist", scamsHistory);
    this.setState({
      ...this.state,
      currentStep: currentStep,
      currentSelection: {
        AnswerCode: scamsHistory[currentStep].AnswerCode,
        NextStepId: scamsHistory[currentStep].NextStepId
      }
    });
  };

  render() {
    const {
      data,
      currentStep,
      scamsHistory,
      isResult,
      currentSelection
    } = this.state;
    console.log("state ", this.state);

    const FirstQuestionId = data.StartingQuestionId;
    const FirstQuestion = data
      ? data["Questions"].filter(item => item.Id === FirstQuestionId)
      : null;
    const OtherQuestion =
      currentStep > 0
        ? data["Questions"].filter(
            item => item.Id === scamsHistory[currentStep - 1]["NextStepId"]
          )
        : null;

    const FirstQuestionAnswers = FirstQuestion.map(question => {
      return question.Answers.filter(answer => answer);
    });
    const OtherQuestionAnswers =
      OtherQuestion &&
      OtherQuestion.map(item => {
        return item.Answers.filter(answer => answer);
      });

    // const summary = isResult ? data['ResultSummary'].filter(
    //   item => item.Id === scams[currentStep]['NextStepId']
    // ): null;
    // console.log(summary);

    const Question = currentStep > 0 ? OtherQuestion : FirstQuestion;
    const Answers =
      currentStep > 0 ? OtherQuestionAnswers[0] : FirstQuestionAnswers[0];

    return (
      <React.Fragment>
        <h1>{data.Title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.Introduction }}></div>

        <form action="" className="rich-content line-limit-width">
          <StepOne
            currentStep={currentStep}
            isResult={isResult}
            summary={"summary"}
            question={Question}
            results={Answers}
            currentSelection={currentSelection}
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
