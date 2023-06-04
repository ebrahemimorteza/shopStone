import { useContext } from "react";
import Item from "./item";
import TsetContext from "../context/context";
const TimeList = (props) => {
    const context= useContext(TsetContext)
    return ( 
        <div className="main_time_list">
        {props.children.map((c)=>(
            <Item key={Math.random()}>{c}</Item>
        ))}
        </div>
     );
}
 
export default TimeList;