import { useState } from "react";
const useCounter = (initial: number = 0) => {
  //UN HOOK NO ES MÁS QUE UNA FUNCIÓN

  //Puedo setear el valor inicial del estado
  const [valor, setValor] = useState<number>(initial);

  const acumular = (numero: number) => {
    setValor(valor + numero);
  };

  const reset = (numero: number) => {
    setValor(numero);
  };

  return {
    valor,
    acumular,
    reset,
  };
};

export default useCounter;
