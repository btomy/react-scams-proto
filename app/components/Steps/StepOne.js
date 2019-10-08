import React from "react";
import QuestionBlock from "../../QuestionBlock";
import Answers from "../../Answers";
import ShowSummary from "./ShowSummary";

const StepOne = ({currentStep,question,results,selected,handleChange})=> {
  // if (currentStep !== 1) {
  //   return null;
  // }
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

export default StepOne;
