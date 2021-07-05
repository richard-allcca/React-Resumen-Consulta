import React from 'react';
import './Estilos.css'
import moduleStyle from './Estilos.module.css'
import './Estilos.scss'

export default function Estilos() {
  const myStyle = {
    borderRadius: "-5rem",
    margin: "2rem auto",
    maxWidth: "50%",
  }
  // ===============================
  //? NOTAS - para usar SASS
  //  npm i node-sass 
  // ===============================

  return (
    <section className="estilos">
      <h2>Estilos CSS en React</h2>
      <h3 className="bg-react">Estilos en Hoja CSS extrena</h3>
      <h3 className="bg-react"
        style={{ borderRadius: ".25rem", margin: "1rem" }}
      >Estilos en Linea Atributo style</h3>
      <h3 className="bg-react" style={myStyle}>Estilos en Variable pasado en linea</h3>
      <h3 className="bg-react">Agregando normalize con
        <br />
        <code>@import-normalize</code>
      </h3>
      <h3 >Estilos con modulos</h3>
      <button className={moduleStyle.error}>error</button>
      <button className={moduleStyle.success}>success</button>
      <h3 className="bg-sass" >Estilos con SASS</h3>
    </section>
  )
}