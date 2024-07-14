import React from 'react';
import PizzaBoyz from "./components/PizzaBoyz/PizzaBoyz"
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={PizzaBoyz} />
          <Route path="/menu" component={PizzaBoyz} />
          <Route path="/menu.html" component={PizzaBoyz} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
