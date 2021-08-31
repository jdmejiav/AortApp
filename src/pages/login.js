import React, { Component } from "react";

import "../styles/login.css";
import NavBar from "../components/NavBar";
import "firebase/auth";
import { app } from "../firebaseConfig";

import { Form, Icon, Input, Button } from "antd";
import { async } from "q";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      pass: "",
    };
  }

  render() {
    const handleOnSubmit = async (e) => {
      await app
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.pass);
      console.log("finalizó");
    };
    return (
      <div>
        <NavBar />
        <div className="login-container">
          <div className="input-container">
            <Form
              action={(e) => {
                console.log("se manda")
                handleOnSubmit();
                e.preventDefault();
              }}
            >
              <Input
                type="email"
                placeholder="correo@example.com"
                onChange={(e) => {
                  this.setState({ email: e.target.value });
                }}
              ></Input>
              <Input
                type="password"
                placeholder="contraseña"
                onChange={(e) => {
                  this.setState({ email: e.target.value });
                }}
              ></Input>
              <Input type="submit" value="Ingresar"></Input>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
