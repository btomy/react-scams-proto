import React from "react";

const StepThree = ({currentStep,summary})=> {
  if (currentStep !== 3) {
    return null;
  }
  console.log(summary);
  return (
    <React.Fragment>
      
      <fieldset className="b-none p-0 m-0 mb-4">
      <p>Hello</p>
        <div dangerouslySetInnerHTML={{ __html: summary }}></div>
      </fieldset>
    </React.Fragment>
  );
};

export default StepThree;