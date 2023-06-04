import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Timer from "./timer";
class Hello extends React.Component{
    render(){
        return(
            <div>
            <h1>{this.props.title}</h1>
            </div>
        )
    }
}
export default Hello