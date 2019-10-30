import React, { Component } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '../logo.svg';

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
    this.setState({ numPages });
  };

  goToPrevPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber + 1 }));

  render() {
    const { pageNumber, numPages } = this.state;
    // Fibras%20de%20Acero
    const archivo = `http://imcyc.com/ArchivosPDF/${this.props.nombreSeccion}/${this.props.docNombre}`;
    return (  
      <div className="Buscador">
        <Container fluid={true}>
          <Row>
            <Col md={12} className="text-center">
              <img src={Logo} id="icon" alt="Instituto Mexicano del Cemento y del Concreto A.C." title="Instituto Mexicano del Cemento y del Concreto A.C." style={{width: '200px',margin:'15px'}} />
              <p>Instituto Mexicano del Cemento y del Concreto A.C.</p>
              <h3>ACERVO DIGITAL</h3>
              <hr/>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <ul className="categorias">
                {this.props.categorias.map((categoria, key) => (
                  <li key={key} onClick={() => this.props.categoriaClick(categoria)}>{categoria}</li>
                ))}
              </ul>
            </Col>
            <Col md={9}>
              <h2 style={{display: this.props.tituloSeccion ? 'block' : 'none'}}>DOCUMENTOS ENCONTRADOS</h2>
              <h3 className="tituloseccion" style={{display: this.props.tituloSeccion ? 'block' : 'none'}}>CATEGORÍA: {this.props.nombreSeccion}</h3>
              <h3 className="docseccion" style={{display: this.props.docNombre ? 'block' : 'none'}}>DOCUMENTO: {this.props.docNombre}</h3>
              <hr style={{display: this.props.tituloSeccion ? 'block' : 'none'}} />
              <ul className="documentos" style={{display: this.props.docNombre ? 'none' : 'block'}}>
                {this.props.categoria.map((categoria, key) => (
                  <li key={key} onClick={() => this.props.documentoClick(categoria)}>{categoria}</li>
                ))}
              </ul>
              <div style={{display: this.props.docNombre ? 'block' : 'none'}}>
                <nav>
                  <button onClick={this.goToPrevPage}>Anterior</button>
                  <button onClick={this.goToNextPage}>Siguiente</button>
                </nav>

                <div style={{ width: '100%' }}>
                  <Document
                    file={archivo}
                    onLoadSuccess={this.onDocumentLoadSuccess}
                  >
                    <Page pageNumber={pageNumber} width={600} />
                  </Document>
                </div>

                <p style={{textAlign: 'center',padding: '10px'}}>
                  Página: {pageNumber} of {numPages}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
 
export default Buscador;