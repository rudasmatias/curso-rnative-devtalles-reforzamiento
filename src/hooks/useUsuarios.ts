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
    const res = await getUsers<TopLevel>("/users", {
      params: {
        page: pageRef.current,
      },
    });

    if (res.data.data.length > 0) {
      setUsuario(res.data.data);
    } else {
      pageRef.current--;
      alert("No hay más registros");
    }
  };

  const paginaSiguiente = () => {
    pageRef.current++;
    console.log(pageRef.current);
    cargarUsuarios();
  };

  const paginaAnterior = () => {
    if (pageRef.current > 1) {
      pageRef.current--;
      console.log(pageRef.current);
      cargarUsuarios();
    }
  };

  return {
    usuario,
    paginaAnterior,
    paginaSiguiente,
  };
};

export default useUsuarios;
