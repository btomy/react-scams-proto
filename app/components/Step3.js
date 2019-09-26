import React from "react";

const Step3 = props => {
  if (props.currentStep !== 3) {
    return null;
  }

  return (
    <>
      <p>How can we reach you?</p>
      <div className="form-group">
       Step3
      </div>
    </>
  );
};

export default Step3;
