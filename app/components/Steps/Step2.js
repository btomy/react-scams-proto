import React from "react";

const Step2 = props => {
  if (props.currentStep !== 2) {
    return null;
  }

  return (
    <div className="rich-content">
      <h3>Step2</h3>
      <fieldset className="b-none p-0 m-0 mb-5">
        <div className="text-input">
          <label className="block bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your Email"
            value={props.email} // Prop: The email input data
            onChange={props.handleChange} // Prop: Puts data into the state
          />
        </div>
      </fieldset>
    </div>
  );
};

export default Step2;
