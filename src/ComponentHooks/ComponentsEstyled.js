// ===============================
//? NOTAS 
//* para usar condicionales (ln 35) inporta "css"
//* para eventos importa "keyframe"
//* para themas como dark y light importa "themeProvider"
//* para stylos GLOBALES importa "createGlobalStyle" este deberia ser creado y usado en el index.js p App.js
// ===============================
import React from 'react';
import styled, { css, keyframes, ThemeProvider, createGlobalStyle } from 'styled-components';

export default function ComponentStyled() {

  // ==============================================================
  //? variables
  // ==============================================================
  let mainColor = '#db7093';//color principal
  let mainAlphaColor = '#db709380';// color hover

  const light = {
    color: "#222",
    bgColor: "#DDD",
  };
  const dark = {
    color: "#DDD",
    bgColor: "#222",
  };

  // ==============================================================
  //? functiones
  // ==============================================================

  //? function - recibe PROPS como parametros   (ln 25)
  const setTransition = (time) => `all ${time} ease-in-out`

  const fadeln = keyframes`
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
    `;

  // ==============================================================
  //? Style components - usado como etiqueta html
  // ==============================================================
  const Myh3 = styled.h3`
    padding: 2rem;
    text-align: center;
    color: ${(props) => props.color}; // props normal
    color: ${({ color }) => color};// con destructuring
    color: ${({ color }) => color || "hsl(150, 100%, 50%)"};// condicional
    background-color: ${mainColor}; // estiled con variable
    transition: ${setTransition(".5s")};// estiled funcion con parametros 
    animation: ${fadeln} 5s ease-out; // animation con function keyframes;
    
    &:hover{
      background-color: ${mainAlphaColor};// stiled con variable 
    }

    //? IMPORTA - CSS, para usar esta function condicional 
    ${({ isButton }) => isButton && css` 
      margin: auto !important;
      max-width: 50%;
      border-radius: 0.25rem;
      cursor:pointer;
      background-color: darkcyan;
    ` }
  `;

  const Box = styled.div`
    padding: 1rem;
    margin: 1rem;
    color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.bgColor};

  `;

  //? COMPONENT con HERENCIA
  const BoxRounded = styled(Box)`
    border-radius: 1rem;
  `;

  //? COMPONENT de estilos Globales, crear el componente y en ese archivo se inyectan todos los estilos que tiene
  const GlobalStyle = createGlobalStyle`
      h2{
        padding: 2rem;
        background-color: #fff;
        color: #61dafb;
        text-transform: uppercase;
      }
    `;

  // ==============================================================
  //? PROPS en las etiquetas (ln 67) y pasarlas como css ⬆️ (ln 40 a 43) 
  // ==============================================================
  return (
    <>
      <GlobalStyle />
      <h2>Styled Components</h2>
      <Myh3 >Hola soy un h3, estilizado con Style Component</Myh3>
      <Myh3 color="#61dafb" >Hola soy un h3, con estilos como "PROPS"</Myh3>
      <Myh3 isButton >Hola soy un h3, Estilizado como Buttons</Myh3>
      <ThemeProvider theme={light}>
        <Box>Soy una caja Light</Box>
      </ThemeProvider>
      <ThemeProvider theme={dark}>
        <Box>Soy una caja Dark</Box>
      </ThemeProvider>
      <ThemeProvider theme={light}>
        <BoxRounded>Soy una caja Herencia de componente css </BoxRounded>
      </ThemeProvider>
      <ThemeProvider theme={dark}>
        <BoxRounded>Soy una caja Herencia de componente css </BoxRounded>
      </ThemeProvider>
    </>
  )
}