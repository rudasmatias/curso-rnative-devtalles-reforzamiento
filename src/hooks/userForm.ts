import { useState } from "react";

const userForm = <T extends Object>(formulario: T) => {
  const [state, setState] = useState(formulario);

  const onChange = (value: string | number, name: keyof T) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  return {
    formulario: state,
    onChange,
  };
};

export default userForm;
