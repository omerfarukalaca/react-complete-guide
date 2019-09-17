import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      { name: 'Alex', age: '29' },
      { name: 'Max', age: '28' },
      { name: 'Omer', age: '26' }
    ],
    otherState : "some other value"
  }

  switchNamesHandler = () => {
    console.log("Button was clicked!");
    this.setState({
      persons: [
        { name: 'Ömer', age: '60' },
        { name: 'Faruk', age: '70' },
        { name: 'Alaca', age: '80' }
      ]
    })
    console.log(this.state)
  }

  render() {
    console.log(this.state)
    return (
      <div className="App" >
        <h1>Hi I'm a React App</h1>
        <button onClick={this.switchNamesHandler}>Switch Names</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    //return React.createElement("div", { className: 'App' }, React.createElement("h1", null, "Hi I'm a React App"))
  }
}

export default App;
