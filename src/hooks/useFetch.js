// ===============================
//! otra froma de manejar el error con throw ln 29
// ===============================
// throw new Error ({
//   err: true,
//   status: res.status,
//   statusText: !res.statusText ? "Ocurrio un error" : res.statusText,
// });

// ===============================
//? NOTAS - para que react sepa que son Hooks Personalizados deben nombrarse con "useName.js"
//? no importamos "React" solo useState y useEffect
// ===============================

import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async (url) => {
      // define la funcion fetch
      try {
        let res = await fetch(url);

        if (!res.ok) {
          const errorThrow = {
            // creamos un obj para throw
            err: true,
            status: res.status,
            statusText: !res.statusText ? "Ocurrio un error" : res.statusText,
          };
          throw errorThrow;
        }

        let data = await res.json();

        setIsPending(false);
        setData(data);
        setError({ err: false });
      } catch (err) {
        setIsPending(false);
        setError(err);
      }
    };

    getData(url); // ejecutara la petición
  }, [url]); //? se ejecutara cuando cambie la url que viene como parametro

  return { data, isPending, error }; //puede retornar cualquier cosa aqui usamon un obj
};
