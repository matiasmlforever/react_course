import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <h1>Hola, soy una aplicacion REACT</h1>
        <p>holi this is working</p>
        <Person />
        <Person />
        <Person />
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
