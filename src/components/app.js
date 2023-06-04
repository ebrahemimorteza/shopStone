import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Timer from "./timer";
import Hello from "./hello";
class App extends React.Component{
    constructor(){
        super();
        this.state = {
            time:new Date().toLocaleTimeString(),
            title:"hi bro welcome to the page"
        }
    }
    render(){
        return(
        <div className="main">
        <Hello title={this.state.title}/>
        <Timer handleTitle={this.handleTitle}/>
        </div>
        )
    }
     handleTitle=()=>{
     this.setState({title:"site code"})
    }
}
export default App