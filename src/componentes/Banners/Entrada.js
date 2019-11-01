import React from 'react';
import Logo from '../../logo.svg';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Entrada = (props) => {
  return (
    <Row className="entrada">
      <div className="layer"></div>
      <Col md={12} className="text-center">
        <img src={Logo} id="icon" alt="Instituto Mexicano del Cemento y del Concreto A.C." title="Instituto Mexicano del Cemento y del Concreto A.C." style={{width: '200px',margin:'15px'}} />
        <p>Instituto Mexicano del Cemento y del Concreto A.C.</p>
        <h3>ACERVO DIGITAL</h3>
        <h4>COMPARTIR EL CONOCIMIENTO</h4>
        <hr/>
      </Col>
    </Row>
  );
}
 
export default Entrada;