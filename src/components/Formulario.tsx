import userForm from "../hooks/userForm";

const Fromulario = () => {
  const { formulario, onChange } = userForm({
    email: "",
    password: "",
  });
  return (
    <div>
      <h3>Formulario</h3>
      <input
        type="text"
        className="form-control"
        placeholder="Email..."
        name="email"
        onChange={({ target }) => onChange(target.value, "email")}
        value={formulario.email}
      />
      <input
        type="text"
        className="form-control mt-2 mb-2"
        placeholder="Password..."
        onChange={({ target }) => onChange(target.value, "password")}
        value={formulario.password}
      />

      <code>
        <pre>{JSON.stringify(formulario, null, 2)}</pre>
      </code>
    </div>
  );
};

export default Fromulario;
