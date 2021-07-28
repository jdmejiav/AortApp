import React from "react";

import "firebase/auth";

import { Route, Switch, BrowserRouter } from "react-router-dom";
import CrosswordPage from "./pages/crossword";
import Login from "./pages/login";
import Logout from "./pages/logout";
import WordSearchPage from "./pages/wordsearch";


function App() {

  return (
    
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={WordSearchPage}/>
          <Route exact path="/jeje" component={CrosswordPage} />
          <Route exact path="/ingreso" component={Login} />
          <Route exact path="/registro" component={Logout} />
          <Route exact path="/crossword" component={CrosswordPage} />

        </Switch>
      </BrowserRouter>
    
  );
}
export default App;
