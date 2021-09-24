import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useAuth } from "../firebase/AuthContext";
import "../styles/login.css";
import loginImg from "../components/images/loginImg.jpg";
export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Fallo al Iniciar Sesión");
    }

    setLoading(false);
  }

  return (
    <div>
      <NavBar />

      <div className="root-login">
        <section className="login">
          <div className="login-container">
            <h1 className="titulo-login">Inicia Sesión</h1>
            {error && <h1>{error}</h1>}
            
              <input className="input-login" type="email" placeholder="Correo" autoFocus required ref={emailRef} />
              
              <input className="input-login" type="password" placeholder="Contraseña" required ref={passwordRef} />
              <div className="btnContainer">
                <a onClick ={handleSubmit} className= "btn-iniciar-sesion" disabled={loading}>
                  Inicia Sesión
                </a>
                <p>
                  No tienes cuenta?{" "}
                  <Link to="/signup">
                    <span>Registrate</span>
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
