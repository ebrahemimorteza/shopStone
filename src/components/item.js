import { useContext } from "react";
import TsetContext from "../context/context";

const Item = (props) => {
    const context= useContext(TsetContext)
   const handleDeletetem=(e)=>{
    alert(e.target.innerHTML)
    context.setTimeArr(context.timeArr.filter(t=>t != e.target.innerHTML))
   }
    return ( 
        <div onClick={handleDeletetem}>
        {props.children}
        </div>
     );
}
 
export default Item;