import { useState } from "react";
const useDisabled = () => {
  const [disable, setDisable] = useState<boolean>(true);

  const enable = (initial: number, value: number) => {
    if (initial !== value) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  return {
    disable,
    enable,
  };
};

export default useDisabled;
