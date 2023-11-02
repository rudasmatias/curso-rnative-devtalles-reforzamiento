import { getUsers } from "../api/reqRes";
import { TopLevel, User } from "../interfaces/reqRes";
import { useRef, useEffect, useState } from "react";

const useUsuarios = () => {
  const [usuario, setUsuario] = useState<User[]>([]);
  const pageRef = useRef(1);

  useEffect(() => {
    return () => {
      cargarUsuarios();
    };
  }, []);

  const cargarUsuarios = async () => {
    try {
      const res = await getUsers<TopLevel>("/users", {
        params: {
          page: pageRef.current,
        },
      });

      if (res.data.data.length > 0) {
        setUsuario(res.data.data);
        pageRef.current++;
      } else {
        alert("No hay más registros");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    cargarUsuarios,
    usuario,
    setUsuario,
  };
};

export default useUsuarios;
