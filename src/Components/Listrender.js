import React from "react";

function RenderList(){
    const employees = [{
        name : "Swarnendu Saha",
        age : 25,
        Skills : "Angular",
        id:1776426
    },
    {
        name : "Poulami Mukherjee",
        age : 26,
        Skills : "ReactJS, Node JS and Block Chain",
        id:1887654
    },
]

    const employeeList = employees.map (employee => <h2 key={employee.id}>Hey, this is {employee.name}. 
    I am {employee.age} years old and my skills include {employee.Skills}</h2>)

    return (
        <div>{employeeList}</div>
    )
}

export default RenderList;