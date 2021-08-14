import React from "react";
import "firebase/auth";



import { Route, Switch, BrowserRouter } from "react-router-dom";
import CrosswordPage from "./pages/crossword";
import Login from "./pages/login";
import Logout from "./pages/logout";
import WordSearchPage from "./pages/wordsearch";
import AhorcaditoPage from "./pages/ahorcadito";
import Rompecabezas from "./pages/rompecabezas";

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Rompecabezas} />
        <Route exact path="/" component={CrosswordPage} />
        <Route exact path="/wordsearch" component={WordSearchPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Logout} />
        <Route exact path="/crossword" component={CrosswordPage} />
        <Route exact path="/ahorcadito" component={AhorcaditoPage} />
        
      </Switch>
    </BrowserRouter>
  );
}
export default App;
