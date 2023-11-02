import axios from "axios";

//Puedo colocar el nombre del archivo como la "pagina" api , de donde vienen los datos,
//Formatear constantes que funcionen como crud ya predefinidas, y utilizarlas directamentes

export const getUsers = axios.create({
  baseURL: "https://reqres.in/api",
  method: "get",
});

//Ejemplo con otras peticiones ""Con este método"
/* export const postUser = axios.create({
  baseURL: "https://reqres.in/api",
  method: "post",
}); */

/* import { TopLevel } from "../interfaces/reqRes"; */
//Puedo tipar en esta instancia o en la llamada
// export const getUsers = axios.create({
//   baseURL: "https://reqres.in/api",
//   method: "get",
// })<TopLevel>
