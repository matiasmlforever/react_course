import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>holanda, que talca icacion REACT</h1>
        <p>holi this is working</p>
        <Person name="max" age="28" />
        <Person name="manu" age="29">My hobbies: Racing</Person>
        <Person name="matias" age="33" />
      </div>
    )

    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "HOLA SOY UNA APP REACT")
    // );
  }
}

export default App
