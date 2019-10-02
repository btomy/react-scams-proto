import React from "react";

const Step1 = props => {
  if (props.currentStep !== 1) {
    return null;
  }

  return (
    <div className="rich-content">
      <h3>Where did you come across the possible scam? </h3>

      <fieldset className="b-none p-0 m-0 mb-5">
        {props.scams &&
          props.scams.map( (item,id) => {
            return (
              <div key={id} className="block mv-2">
                <div className="checkbox">
                  <input
                    value={item}
                    id={item}
                    name={item}
                    checked={item === props.selectedItem}
                    type="checkbox"
                    onChange={props.handleChange}
                  />
                  <label htmlFor={item} className="ml-2 lh-2 semi-bold pointer">
                    {item}
                  </label>
                </div>
              </div>
            );
          })}
      </fieldset>
    </div>
  );
};

export default Step1;
