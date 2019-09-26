import React from "react";

const Step1 = props => {
  if (props.currentStep !== 1) {
    return null;
  }

  return (
    <>
      <p>How can we reach you?</p>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter your Email"
          value={props.email} // Prop: The email input data
          onChange={props.handleChange} // Prop: Puts data into the state
        />
      </div>
    </>
  );
};

export default Step1;
