import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo.svg';
import './Inicio.css';

const Inicio = () => {
  return (
    <header className="App-header">
      <div className="inicio">
        <div className="wrapper fadeInDown">
          <div id="formContent">
            <div className="fadeIn first">
              <img src={Logo} id="icon" alt="Instituto Mexicano del Cemento y del Concreto A.C." title="Instituto Mexicano del Cemento y del Concreto A.C." style={{width: '200px',margin:'15px'}} />
              <h3 style={{color: '#1a75a1',fontWeight: '200'}}>ACERVO DIGITAL</h3>
              <p>Instituto Mexicano del Cemento y del Concreto A.C.</p>
            </div>
            <form>
              <input type="text" id="login" className="fadeIn second" name="login" placeholder="Usuario"/>
              <input type="text" id="password" className="fadeIn third" name="login" placeholder="Contraseña"/>
              <Link to="/buscador" className="fadeIn fourth">INGRESAR</Link>
            </form>
            <div id="formFooter">
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
 
export default Inicio;