// Importing the CSS file to apply styles
import './App.css';

// Importing necessary components and hooks from React
import Counter from './components/Counter';
import Button from './components/Button';
import { useState } from 'react';

// Main component - App
function App() {
  // State hook to manage the input value
  const [input, setinput] = useState(0);
  
  // Function to increment the input value
  function sum() {
    setinput(input + 1);
  }

  // Function to decrement the input value
  function rest() {
    setinput(input - 1);
  }

  // Render the main application
  return (
    <div className="App">
      {/* Main container for the application */}
      <div className='general-container'>

        {/* Display the current input value using the Counter component */}
        <Counter 
          number={input}
        />

        {/* Button for incrementing the input value */}
        <Button
          isSum={true}   // Flag to determine the operation (sum)
          input='+'      // Label on the button
          action={sum}    // Function to be executed on button click
        />

        {/* Button for decrementing the input value */}
        <Button
          isSum={false}   // Flag to determine the operation (subtract)
          input='-'      // Label on the button
          action={rest}   // Function to be executed on button click
        />
      </div>
    </div>
  );
}

// Exporting the App component for use in other files
export default App;
