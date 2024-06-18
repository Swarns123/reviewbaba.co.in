import React, {Component} from "react";

class ConditionGreet extends Component {
    constructor(){
        super()

        this.state = {
            logIn: true
        }
    }

    render(){
        // if(this.state.logIn){
        //     return(
        //         <div>Hi Swarnendu, you're logged in now.</div>
        //     )
        // }
        // else{
        //     return(
        //         <div>Hi Guest.</div>
        //     )
        // }
    //    const msg = (this.state.logIn) ? (<div>Hi Swarnendu, you're logged in now.</div>) : (<div>Hi Guest.</div>)
    //    return msg;

    return this.state.logIn && <div>Hi Swarnendu, you're logged in now.</div>
    }
}

export default ConditionGreet;