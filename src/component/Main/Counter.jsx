import React from "react";
import { useState } from 'react';
import Button from './Button';
import Number from './Number';

const Counter = (props) => {
 let [ number, setNumber ] = useState(0);
  
 const handleIncrementFunc = () => {
    setNumber(number + 1);
 }

    const handleDecrementFunc = () => {
       setNumber(number - 1);
    }

    const handleResetFunc = () => {
           setNumber(0);
        }

    return (
        <div>
       <Number number={number} />
          <Button
          handleIncrementAttr={handleIncrementFunc}
         handleDecrementAttr={handleDecrementFunc}
          handleResetAttr={handleResetFunc}
          />
        </div>
    );
}
export default Counter;
