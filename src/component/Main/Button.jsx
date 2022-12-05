import React from "react";


const Button = (props) => {
 
   
return (
    <div className="Menu"> 
        <button className='p' onClick={props.handleIncrementAttr}>Increment</button>
        <button className='p1' onClick={props.handleDecrementAttr}>Decrement</button>
        <button className='p2' onClick={props.handleResetAttr}>Reset</button>
    </div>
)
}
export default Button;
