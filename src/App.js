import React from 'react';
import Calculator from './components/Calculator';
import './css/style/Style.css';
import './css/color/Color.css';
import './App.css';

function App() {
  return (
    <div className='box'>
      <Calculator />
      <div className="attribution">
        Challenge by <a target="_blank" href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
        Coded by <a href="#">Your Name Here</a>.
      </div>
    </div>
  );
}

export default App;
