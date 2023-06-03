import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const tick = ()=>{
    const elem=(
    <div>
    <h1>time day</h1>
    {new Date().toLocaleTimeString()}
    </div>
    )
    ReactDOM.render( elem, document.getElementById('root'));  
}
setInterval(()=>{tick()},1000)