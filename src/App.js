import logo from './logo.svg';
import './App.css';
import Componente from './components/Component';
import Propiedades from './components/Propiedades';
import Estado from './components/Estados';
import RenderCondicional from './components/RenderCondicional';
import RenderElement from './components/RenderElements';
import Eventos from './components/Eventos'
import EventosES7 from './components/EventosES7'
import EventosMas from './components/EventosMas'
import ComunicComponent from './components/ComunicComponent'
import CicloVida from './components/CicloVida'
import AjaxApi from './components/AjaxApi'
// ====== hooks =====
import ContadorHooks from './ComponentHooks/ContadorHooks'
import ScrollHooks from './ComponentHooks/ScrollHooks'
import RelojHooks from './ComponentHooks/RelojHooks'
import AjaxHooks from './ComponentHooks/AjaxHooks';
import CustomHooks from './ComponentHooks/CustomHooks';
import Referencias from './ComponentHooks/Referencias'
import Formularios from './ComponentHooks/Formularios'
import Estilos from './ComponentHooks/Estilos'
import ComponentStyled from './ComponentHooks/ComponentsEstyled';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edita <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React - Documentación
          </a>
        </section>
        <section>
          <hr />
          <ComponentStyled />
          <hr />
          <Estilos />
          <hr />
          <h2><mark><i>Inicio - Todo sobre los Hokks</i></mark></h2>
          <hr />
          <Formularios />
          <hr />
          <Referencias />
          <hr />
          <CustomHooks />
          <hr />
          <ContadorHooks />
          <hr />
          <ScrollHooks />
          <hr />
          <RelojHooks />
          <hr />
          <AjaxHooks />
          <hr />
          <h2><mark><i>Inicio - Todo sobre los compomentes</i></mark></h2>
          <hr />
          <Componente msg="Componentes de clase, funcion y Arrow functions" />
          <hr />
          <Componente msg="Tipos de datos pasados por - Props" />
          <Propiedades
            cadena="Esto es una cadena de texto"
            numero={28}
            boleano={false}
            arreglo={[1, 2, 3]}
            objeto={{ nombre: "Richard", apellido: "Allcca" }}
            funcion={(num) => num * num}
            elementoReact={<i>Esto es un elemento React</i>}
            componenteReact={<Componente msg='soy un componente pasado como Props' />}
          />
          <hr />
          <Estado />
          <hr />
          <RenderCondicional />
          <hr />
          <RenderElement />
          <hr />
          <Eventos />
          <hr />
          <EventosES7 />
          <hr />
          <EventosMas />
          <hr />
          <ComunicComponent />
          <hr />
          <CicloVida />
          <hr />
          <AjaxApi />
          <hr />

        </section>
      </header>
    </div>
  );
}
export default App;
