import React, { useState } from "react";


const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {

        }}
      >
        <label>
          {" "}
          Email
          <input
            name="email"
            placeholder="Email"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label>
          {" "}
          Contraseña
          <input
            name="password"
            placeholder="Password"
            type="password"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <button type="submit"> Registrarse</button>
      </form>
    </div>
  );
};

export default Login;
