// ingredientes

import { useEffect, useState } from "react";
import { Ingredientes, Relleno } from "../models/sandwich.model";

export function Sandwich({ relleno, pan }: Ingredientes) {
  // variables
  const [text, setText] = useState(
    relleno.mayonesa ? "viene con mayonesa" : "no viene con mayonesa",
  );
  const [uppercaseText, setUppercaseText] = useState(text.toUpperCase());

  const [filteredRellenos, setFilteredRellenos] = useState(
    Object.keys(relleno),
  );

  // métodos
  const changeText = (newText: string) => {
    setText(newText);
    setUppercaseText(newText.toUpperCase());
  };

  const filterRellenos = (element: Relleno) =>
    Object.keys(element).filter((key) => !!element[key as keyof Relleno]);

  // efectos - se ejecutan SIEMPRE al menos una vez
  // useEffect === sincronizar con el exterior
  let a = 1;
  useEffect(
    () => {
      a += 1;

      setText("cambió" + a);
    },
    // NO [text, setText]
    [setText],
  );

  useEffect(() => {
    // llamar api para popular valores del estado
  }, []);

  useEffect(() => {
    const filtered = filterRellenos(relleno);

    setFilteredRellenos(filtered);

    return () => {
      console.log("chau chau");
    };
    // creacion | modificacion
  }, [relleno, setFilteredRellenos]);

  return (
    <div>
      <h2>Viene con:</h2>

      <p>Viene con Mayonesa ? {text}</p>
      <p>Viene con el pan: {pan}</p>

      {filteredRellenos.map((element) => (
        <p key={element}>{element}</p>
      ))}

      <p>Uppercase Text: {uppercaseText}</p>

      <button
        onClick={() => {
          changeText("cualquier otra cosa");
        }}
      >
        Cambiar Texto
      </button>
    </div>
  );
}
