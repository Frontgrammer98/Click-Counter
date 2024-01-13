// Importing the React library and the Counter component's styles
import React from "react";
import '../styles/Counter.css';

// Counter component that displays a number
function Counter ({ number }) {
    return (
        // Container div for styling purposes
        <div className="counter-container">
            {/* Displaying the current number inside a paragraph element */}
            <p>{number}</p>
        </div>
    );
}

// Exporting the Counter component for use in other files
export default Counter;
