import React from "react";



import { Route, Switch, BrowserRouter } from "react-router-dom";
import CrosswordPage from "./pages/crossword";
import Login from "./pages/login";
import Logout from "./pages/logout";
import WordSearchPage from "./pages/wordsearch";
import AhorcaditoPage from "./pages/ahorcadito";
import Rompecabezas from "./pages/rompecabezas";
import CardPage from "./pages/cardpairs";
import HomePage from "./pages/rolette";


function App() {

  return (
    <BrowserRouter>
      <Switch>
        
        <Route exact path="/" component={HomePage} />
        <Route exact path="/wordsearch" component={WordSearchPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Logout} />
        <Route exact path="/crossword" component={CrosswordPage} />
        <Route exact path="/ahorcadito" component={AhorcaditoPage} />
        <Route exact path="/jigsaw" component={Rompecabezas} />
        <Route exact path="/card" component={CardPage} /> 
      </Switch>
    </BrowserRouter>
  );
}
export default App;
