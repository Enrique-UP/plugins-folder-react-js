import logo from './logo.svg';
import './App.css';
import Typewriter from 'typewriter-effect';

function App() {
  return (
    <Typewriter
  options={{
    strings: ['Hello', 'World'],
    autoStart: true,
    loop: true,
  }}
/>
  );
}

export default App;
