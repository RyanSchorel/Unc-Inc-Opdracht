import React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hello React!</h1>
      <button onClick={generate}>Generate</button>
    </div>
  );

  function generate() {
    alert('ok');
  }
}
