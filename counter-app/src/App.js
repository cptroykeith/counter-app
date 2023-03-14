import React, {Component, component } from 'react';
import NavBar  from './components/navbar';
import Counters from "./components/counters";
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <NavBar />
      <main className="contanier">
        <Counters />
      </main>
      </React.Fragment>
    );
  }
}

export default App;
