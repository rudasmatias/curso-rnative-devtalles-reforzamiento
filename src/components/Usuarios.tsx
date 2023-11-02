import { useEffect, useState } from "react";
import { getUsers } from "../api/reqRes";
import { TopLevel, User } from "../interfaces/reqRes";

//Endpoint a utilizar: https://reqres.in/api/users?page=2

const Usuarios = () => {
  const [usuario, setUsuario] = useState<User[]>([]);

  useEffect(() => {
    //Llamado a api
    //Las interfaces no ocupan espacio en memoria, por lo que por más que tengan definidos 1 millon de tipo, no pesa nada
    //Me autocompleta todas las key de los objetos de la api
    getUsers<TopLevel>("/users")
      .then((res) => {
        setUsuario(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

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
      <button className="btn btn-primary">Siguientes</button>
    </>
  );
};

export default Usuarios;
