import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Customers from './components/Customers';
import Trainings from './components/Trainings';
import Calendar from './components/Calendar';
import About from './components/About';
import Navigator from './components/Navigator';

import './App.css';

class App extends Component {

  componentDidMount() {
    document.title = "T-Helper"
  }
  
  render() {
    return (
      <div className="App">
        <BrowserRouter basename='~a1703081/frontend/trainer/'>
          <div>
            <Navigator />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/customers" component={Customers} />
              <Route path="/trainings" component={Trainings} />
              <Route path="/calendar" component={Calendar} />
              <Route path="/about" component={About} />
              <Route render={() => <h1>Page not found</h1>} />
            </Switch>
          </div>
        </BrowserRouter>
        <footer>&copy; 2018 - Tudor Nica</footer>
      </div>
    );
  }
}

export default App;