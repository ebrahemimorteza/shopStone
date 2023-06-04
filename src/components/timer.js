import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
var interval;
var timer=100;
var timer2;
class Timer extends React.Component{
    constructor(){
        super();
        this.state = {
            time:new Date().toLocaleTimeString()
        }
    }
    componentDidMount(){
        console.log("componentDidMount");
        interval = setInterval(()=>{
            this.setState({time:new Date().toLocaleTimeString()})
        },1000)
        setInterval(()=>{
            timer--;
        },1000)
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
        if(timer===90){
            console.log("you winnnnnnnnn");
        }
    }
    componentWillUnmount(){
        console.log("componentWillUnmount");
    }
render(){
   console.log("render");
    return(
        <div>
        {this.state.time}
        {timer}
        </div>
    )
}
}
export default Timer