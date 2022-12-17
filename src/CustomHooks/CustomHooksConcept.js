import React from "react";
import { useFetch } from "./useFetch";

export const CustomHooks = () => {
  let url = "https://pokeapi.co/api/v2/pokemon/";
  const { data, isPending, error } = useFetch(url);

  return (
    <div>
      <h2>Hooks Personalizados</h2>
      <h3>Caracteristicas</h3>
      <ul>
        <li>Su nombre empieza con "use"</li>
      </ul>
      <h3>Contenido de la peticion en Crudo</h3>
      <h3>
        <mark>{JSON.stringify(isPending)}</mark>
      </h3>
      <li>
        <mark>{JSON.stringify(error)}</mark>
      </li>
      <pre style={{ whiteSpace: "pre-wrap" }}>
        <code>{JSON.stringify(data)}</code>
      </pre>
    </div>
  );
};
