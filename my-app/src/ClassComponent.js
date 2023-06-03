import React, {Component} from "react";

class ClassComponent extends Component{
    render(){
        return(
            <div>
                <h1>This is a Class Component</h1>
                <p>It extends the component class</p>
                <p>Hello, {this.props.name}!</p>
            </div>           
        );
    }
}
export default ClassComponent;