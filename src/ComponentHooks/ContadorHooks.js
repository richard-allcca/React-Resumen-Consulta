import React, { useState } from 'react';

// ===============================
//? useState - estado de componente 
// ===============================
export default function ContadorHooks(props) {
  // console.log(useState());
  const [contador, setContador] = useState(0)

  const sumar = () => setContador(contador + 1)
  const restar = () => setContador(contador - 1)

  return (
    <>
      <h2>Hoooks - usestate</h2>
      <nav>
        <h2>Contador de {props.titulo}</h2>
        <h3>{contador}</h3>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
    </>
  )
}

ContadorHooks.defaultProps = {
  titulo: 'clicks'
  // este valor se puede modificar desde la principal App.js 
}
