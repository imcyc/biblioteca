import React, { Component } from 'react';
import axios from 'axios';
import ItemsCarousel from 'react-items-carousel';
import { Link } from "react-router-dom";
import Loader from'../images/loader.gif';
import pdf from '../images/pdf.png';

import './Categorias.css';

class Categorias extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeItemIndex: 0,
      documentos: []
    }
  }

  componentDidMount(){
    axios.get(`http://imcyc.com/biblioteca/apidocumento.php?id=${this.props.idCategoria}`)
      .then(res => {
        const documentos = res.data;
        this.setState({ documentos });
      })
  }
  
  changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

  render() {
    
    const {
      activeItemIndex,
      documentos,
    } = this.state;

    //let name = documentos.map(documento => <Link to=''>documento.name</Link>);

    let name = documentos.map((documento, index) => (
      <Link to="/documento" className="docum" key={index}>
        <img src={pdf} title={this.props.nameCategoria} alt={this.props.nameCategoria} style={{width: '90%',marginBottom: '10px'}} />
        {documento.name}<br/>
        <span className="paginas">No. de Páginas: {documento.paginas}</span>
      </Link>
    ));

    return (
      <div>
        <h1 className="titCategoria">
          <Link to="categoria">
            <i className="material-icons">keyboard_arrow_right</i> 
            {this.props.nameCategoria}
          </Link>
        </h1>
        
        <ItemsCarousel
          enablePlaceholder
          numberOfPlaceholderItems={5}
          minimumPlaceholderTime={1000}
          placeholderItem={<div style={{ height: 100, background: '#fff', textAlign: 'center', width: '100%' }}><img src={Loader} title={this.props.nameCategoria} style={{width: '100px'}}></img></div>}
          numberOfCards={4}
          gutter={12}
          showSlither={true}
          firstAndLastGutter={true}
          freeScrolling={true}
          requestToChangeActive={this.changeActiveItem}
          activeItemIndex={activeItemIndex}
          activePosition={'center'}
          chevronWidth={24}
          rightChevron={<button className='btnswipe right'>{'>'}</button>}
          leftChevron={<button className='btnswipe left'>{'<'}</button>}
          outsideChevron={false}
        >
          {name}
        </ItemsCarousel>
       
      </div>
    );
  }
}
 
export default Categorias;