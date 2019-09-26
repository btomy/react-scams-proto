import React from "react";

const Step4 = props => {
  if (props.currentStep !== 4) {
    return null;
  }

  return (
    <>
      <p>How can we reach you?</p>
      <div className="form-group">
       Step4
      </div>
    </>
  );
};

export default Step4;
