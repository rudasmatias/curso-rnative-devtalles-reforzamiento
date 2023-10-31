const Funciones = () => {
  //un functional components retorna un jsx
  const sumar = (a: number, b: number) => {
    return a + b;
  };

  /*   const multiplicacion = (a, b) => {
    return a + b; //toma los parámetros como tipo any
  }; */
  /*   const resta = (): number => {
    return 1+2
  }; */

  return (
    <div>
      <h3>Funciones</h3>
      <span>El resultado es: {sumar(2, 10).toString()}</span>
    </div>
  );
};

export default Funciones;
