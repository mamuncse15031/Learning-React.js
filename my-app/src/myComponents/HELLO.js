import React from 'react'

function hello(props){

    function doThis(){

        alert("Button is Clicked");
    }
return(
    <div>
        <button onClick={doThis}>Click me</button>
        <h1> Name: {props.name} and Age: {props.age} </h1>
    </div>
    
);

}

export default hello;