import './App.css';
import Counter from './components/Counter';
import Button from './components/Button';
import { useState } from 'react';

function App() {

  const [input, setinput] = useState(0);
  
  function sum (){
    setinput(input+1);
  }
  function rest (){
    setinput(input-1);
  }

  return (
    <div className="App">
      <div className='general-container'>

        <Counter 
        number={input}
        />

        <Button
          isSum = {true}
          input = '+'
          action = {sum}
        />

        <Button
          isSum = {false}
          input = '-'
          action = {rest}
        />
      </div>
      
    </div>
  );
}

export default App;
