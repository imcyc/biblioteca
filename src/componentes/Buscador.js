import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Document, Page, pdfjs } from 'react-pdf';
import Container from 'react-bootstrap/Container';
import Entrada from './Banners/Entrada';
import Search from './Search/Search';
import Categorias from './Categorias';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Buscador.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Buscador extends Component {

  constructor(props){
    super(props);
    this.state = {
      numPages: null, 
      pageNumber: 1
    }
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ 
      numPages: numPages,
      pageNumber: 1
    });
  };

  goToPrevPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber + 1 }));

  render() {
    const { pageNumber, numPages, documentos } = this.state;
    const { categorias, BuscadorCategos } = this.props;
    // Fibras%20de%20Acero
    const archivo = `http://imcyc.com/ArchivosPDF/${this.props.nombreSeccion}/${this.props.docNombre}`;
    return (  
      <div className="Buscador">
        <Container fluid={true}>
          <Entrada />
          <Search BuscadorCategos={BuscadorCategos} />
          <Row>
            <Col md={12}>
              {categorias.map((categoria) => (
                <Categorias idCategoria={categoria.id} nameCategoria={categoria.name} />
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
 
export default Buscador;