import React, {Component} from "react";

class Greet extends Component {

    constructor(props){
        super(props)
        this.state = {
            message: <div>{this.props.movie} is directed by {this.props.director}</div>
        }
    }

    clickedMsg(props){
        this.setState({
            message: <div>Thanks for watching {this.props.movie}</div>
        })
    }

    render(){
        return (
        <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=> this.clickedMsg()}>STREAM IT</button>
        </div>
        )
    }
}

export default Greet