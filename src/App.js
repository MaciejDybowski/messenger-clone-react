import React from 'react';
import './App.css';
import LoginPage from './components/loginPage'

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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
