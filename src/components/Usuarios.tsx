/* import { useEffect, useRef, useState } from "react";
import { getUsers } from "../api/reqRes";
import { TopLevel, User } from "../interfaces/reqRes"; */
import { User } from "../interfaces/reqRes";
import useUsuarios from "../hooks/useUsuarios";

//Endpoint a utilizar: https://reqres.in/api/users?page=2

const Usuarios = () => {
  //   const [usuario, setUsuario] = useState<User[]>([]);
  //   const pageRef = useRef(1);

  //   useEffect(() => {
  //     //Llamado a api
  //     //Las interfaces no ocupan espacio en memoria, por lo que por más que tengan definidos 1 millon de tipo, no pesa nada
  //     //Me autocompleta todas las key de los objetos de la api
  //     /*     getUsers<TopLevel>("/users")
  //       .then((res) => {
  //         setUsuario(res.data.data);
  //       })
  //       .catch((err) => console.log(err));*/
  //     /*   return () => {
  //         cargarUsuarios();
  //       }; */

  //     return () => {
  //       cargarUsuarios();
  //     };
  //   }, []);

  //   const cargarUsuarios = async () => {
  //     try {
  //       const res = await getUsers<TopLevel>("/users", {
  //         params: {
  //           page: pageRef.current,
  //         },
  //       });

  //       //Verifico si hay información en la data (hay elementos en el array de usuarios)
  //       if (res.data.data.length > 0) {
  //         setUsuario(res.data.data);
  //         pageRef.current++;
  //       } else {
  //         alert("No hay más registros");
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  const { cargarUsuarios, usuario } = useUsuarios();

  const renderItem = (usuario: User) => {
    return (
      <tr key={usuario.id}>
        <td>
          <img
            src={usuario.avatar}
            alt=""
            style={{ width: 35, borderRadius: 100 }}
          />
        </td>
        <td>{usuario.first_name}</td>
        <td>{usuario.email}</td>
      </tr>
    );
  };

  //O
  //     const renderItem = ({ id, first_name, avatar, email }: User) => {
  //     return (
  //       <tr key={id}>
  //         <td>{<img src={avatar} alt="" />}</td>
  //         <td>{first_name}</td>
  //         <td>{email}</td>
  //       </tr>
  //     );
  //   };

  //Utilizo una función reutilizable con un formato asyc await para manejar la promesa del axios y trycatch para manejar errores

  return (
    <>
      <h3>Usuarios</h3>
      <p>Quiero mostrar una lista de usuarios que van a venir de una API</p>
      <table className="table table-dark table-striped table-hover ">
        <thead>
          <tr className="table-primary">
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody className="table-group-divider ">
          {/* Realizo un map del array de user, generando una row por user */}
          {/*           {usuario.map((user) => (
            <tr key={user.id}>
              <td>
                <img
                  className="img-fluid rounded float-start border border-primary"
                  src={user.avatar}
                  alt={user.email}
                />
              </td>
              <td>{user.first_name}</td>
              <td>{user.email}</td>
            </tr>
          ))} */}

          {usuario.map((usuario: User) => renderItem(usuario))}
        </tbody>
      </table>
      {/* Paginación */}
      <button className="btn btn-primary" onClick={cargarUsuarios}>
        Anteriores
      </button>

      <button className="btn btn-primary m-1" onClick={cargarUsuarios}>
        Siguientes
      </button>
    </>
  );
};

export default Usuarios;
