import React, { Component } from 'react';
import axios from 'axios';
import ItemsCarousel from 'react-items-carousel';
import { Link } from "react-router-dom";

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

    let name = documentos.map(documento => (
      `<Link to=''>${documento.name}</Link>`
    ));

    return (
      <div>
        <h1 className="titCategoria"><i className="material-icons">keyboard_arrow_right</i> {this.props.idCategoria}-{this.props.nameCategoria}</h1>
        
        <ItemsCarousel
          enablePlaceholder
          numberOfPlaceholderItems={5}
          minimumPlaceholderTime={1000}
          placeholderItem={<div style={{ height: 200, background: '#000' }}>Placeholder</div>}
          numberOfCards={4}
          gutter={12}
          showSlither={true}
          firstAndLastGutter={true}
          freeScrolling={true}
          requestToChangeActive={this.changeActiveItem}
          activeItemIndex={activeItemIndex}
          activePosition={'center'}
          chevronWidth={24}
          rightChevron={<button>{'>'}</button>}
          leftChevron={<button>{'<'}</button>}
          outsideChevron={false}
        >
          {name}
        </ItemsCarousel>
       
      </div>
    );
  }
}
 
export default Categorias;