import React, { Component } from 'react';

export default class EventosES7 extends Component {
  // ===============================
  //? state com propiedad de la clase
  // ===============================
  state = {
    contador: 0
  };

  // ===============================
  //? eventos con Arrows functions
  // ===============================
  sumar = (e) => {
    console.log('sumando')
    this.setState({
      contador: this.state.contador + 1,
    })
  };
  restar = (e) => {
    console.log('restar')
    this.setState({
      contador: this.state.contador - 1,
    })
  };

  // ===============================
  //? renderizado
  // ===============================
  render() {
    return (
      <div>
        <h2>Eventos en componentes de Clase ES7</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar} >-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}