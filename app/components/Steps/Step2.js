import React from "react";

const Step2 = props => {
  if (props.currentStep !== 2) {
    return null;
  }

  return (
    <div className="rich-content">
      <h3>Who you’ve been in contact with </h3>
      <h4>
        Do you have any information on the identity of the organisation or
        individual?
      </h4>
      <fieldset className="b-none p-0 m-0 mb-5">
        <div className="block mv-2">
          <div className="checkbox">
            <input
              value="Yes"
              id="Yes"
              name="Yes"
              checked={props.selected === "Yes"}
              type="checkbox"
              onChange={props.handleChange}
            />
            <label htmlFor="Yes" className="ml-2 lh-2 semi-bold pointer">
              Yes
            </label>
          </div>
        </div>
        <div className="block mv-2">
          <div className="checkbox">
            <input
              value="No"
              id="No"
              name="No"
              checked={props.selected === "No"}
              type="checkbox"
              onChange={props.handleChange}
            />
            <label htmlFor="No" className="ml-2 lh-2 semi-bold pointer">
              No
            </label>
          </div>
        </div>
      </fieldset>
      
    </div>
  );
};

export default Step2;
