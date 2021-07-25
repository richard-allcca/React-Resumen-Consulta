// ===============================
//? REFERENCIAS - con clases  
// https://es.reactjs.org/docs/refs-and-the-dom.html#gatsby-focus-wrapper
// ===============================

import React, { useRef } from 'react';

export default function Referencias(props) {
  // ===============================
  //? metodo no recomendado (menejo de eventos) con id
  // ===============================
  // const handleToggleMenu = (e) => {
  //   const $menu = document.getElementById("menu");
  //   if (e.target.textContent === "Menú") {
  //     $menu.style.display = "block";
  //     e.target.textContent = "Cerrar";
  //   } else {
  //     $menu.style.display = "none";
  //     e.target.textContent = "Menú";
  //   }
  // }

  // ===============================
  //? Metodo Recomendado 
  // ===============================
  // usa la referencia y asignala a un elemento del DOM
  const refMenu = useRef();
  const refMenuBtn = useRef();

  const handleToggleMenu = () => {
    if (refMenuBtn.current.textContent === "Menú") {
      refMenuBtn.current.textContent = "Cerrar";
      refMenu.current.style.display = "block";
    } else {
      refMenuBtn.current.textContent = "Menú";
      refMenu.current.style.display = "none";
    }
  }

  return (
    <>
      <h2>Referencias</h2>
      <button ref={refMenuBtn} id="btn-button" onClick={handleToggleMenu}>Menú</button>
      <nav ref={refMenu} id="menu" style={{ display: "none" }}>
        <a href="index.html">section1</a>
        <br />
        <a href="index.html">section2</a>
        <br />
        <a href="index.html">section3</a>
        <br />
        <a href="index.html">section4</a>
      </nav>
    </>
  )
}