import React from 'react';
import './App.css';
import LoginPage from './components/loginPage'
import RegisterPage from './components/registerPage'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={LoginPage}></Route>
          <Route path='/register' exact component={RegisterPage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
