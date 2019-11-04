import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Search.css';

const Search = (props) => {
  return (
    <Row>
      <Col md={12}>
      <form className="card card-sm">
        <div className="card-body row no-gutters align-items-center">
            <div className="col-auto">
                <i className="fas fa-search h4 text-body"></i>
            </div>
            <div className="col">
                <input className="form-control form-control-lg form-control-borderless" type="search" placeholder="Buscar por categoría" onChange={props.BuscadorCategos}/>
            </div>
            <div className="col-auto">
                <button className="btn btn-lg btn-success" type="submit">FILTRAR RESULTADOS</button>
            </div>
        </div>
      </form>
      </Col>
    </Row>
  )
}

export default Search;