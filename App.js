import React, { Component, Components } from 'react';
import Navbar from "./components/Navbar";
import AddUser from "./components/AddUser";

import Users from "./components/users";
import './App.css';

class App extends Component {
  render() {
    return(
      <div className="container">
        <Navbar title="User App" />
        <hr />
        <Add Users />
      </div>
    )
  }
}