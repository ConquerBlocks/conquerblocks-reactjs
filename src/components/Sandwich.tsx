// ingredientes

import { useState } from "react";
import { Ingredientes, Relleno } from "../models/sandwich.model";

export function Sandwich({ relleno, pan }: Ingredientes) {
  const [text, setText] = useState(
    relleno.mayonesa ? "viene con mayonesa" : "no viene con mayonesa",
  );

  const filteredRellenos = Object.keys(relleno).filter(
    (key) => !!relleno[key as keyof Relleno],
  );

  return (
    <div>
      <h2>Viene con:</h2>

      <p>Viene con Mayonesa ? {text}</p>

      <p>Viene con el pan: {pan}</p>

      {filteredRellenos.map((element) => (
        <p key={element}>{element}</p>
      ))}

      <button
        onClick={() => {
          setText("cualquier otra cosa");
        }}
      >
        Cambiar Texto
      </button>
    </div>
  );
}
