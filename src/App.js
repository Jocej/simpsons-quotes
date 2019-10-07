import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quotes from "./quotes";
import Lamp from "./lamp";
import Working from "./working";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Lamp on />
        <Lamp />
        <Working />
        <Quotes />

      </div>
    );
  }
}

export default App;