import React, { Component } from 'react';
import { HashRouter, BrowserRouter as Router, Route } from "react-router-dom";
import Inicio from './componentes/Inicio';
import Buscador from './componentes/Buscador';
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter basename='/'>
        <Router basename={process.env.PUBLIC_URL}>
          <div className="App">
            <header className="App-header">
              <Route exact path="/" component={Inicio} />
              <Route exact path="/buscador" component={Buscador} />
            </header>
          </div>
        </Router>
      </HashRouter>
    );
  }
  
}

export default App;
