import React from "react";

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      pass: "",
    };
  }

  render() {
    const handleOnSubmit = (e) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.pass)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          window.location("/")
          console.log("funcinó")
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorMessage);
          // ..
        });
    };

    return (
      <div className="login-container">
        <div className="input-container">
          <form>
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
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
            ></input>
            <button
              onSubmmit={(e) => {
                handleOnSubmit(e);
              }}
            >
              Ingresar
            </button>
          </form>
        </div>
      </div>
    );
  }
}
