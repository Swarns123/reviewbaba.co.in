import React, { useState } from "react";
import Child2Name from "./child2";

function Child1Name(props){

    const [parent1, setParent1] = useState('child1');
    function child2Intervention(Child2Name){
        setParent1(Child2Name);
        console.log(`I am the parent ${parent1} and my child is ${Child2Name}`);
    }
    return(
        <div>
            <button onClick={()=> {props.childHandler("child1")}}>CHILD GREETINGS</button>
            <Child2Name child2Handler = {child2Intervention}></Child2Name>
        </div>
    )
}

export default Child1Name;