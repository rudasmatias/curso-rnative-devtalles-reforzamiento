import { useReducer, useEffect } from "react";
import { AuthState } from "../interfaces/loginInterfaces";
import { AuthAction } from "../types/loginType";
//Como será mi estado inicial??

const initialState: AuthState = {
  validando: true,
  token: null,
  username: "",
  nombre: "",
};

//Cuando tipo las actiones me facilita saber como está compuesto el objeto a retornar

//El estado no se modifica, siempre se regresa una copia

//el reducer es una función que retorna un nuevo estado -->Tiene como parametros una función, donde recibe un type y un payload, y un estado inicial

const authReducer = (
  state: AuthState,
  { type, payload }: AuthAction
): AuthState => {
  switch (type) {
    case "logout":
      return {
        validando: false,
        token: null,
        nombre: "",
        username: "",
      };

    case "login":
      const { nombre, username } = payload;
      return {
        ...state,
        token: "holaMundo",
        nombre: nombre,
        username: username,
      };

    default:
      return state;
  }
};
const Login = () => {
  const [{ validando, token, nombre }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout", payload: null });
    }, 1500);
  }, []);

  const login = () => {
    dispatch({
      type: "login",
      payload: {
        nombre: "Matias",
        username: "Loric",
      },
    });
  };

  const logout = () => {
    dispatch({ type: "logout", payload: null });
  };

  return (
    <>
      <h3>Login</h3>

      {/*  useReducer utilizado como un estado local un poco más complejo el que useState, es parecido al concepto de redux */}

      {validando ? (
        <div className="alert alert-info">Validando...</div>
      ) : (
        <div>
          {token ? (
            <div>
              <div className="alert alert-success">
                Autenticado como: {nombre}
              </div>
              <button className="btn btn-danger m-1" onClick={logout}>
                Logout
              </button>
            </div>
          ) : (
            <div>
              <div className="alert alert-danger">No autenticado</div>
              <button className="btn btn-primary" onClick={login}>
                Login
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Login;
