import React, {Component} from "react";

import data from "./scams.json"
class Steps extends Component{
    constructor(props) {
        super(props)
        this.state = {
            data : data
        }
    }

    _handleChange = () => {

    }

    render() {
        const {data} = this.state
        console.log(data);
        const FirstQuestionId = data.StartingQuestionId
        const FirstQuestion = data ? data["Questions"].filter( item => {
            return item.Id === FirstQuestionId
        }): null;
        console.log(FirstQuestion);
        return(
            <React.Fragment>
                <h1>{data.Title}</h1>
                <div dangerouslySetInnerHTML={{__html: data.Introduction}}></div>

                <div className="questionBlock">
                    <h3>{FirstQuestion.map( question => question.QuestionText )}</h3>
                </div>

                <div className="answerBlock">
                    <h3>{FirstQuestion.map( question => question.Answers.map( answer => answer.Answer) )}</h3>
                </div>
            </React.Fragment>
        )
    }
}
export default Steps;