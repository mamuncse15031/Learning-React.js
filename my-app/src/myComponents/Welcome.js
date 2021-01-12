import React, {Component} from 'react'

class Welcome extends Component{

    doThisFromClass(){

        alert("Button is clicked");
    }

    render(){

        return 
        <div>
            <button onClick={this.doThisFromClass}></button>
            <h1>Welcome to {this.props.name}</h1>
        </div>
    }
}
export default Welcome;
