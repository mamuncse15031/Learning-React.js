import React from 'react'

function hello(props){

    function doThis(a){

        alert(a);
    }
return(
    <div>
        <button onClick={doThis.bind(this,"I am from function")}>Click me</button>
        <h1> Name: {props.name} and Age: {props.age} </h1>
    </div>
    
);

}

export default hello;