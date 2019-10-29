import React, { Component } from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import axios from 'axios';
import Inicio from './componentes/Inicio';
import Buscador from './componentes/Buscador';
import './App.css';

class App extends Component {

  state = {
    categorias: []
  }

  componentDidMount(){
    axios.get(`http://imcyc.com/biblioteca/categorias.php`)
      .then(res => {
        const categorias = res.data;
        this.setState({ categorias });
      })
  }

  render() {
    return (
      <HashRouter basename='/'>
          <div>
              <Switch>
                <Route 
                  exact 
                  path="/" 
                  render={(props) => <Inicio {...props} 
                  />}
                />
                <Route 
                  exact 
                  path="/buscador" 
                  render={(props) => <Buscador {...props} 
                    categorias={this.state.categorias}
                    />}
                />
              </Switch>
          </div>
      </HashRouter>
    );
  }
  
}

export default App;
