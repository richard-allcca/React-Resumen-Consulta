import React from "react";

import "./App.css";
import CicloVida from "./ciclo_vida/CicloVida";
import { CustomHooks } from "./CustomHooks/CustomHooks";
import Estilos from "./style/Estilos";
import Formularios from "./formularios/Formularios";
import AjaxHooks from "./peticionesAsincronas/AjaxHooks";
import ApiAjax from "./peticion_ajax/AjaxApi";

import Props from "./props/Props";
import Referencias from "./referencias_useRef/Referencias";
import RenderCondicional, {
  EventEs7,
  EventoPropsParametro,
} from "./renderCondicional/RenderConditional";
import Estado from "./state/Estado";
import ClaseComponente, { ArrowComponente } from "./tipos_components/Tipos";
import ComponentStyled from "./Style_component/styledComponents";
import { ThemeProvide } from "./Style_component/ThemeProvide";
import { GlobalStyle } from "./Style_component/GlobalStyle";

const style = {
  whiteSpace: "pre-wrap",
  color: "white",
  fontSize: "20px",
};

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <section style={style}>
          <h2>Segunda App</h2>
          <hr />
          <ComponentStyled />
          <ThemeProvide />
          <GlobalStyle />
          <hr />
          <Estilos />
          <hr />
          <Formularios />
          <hr />
          <Referencias />
          <hr />
          <CustomHooks />
          <hr />
          <AjaxHooks />
          <hr />
          <ApiAjax />
          <hr />
          <CicloVida />
          <hr />
          <EventoPropsParametro />
          <RenderCondicional />
          <EventEs7 />
          <hr />
          <Estado />
          <hr />
          <Props />
          <hr />
          <ArrowComponente />
          <ClaseComponente />
        </section>
      </header>
    </div>
  );
};

export default App;
