import React, { Component } from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import axios from 'axios';
import Inicio from './componentes/Inicio';
import Buscador from './componentes/Buscador';
import './App.css';

class App extends Component {

  state = {
    categorias: [],
    categoria: [],
    tituloSeccion: false,
    nombreSeccion: '',
    docNombre: ''
  }

  componentDidMount(){
    axios.get(`http://imcyc.com/biblioteca/categorias.php`)
      .then(res => {
        const categorias = res.data;
        this.setState({ categorias });
      })
  }

  categoriaClick = (categoria) => {
    console.log(categoria);
    this.setState({
      nombreSeccion: categoria
    })
    axios.get(`http://imcyc.com/biblioteca/documento.php?categoria=${categoria}`)
      .then(res => {
        const categoria = res.data;
        this.setState({ 
          categoria: categoria,
          tituloSeccion: true
        });
      })
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  documentoClick = (categoria) => {
    console.log(categoria);
    this.setState({
      docNombre: categoria
    });
    window.scrollTo({top: 0, behavior: 'smooth'});
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
                    categoriaClick={this.categoriaClick}
                    categoria={this.state.categoria}
                    tituloSeccion={this.state.tituloSeccion}
                    nombreSeccion={this.state.nombreSeccion}
                    docNombre={this.state.docNombre}
                    documentoClick={this.documentoClick}
                    />}
                />
              </Switch>
          </div>
      </HashRouter>
    );
  }
  
}

export default App;
