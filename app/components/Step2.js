import React from "react";

const Step2 = props => {
  if (props.currentStep !== 2) {
    return null;
  }

  return (
    <>
      <p>How can we reach you?</p>
      <div className="form-group">
        Step2
      </div>
    </>
  );
};

export default Step2;
