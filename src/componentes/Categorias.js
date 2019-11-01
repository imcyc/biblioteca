import React, { Component } from 'react';
import axios from 'axios';
import ItemsCarousel from 'react-items-carousel';

import './Categorias.css';

//const createChildren = n => range(n).map(i => <div key={i} style={{ height: 200, background: '#333' }}>{i}</div>);

class Categorias extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeItemIndex: 0,
      documentos: []
    }
  }

  componentDidMount(){
    axios.get('http://imcyc.com/biblioteca/apidocumentos.php')
      .then(res => {
        const docs = res.data;
        this.setState(
          { 
            documentos: docs
          }
        );
      })
  }

  changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

  render() {
    
    const {
      activeItemIndex,
      documentos,
    } = this.state;

    //let category_id = documentos.map(documento => documento.category_id);
    let category_id = documentos.map(documento => documento.category_id);
    let name = documentos.map(documento => documento.name);

    return (
      <div>
        <h1 className="titCategoria"><i className="material-icons">keyboard_arrow_right</i> {this.props.idCategoria}-{this.props.categoria}</h1>
        <ItemsCarousel
          enablePlaceholder
          numberOfPlaceholderItems={5}
          minimumPlaceholderTime={1000}
          placeholderItem={<div style={{ height: 200, background: '#900' }}>Placeholder</div>}
          numberOfCards={4}
          gutter={12}
          showSlither={true}
          firstAndLastGutter={true}
          freeScrolling={true}
          requestToChangeActive={this.changeActiveItem}
          activeItemIndex={activeItemIndex}
          activePosition={'center'}
          chevronWidth={24}
          rightChevron={'>'}
          leftChevron={'<'}
          outsideChevron={false}
        >
          {name}
        </ItemsCarousel>
      </div>
    );
  }
}
 
export default Categorias;