import React from "react";

const Message = (props) => {
    return(
        <div>
            <h1>{props.movie} is directed by {props.director}</h1>
            {props.children}
        </div>
    )
}

export default Message