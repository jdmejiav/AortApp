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
import Arterias from "./pages/Arterias";
import Home from "./pages/home";
import MEstudio from "./pages/mestudio";
import References from "./pages/references";


function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/wordsearch" component={WordSearchPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <PrivateRoute exact path="/crossword" component={CrosswordPage} />
            <PrivateRoute exact path="/ahorcadito" component={AhorcaditoPage} />
            <PrivateRoute exact path="/jigsaw" component={Rompecabezas} />
            <PrivateRoute exact path="/card" component={CardPage} />
            <PrivateRoute exact path="/juegoarterias" component={Arterias} />
            <PrivateRoute exact path="/mestudios" component={MEstudio} />
            <PrivateRoute exact path="/referencias" component={References} />
          </Switch>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}
export default App;
