import React from "react";

function Child2Name(props){
    return(
        <div>
            <button onClick={()=> {props.child2Handler("child2")}}>CHILD2 GREETINGS</button>
        </div>
    )
}

export default Child2Name;