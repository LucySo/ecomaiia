import React from 'react';
import { List } from './features/product/List';
import './App.css';
import {NavBar} from "./component/NavBar"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <List />
      </header>
    </div>
  );
}

export default App;

