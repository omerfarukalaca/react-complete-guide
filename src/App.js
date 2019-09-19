import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = props => {

  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Alex', age: '29' },
      { name: 'Max', age: '28' },
      { name: 'Omer', age: '26' }
    ]
  })

  const switchNamesHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Ömer', age: '60' },
        { name: 'Faruk', age: '70' },
        { name: 'Alaca', age: '80' }
      ]
    })
  }
  
  const [otherValueState, setOtherValueState] = useState("some other value")

  console.log(personsState, otherValueState)

  return (
    <div className="App" >
      <h1>Hi I'm a React App</h1>
      <button onClick={switchNamesHandler}>Switch Names</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
  //return React.createElement("div", { className: 'App' }, React.createElement("h1", null, "Hi I'm a React App"))

}

export default App;