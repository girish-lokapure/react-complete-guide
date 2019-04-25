import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    number: 29,
    name: "girish"
  };
  changeNumber = () => {
    this.setState({
      number: Math.random()
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, {this.state.name}</h1>
        <Person number={this.state.number} />
        <button onClick={this.changeNumber}>change Number</button>
      </div>
    );
  }
}

export default App;
