//que son las interfaces--> estructuras que nos permite decirle a typescrip como serán las variables de nuestro objeto

//type, class, interface

//Interfaces
//Para la creación de interfaces se definen el objeto principal y luego los hijos, sirven para ponerle reglas de validación alos objetos

interface Persona {
  //COMO QUIERO QUE LUZCAN
  nombreCompleto: string;
  edad: number;

  //Así no se hace generalmente
  /*   direccion: {
    pais: string;
    casaNo: number;
  }; */

  direccion: Direccion;
}

interface Direccion {
  pais: string;
  casaNo: number;
}

//o como type
// type Direccion = {
//   pais: string;
//   casaNo: number;
// };

const ObjectosLiterales = () => {
  const persona: Persona = {
    nombreCompleto: "Matias",
    edad: 31,
    direccion: {
      pais: "Argentina",
      casaNo: 2085,
    },
  };

  return (
    <div>
      <h3>Objetos literales</h3>

      {/* {JSON.stringify(persona)} Esto es un objeto que tiene un método que hace que al pasarle un objeto literal pueda transfomarlo en un formato json*/}

      <code>
        <pre>{JSON.stringify(persona, null, 2)}</pre>
      </code>
    </div>
  );
};

export default ObjectosLiterales;
