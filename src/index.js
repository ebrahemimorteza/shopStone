import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
class Timer extends React.Component{
render(){
    return(
        <div>
        <h1>time eday</h1>
        </div>
    )
}
}
class App extends React.Component{
    render(){
        return(
<div>
<Timer/>
    {new Date().toLocaleTimeString()}
    </div>
        )
    }
}
const tick = ()=>{
    ReactDOM.render(<App/>, document.getElementById('root'));  
}
setInterval(()=>{tick()},1000)