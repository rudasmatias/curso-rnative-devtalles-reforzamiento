type LoginPayload = {
  username: string;
  nombre: string;
};

export type AuthAction =
  | { type: "logout"; payload: null }
  | {
      type: "login";
      payload: LoginPayload;
    };

//tipado de types en (relación de reducer)
