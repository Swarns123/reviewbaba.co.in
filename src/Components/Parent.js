import React, {Component} from "react";
import Child1Name from "./child";

class ParentName extends Component{

    constructor(){
        super()
        this.state = {
            parentName : 'I am the Parent',
        }

        this.childIntervention = this.childIntervention.bind(this);
    }

    childIntervention(ourchild){
        console.log(`Hello ${this.state.parentName} of ${ourchild}`);
    }


    render(){
        return (
        <div><Child1Name childHandler={this.childIntervention}></Child1Name></div>
        )
    }
}

export default ParentName;