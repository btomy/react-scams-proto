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
        
        return(
            <React.Fragment>
                <h1>{data.Title}</h1>
                <div dangerouslySetInnerHTML={{__html: data.Introduction}}></div>
            </React.Fragment>
        )
    }
}
export default Steps;