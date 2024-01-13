// Import the App component stylesheet
import './App.css';
// Import the Counter and Logo components
import Counter from './Components/Counter';
import Logo from '../src/Components/Logo';

// Function component for the main App
function App() {
  // Return JSX for rendering the App component
  return (
    <div className='App'>
      {/* Render the Logo component */}
      <Logo />

      {/* Render the Counter component */}
      <Counter />
    </div>
  );
}

// Export the App component as the default export
export default App;
