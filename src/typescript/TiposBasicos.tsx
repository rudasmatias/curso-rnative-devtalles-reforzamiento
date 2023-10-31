import { useState } from "react";
const TiposBasicos = () => {
  const nombre: string = "Matias";
  const edad: number = 31;
  let estaActivo: boolean = true;

  const poderes: string[] = ["Velocidad", "Volar", "Respirar bajo el agua"];
  //const poderes: (string|number)[] = []; //"Velocidad", "Volar", "Respirar bajo el agua" ok, acepta numbers y strings en el array
  //poderes.push(1); (ERROR)
  poderes.push("2");
  const [activo, setActivo] = useState<string>("Desaparecer");
  const [bol, setBol] = useState<boolean>(true);
  const aparece = (): void => {
    activo === "Desaparecer" ? setActivo("Aparecer") : setActivo("Desaparecer");
    setBol(!bol);
  };

  return (
    <>
      <h3>Tipos básicos</h3>
      <button onClick={aparece}>{activo}</button>
      <h4>{bol && `Mi nombre es ${nombre}, tengo ${edad} años.`}</h4>
      {estaActivo && "Aguante Boca (en true)"}
      <br />
      {poderes.join(", ")}
    </>
  );
};

export default TiposBasicos;
