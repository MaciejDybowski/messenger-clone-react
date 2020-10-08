import React from 'react';
import './App.css';
import LoginPage from './components/loginPage'
import RegisterPage from './components/registerPage'
import Dashboard from './components/dashboard'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {useSelector} from 'react-redux'

function App() {
  /* const state = useSelector(state => state);
  console.log(state); */
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={LoginPage}></Route>
          <Route path='/register' exact component={RegisterPage}></Route>
          <Route path='/dashboard' exact component={Dashboard}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
