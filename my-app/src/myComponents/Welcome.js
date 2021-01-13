import React, {Component} from 'react'

class Welcome extends Component{

    doThisFromClass(a){

        alert(a);
    }

    render(){

        return <div>
            <button onClick={this.doThisFromClass.bind(this,"I am from class")}> Click Me </button>
            <h1>Welcome to {this.props.name}</h1>
        </div>
    }
}
export default Welcome;
