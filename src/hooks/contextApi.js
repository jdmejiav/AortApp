import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";

export const Auth = React.createContext();

export const AuthContext = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    app.auth().onAuthStateChanged(function (user) {
      setUsuario(user);
      setShowChild(true);
    });
  }, []);

  if (!showChild) {
    return <ReactLoading type="spin" color="#fff"/>;
  } else {
    return (
      <Auth.Provider
        value={{
          usuario,
        }}
      >
        {children}
      </Auth.Provider>
    );
  }
};
