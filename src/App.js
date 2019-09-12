import React from 'react';
import './App.css';
import Person from './Person/Person'

function App() {
  return (
    <div className="App">
      <h1>Hi I'm a React App</h1>
      <Person name='Alex' age='29'/>
      <Person name='Max' age='29'> My Hobbies: Racing </Person>
      <Person name='Omer' age='29'/>
    </div>
  );
  //return React.createElement("div", { className: 'App' }, React.createElement("h1", null, "Hi I'm a React App"))
}

export default App;
