import React from 'react';
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
            <h3>ACERVO DIGITAL</h3>
            <p>Instituto Mexicano del Cemento y del Concreto A.C.</p>
            <hr/>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <ul className="categorias">
              {props.categorias.map((categoria, key) => (
                <li key={key} onClick={() => props.categoriaClick(categoria)}>{categoria}</li>
              ))}
            </ul>
          </Col>
          <Col md={9}>
            <h2 style={{display: props.tituloSeccion ? 'block' : 'none'}}>DOCUMENTOS ENCONTRADOS</h2>
            <h3 className="tituloseccion" style={{display: props.tituloSeccion ? 'block' : 'none'}}>CATEGORÍA: {props.nombreSeccion}</h3>
            <hr style={{display: props.tituloSeccion ? 'block' : 'none'}} />
            <ul className="documentos">
              {props.categoria.map((categoria, key) => (
                <li key={key} onClick={() => props.documentoClick(categoria)}>{categoria}</li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
 
export default Buscador;