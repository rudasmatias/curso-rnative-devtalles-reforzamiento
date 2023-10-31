import useCounter from "../hooks/useCounter";
import useDisabled from "../hooks/useDisabled";
import { useEffect } from "react";
const ContadorConHook = () => {
  const initialValue: number = 100;
  //Custom Hooks
  const { valor, acumular, reset } = useCounter(initialValue);
  const { disable, enable } = useDisabled();

  useEffect(() => {
    enable(initialValue, valor);
  }, [valor]);

  return (
    <>
      <h3>
        Contador con Hook: <small>{valor}</small>
      </h3>
      <h4>Valor Inicial {initialValue}</h4>
      <div className="d-grid gap-2 d-md-block">
        <button
          className="btn btn-primary "
          onClick={() => {
            acumular(initialValue);
          }}
        >
          +{initialValue}
        </button>
        <button
          className="btn btn-primary m-1"
          onClick={() => {
            acumular(-1);
          }}
        >
          -1
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => {
            reset(initialValue);
          }}
          disabled={disable}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default ContadorConHook;
