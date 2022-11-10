import {useState} from "react";
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer name="Miguel"/>
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
