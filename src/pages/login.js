import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "../styles/login.css"
import NavBar from "../components/NavBar";
import "firebase/auth";
import { useFirebaseApp } from "reactfire";




export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      pass: "",
    };
  }

  render() {
    const handleOnSubmit = async  (e) => {
      await firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.pass);

    };

    return (
      <div>
        <NavBar/>
              <div className="login-container">
        <div className="input-container">
          
            <input
              type="email"
              placeholder="correo@example.com"
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
            ></input>
            <input
              type="password"
              placeholder="contraseña"
              onChange={(e)=> {
                this.setState({ email: e.target.value });
              }}
              onSubmmit={handleOnSubmit}
              ></input>
            <button 
              onSubmmit={(e) => {
                handleOnSubmit(e);
              }}
            >
              Ingresar
            </button>
          
        </div>
      </div>
      </div>

    );
  }
}
