import React from 'react';
import './App.css';
import Add from './components/Add'
import Header from './components/Header';
import Front from './components/Front'
import { Route, Switch } from 'react-router-dom'
import {db} from "./firebase";

function App() {
  return (
    <div className="App">
      <Header/>
      <hr/>
      <Switch>
        <Route path="/" exact component={Front}/>
        <Route path="/add" exact component={Add}/>
      </Switch>
    </div>
  );
}


export default App;