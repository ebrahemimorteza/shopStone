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
            time:0,
            hour:0,
            minute:0,
            second:0,
            isStart:"false"
        }
    }
    componentDidMount(){
        console.log("componentDidMount");
        interval = setInterval(()=>{
            this.setState({time:this.state.time})
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
    startInterval=()=>{
        if(this.state.isStart===("false")){
            this.setState({isStart:"true"})
        interval = setInterval(() => {
            this.setState({second:this.state.second+1})
            if(this.state.second===60){
                this.setState({second:0,minute:this.state.minute+1})
            }
            if(this.state.minute===60){
                this.setState({minute:0,hour:this.state.hour+1})
            }
        },1000);
        }
    }
    stopInterval=()=>{
        this.setState({isStart:"false"})
        clearInterval(interval)
    }
    resetInterval=()=>{
        this.setState({isStart:"false",hour:0,minute:0,second:0})
        clearInterval(interval)
    }
render(){
   console.log("render");
   var h = this.state.hour
   var m = this.state.minute
   var s = this.state.second
    return(
        
        <div>
        {`${h>9 ? h : "0"+h} : ${m>9 ? m : "0"+m} : ${s>9 ? s : "0"+s}`}
        <div className="button_box">       
            <button className="button_action button_start" onClick={this.startInterval}>start</button>
            <button className="button_action button_stop" onClick={this.stopInterval}>stop</button>
            <button className="button_action button_reset" onClick={this.resetInterval}>reset</button>
            <button className="button_action button_reset" onClick={this.props.handleTitle}>resetHook</button>
        </div> 
        </div>
    )
}
}
export default Timer