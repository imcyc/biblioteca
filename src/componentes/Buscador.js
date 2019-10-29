import React from 'react';

const Buscador = (props) => {
  return (  
    <div className="Buscador">
      <ul>
        {props.categorias.map((categoria, key) => (
          <li key={key}>{categoria}</li>
        ))}
      </ul>
    </div>
  );
}
 
export default Buscador;