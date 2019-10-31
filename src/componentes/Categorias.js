import React, { Component } from 'react';
import ItemsCarousel from 'react-items-carousel';
import axios from 'axios';

import './Categorias.css';

//const createChildren = n => range(n).map(i => <div key={i} style={{ height: 200, background: '#333' }}>{i}</div>);

class Categorias extends Component {

  constructor(props) {
    super(props);
    this.state = {
      documentos: []
    }
  }

  componentWillMount() {

    axios.get(`http://imcyc.com/biblioteca/documento.php?categoria=${this.props.seccion}`)
      .then(res => {
        const categoria = res.data;
        this.setState({ 
          documentos: categoria
        });
      })
    
    this.setState({
      activeItemIndex: 0,
    });
  }

  changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

  render() {
    const {
      activeItemIndex,
      documentos,
    } = this.state;

    return (
      <div>
        <h1 className="titCategoria"><i class="material-icons">keyboard_arrow_right</i> {this.props.seccion}</h1>
        <ItemsCarousel
          enablePlaceholder
          numberOfPlaceholderItems={5}
          minimumPlaceholderTime={1000}
          placeholderItem={<div style={{ height: 200, background: '#900' }}>Placeholder</div>}
          numberOfCards={3}
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
          {documentos}
        </ItemsCarousel>
      </div>
    );
  }
}
 
export default Categorias;