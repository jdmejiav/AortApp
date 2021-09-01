import React from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";
import CrosswordPage from "./pages/crossword";
import Login from "./pages/login";
import WordSearchPage from "./pages/wordsearch";
import AhorcaditoPage from "./pages/ahorcadito";
import Rompecabezas from "./pages/rompecabezas";
import CardPage from "./pages/cardpairs";
import HomePage from "./pages/rolette";
import { AuthProvider } from "./firebase/AuthContext";
import PrivateRoute from "./firebase/PrivateRoute";
import Signup from "./pages/signup";




function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={HomePage} />
            <PrivateRoute exact path="/wordsearch" component={WordSearchPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <PrivateRoute exact path="/crossword" component={CrosswordPage} />
            <PrivateRoute exact path="/ahorcadito" component={AhorcaditoPage} />
            <PrivateRoute exact path="/jigsaw" component={Rompecabezas} />
            <PrivateRoute exact path="/card" component={CardPage} />
          </Switch>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}
export default App;
