import React, { useEffect } from "react";
import { useState } from "react";

//create your first component
const Home = () => {
  const [color, setColor] = useState(null);
  const [isAlternarColor, setisAlternarColor] = useState(false);

  //funcion para pasar un color y cambiar el estado
  const validacionColor = (color) => {
    setColor(color);
    setisAlternarColor(true);
  };

  // Funcion para pasar un color y los segundos

  useEffect(() => {
    let colores = ["rojo", "amarillo", "verde"];
    let index = 0;

    const cambiarColor = () => {
      setisAlternarColor(true);
      setColor(colores[index]);
      index = (index + 1) % colores.length;
    };

    const reset = () => {
      setisAlternarColor(false);
    };

    const timer1 = setTimeout(cambiarColor, 5000);
    const timer2 = setTimeout(cambiarColor, 6000);
    const timer3 = setTimeout(cambiarColor, 7000);
    const timer4 = setTimeout(reset, 8000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <div className=" py-4">
      <div className="palo-semaforo mx-auto"></div>
      <div className="cuerpo-semaforo mx-auto">
        <div
          className={`rojo ${
            color === "rojo" && isAlternarColor === true ? "brillar" : null
          }`}
          onClick={() => validacionColor("rojo")}
        ></div>
        <div
          className={`amarillo ${
            color === "amarillo" && isAlternarColor === true ? "brillar" : null
          }`}
          onClick={() => validacionColor("amarillo")}
        ></div>
        <div
          className={`verde ${
            color === "verde" && isAlternarColor === true ? "brillar" : null
          }`}
          onClick={() => validacionColor("verde")}
        ></div>
      </div>
      <div className="texto-semaforo text-center">
        En 5 segundos se activan los colores por orden
      </div>
      <div className="d-flex  justify-content-center pt-5"></div>
    </div>
  );
};

export default Home;
