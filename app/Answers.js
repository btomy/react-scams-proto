import React, { Component } from "react";
import FormRadioCheck from "./components/FormRadioCheck/component";
import FormLabel from "./components/FormLabel/component";

const Answers = ({ results, selected, handleChange }) => {
   
    if (!results) {
        return null
    }
    const resultsBlock = results.map((result, id) => {
      return (
        <div className="block mv-2" key={id}>
          <div className="checkbox">
            <FormRadioCheck
              type="checkbox"
              id={result.AnswerCode}
              name={result.AnswerCode}
              value={result.AnswerCode}
              checked={result.AnswerCode === selected}
              handleChange={(e)=>handleChange(e,result)}
              classNames="input"
            />
            <FormLabel
              htmlFor={result.AnswerCode}
              classNames="ml-2 lh-2 semi-bold"
            >
              {result.Answer}
            </FormLabel>
          </div>
        </div>
      );
    });
    return <React.Fragment>{resultsBlock}</React.Fragment>;
  };
  
  export default Answers;