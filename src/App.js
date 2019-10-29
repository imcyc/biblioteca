import React, { Component } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import './App.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


class App extends Component {

  state = { numPages: null, pageNumber: 1 };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  goToPrevPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber + 1 }));

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1>BIBLIOTECA DIGITAL</h1>
          <p>Instituto Mexicano del Cemento y del Concreto A.C.</p>
          <div>
            <nav>
              <button onClick={this.goToPrevPage}>Prev</button>
              <button onClick={this.goToNextPage}>Next</button>
            </nav>

            <div style={{ width: 600 }}>
              <Document
                file="http://imcyc.com/ArchivosPDF/Fibras%20de%20Acero/4%20CFRP%20Strengthening.pdf"
                onLoadSuccess={this.onDocumentLoadSuccess}
              >
                <Page pageNumber={pageNumber} width={600} />
              </Document>
            </div>

            <p>
              Page {pageNumber} of {numPages}
            </p>
          </div>
        </header>
      </div>
    );
  }
  
}

export default App;
