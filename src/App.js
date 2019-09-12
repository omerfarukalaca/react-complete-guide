import React from 'react';
import './App.css';
import Person from './Person/Person'

function App() {
  return (
    <div className="App">
      <h1>Hi I'm a React App</h1>
      <Person />
      <Person />
      <Person />
    </div>
  );
  //return React.createElement("div", { className: 'App' }, React.createElement("h1", null, "Hi I'm a React App"))
}

export default App;
