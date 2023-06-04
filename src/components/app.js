import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Timer from "./timer";
import Hello from "./hello";
class App extends React.Component{
    constructor(){
        super();
        this.state = {
            time:new Date().toLocaleTimeString()
        }
    }
    render(){
        return(
        <div className="main">
        <Hello/>
        <Timer/>
        </div>
        )
    }
}
export default App