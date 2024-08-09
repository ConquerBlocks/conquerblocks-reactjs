import { useRef } from "react";

export const UseRef = () => {
  // hacer referencia a un elemento del DOM
  const buttonRef = useRef<HTMLButtonElement>(null);
  const textRef = useRef<string>("");

  const handleClick = () => {
    textRef.current = "hola";
    if (buttonRef.current) buttonRef.current.click();
  };

  return (
    <div>
      <button ref={buttonRef} onClick={() => alert("Button Clicked!")}>
        Botón Oculto
      </button>

      <button onClick={handleClick}>
        Hacele Click para triggerear el Botón Escondido
      </button>
      {textRef.current}
    </div>
  );
};
