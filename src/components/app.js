import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState,useEffect, useContexte} from "react";
import Timer from "./timer";
import Hello from "./hello";
import TsetContext from "../context/context";
import TimeList from "./timeList";
// class App extends React.Component{
//     constructor(){
//         super();
//         this.state = {
//             time:new Date().toLocaleTimeString(),
//             title:"hi bro welcome to the page"
//         }
//     }
//     render(){
//         return(
//         <div className="main">
//         <Hello title={this.state.title}/>
//         <Timer handleTitle={this.handleTitle}/>
//         </div>
//         )
//     }
//      handleTitle=()=>{
//      this.setState({title:"site code"})
//     }
// }
//*******************************************************functional */
const App=()=>{
    const[title,setTitle]=useState('welcome with hoock');
    const[islight,setIsLight]=useState(false);
    const[timeArr,setTimeArr]=useState(["01:05:12","02:06:12"])
    // var a=1;
    // var b=2;
    // [a,b]=[1,2]

    const handleTitle = ()=>{
        setTitle('welcome morteza');
            }
    const handleIsLight = ()=>{
        setIsLight(!islight);
            }
            useEffect(()=>{
console.log("didmounth");
return()=>{
    console.log("will");
}

            },[islight])
    return(
        <TsetContext.Provider value={{timeArr:timeArr,setTimeArr:setTimeArr}}>
        <div className="main" style={{background:islight ? "white" : "green"}}>
         <Hello title={title}/>
        <Timer  handleIsLight={handleIsLight} handleTitle={handleTitle}/>
        <TimeList /> 
        </div>
        </TsetContext.Provider>
    )
 
}
export default App