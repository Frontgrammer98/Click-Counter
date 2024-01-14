// Importing the React library and the Button component's styles
import React from "react";
import '../styles/Button.css';

// Button component that represents a clickable button
function Button({ style, input, action }) {
    return (
        // Div representing the button with a dynamic class based on isSum prop
        <div className={style} onClick={action}>
            {/* Displaying the label on the button */}
            {input}
        </div>
    );
}

// Exporting the Button component for use in other files
export default Button;
