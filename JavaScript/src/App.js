// Importing the CSS file to apply styles
import './App.css';
import { GrPowerReset } from "react-icons/gr";

// Importing necessary components and hooks from React
import Counter from './components/Counter';
import Button from './components/Button';
import Logo from './components/Logo';
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

   // Function to reset the input value
   function reset() {
    setinput(0);
  }

  // Render the main application
  return (
    <div className="App">

       {/*Re Developeer logo */}

       <Logo/>

       
      {/* Main container for the application */}
      <div className='general-container'>

        {/* Display the current input value using the Counter component */}
        <Counter 
          number={input}
        />

        {/* Button for incrementing the input value */}
        <Button
          style={'increment'}   // Flag to determine the operation (sum)
          input='+'      // Label on the button
          action={sum}    // Function to be executed on button click
        />

        {/* Button for decrementing the input value */}
        <Button
          style={'decrement'}   // Flag to determine the operation (subtract)
          input='-'      // Label on the button
          action={rest}   // Function to be executed on button click
        />
        {/* Button sets value to 0 */}
        <Button
          style={'reset'}   // Flag to determine the operation (reset)
          input= {<GrPowerReset size={22}/>}   // Label on the button with a react icon and size it
          action={reset}   // Function to be executed on button click
        />
      </div>
    </div>
  );
}

// Exporting the App component for use in other files
export default App;
