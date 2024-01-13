import React from "react";
import '../styles/Button.css'

function Button ({ isSum, input, action }){
    return(
        <div className={isSum ? 'increment' : 'decrement'} onClick={action}>{input}</div>        
    );
}
export default Button;