import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import App from "./components/app";
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
class Hello extends React.Component{
    render(){
        return(
            <div>
            <h1>time eday</h1>
            </div>
        )
    }
}

const tick = ()=>{
    ReactDOM.render(<App/>, document.getElementById('root'));  
}
setInterval(()=>{tick()},1000)