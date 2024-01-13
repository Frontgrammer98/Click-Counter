// Import React and useState hook from React library
import React, { useState } from 'react';

// Import the stylesheet for Counter component
import '../Styles/Counter.css';

// Functional component for the Counter
const Counter: React.FC = () => {
  // State hook to manage the count value
  const [count, setCount] = useState<number>(0);

  // Function to increment the count
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // Function to decrement the count
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  // Function to reset the count to 0
  const reset = () => {
    setCount(0);
  };

  // JSX for rendering the Counter component
  return (
    <div className='counter-container'>
      <h1 className='counter-title'>Click Counter</h1>
      <div 
        className='counter-number'>
        {count}
      </div>
      <button 
        className='increment-button' 
        onClick={increment}>
        +
      </button>
      <button 
        className='decrement-button' 
        onClick={decrement}>
        -
      </button>
      <button 
        className='reset-button' 
        onClick={reset}>
        Reset
      </button>
    </div>
  );
};

// Export the Counter component as the default export
export default Counter;
