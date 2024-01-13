import React from "react";
import '../styles/Counter.css';

function Counter ({ number }) {
    return(
        <div className="counter-container">
            <p>{number}</p>
        </div>
    );
}

export default Counter;