import React, { useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useAuth } from "../firebase/AuthContext";
import loginImg from "../components/images/loginImg.jpg";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Fallo al crear la cuenta");
    }

    setLoading(false);
  }

  return (
    <div>
      <NavBar />

      <div className="root-login">
        <section className="login">
          <div className="login-container">
            <h1 className="titulo-login">Registro</h1>
            {error && <h1>{error}</h1>}

            <input
              className="input-login"
              type="email"
              placeholder="Correo"
              autoFocus
              required
              ref={emailRef}
            />

            <input
              className="input-login"
              type="password"
              placeholder="Contraseña"
              required
              ref={passwordRef}
            />
            <div className="btnContainer">
              <a
                className="btn-iniciar-sesion"
                onClick={handleSubmit}
                disabled={loading}
              >
                Registrate
              </a>
              <p>
                Ya tienes cuenta?{" "}
                <Link to="/login">
                  <span>Inicia Sesión</span>
                </Link>
              </p>
            </div>
          </div>
          <div className="login-img-container">
            <img className="login-img" src={loginImg}></img>
          </div>
        </section>
      </div>
    </div>
  );
}
