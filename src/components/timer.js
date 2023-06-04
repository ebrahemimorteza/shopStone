import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

class Timer extends React.Component{
    constructor(){
        super();
        this.state = {
            time:new Date().toLocaleTimeString()
        }
    }
render(){
    setInterval(()=>{
        this.setState({time:new Date().toLocaleTimeString()})
    },1000)
    return(
        <div>
        {this.state.time}
        </div>
    )
}
}
export default Timer