import React, {Component} from "react";

class Click extends Component {

constructor(){
    super()

    this.state = {
        msg: "Hello, it's been a pleasure meeting you!!!"
    }

    this.greetings = this.greetings.bind(this);
}

greetings(){
    this.setState(
        {
            msg:'Bye, see you soon!!!'
        }
    )
}

    render = () => <div>
        <h1>{this.state.msg}</h1>
        <button onClick={this.greetings}>SEE OFF</button>
    </div>
}

export default Click