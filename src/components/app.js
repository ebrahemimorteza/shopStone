import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState} from "react";
import Timer from "./timer";
import Hello from "./hello";
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
    const[title,setTitle]=useState('welcome with hoock')
    // var a=1;
    // var b=2;
    // [a,b]=[1,2]
    const handleTitle = ()=>{
        setTitle('welcome morteza');
            }
    return(
        <div className="main">
         <Hello title={title}/>
        <Timer handleTitle={handleTitle}/>
        </div>
    )
 
}
export default App