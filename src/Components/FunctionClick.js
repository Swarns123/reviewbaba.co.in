import React from "react";

function FunctionClick(){

    function subscribed(){
        console.log("Channel is subscribed");
    }

    return(
        <div>
            <button onClick={subscribed}>Subscribe</button>
        </div>
    )
}

export default FunctionClick