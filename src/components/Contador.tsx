import { useState } from "react";
//<Valor generico>
const Contador = () => {
  const [valor, setValor] = useState<number>(0);

  const acumular = (numero: number) => {
    setValor((valor) => valor + numero);
  };

  return (
    <div>
      <h3>
        Contador: <small>{valor}</small>
      </h3>
      <button className="btn btn-primary " onClick={() => acumular(1)}>
        +1
      </button>
      <button className="btn btn-primary m-2" onClick={() => acumular(-1)}>
        -1
      </button>
    </div>
  );
};

export default Contador;
