import React from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Buscador.css';

const Buscador = (props) => {
  return (  
    <div className="Buscador">
      <Container fluid={true}>
        <Row>
          <Col md={12} className="text-center">
            <h3>BIBLIOTECA DIGITAL</h3>
            <p>Instituto Mexicano del Cemento y del Concreto A.C.</p>
            <hr/>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <ul className="categorias">
              {props.categorias.map((categoria, key) => (
                <li key={key}><Link to="/">{categoria}</Link></li>
              ))}
            </ul>
          </Col>
          <Col md={9}></Col>
        </Row>
      </Container>
    </div>
  );
}
 
export default Buscador;