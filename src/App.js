import React, { Component } from 'react';
import 'foundation-sites/dist/css/foundation.min.css';
import './App.css';
import logo from './logo.png';
import Activities from "./Containers/Activities/index";
import Tour from "./Containers/Tour/index"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt={"logo"}/>
        </header>
        <Router>
          <div className="App-content">
            <Switch>
              <Route exact path="/city/:cityName" component={Activities} />
              <Route exact path="/activity/:id" component={Tour} />
            </Switch>
          </div>
        </Router>
        <footer className="App-footer">
          <p>© 2015-2017 Trip Guru Limited. All Rights Reserved. HKG Travel Licence No. TA35/4125. Travel Industry Council of Hong Kong: No. 23110-0</p>
        </footer>
      </div>
    );
  }
}


export default App;
