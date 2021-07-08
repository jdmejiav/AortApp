import React from "react";

import CrosswordPage from "./pages/crossword"
import { Route, Switch, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CrosswordPage} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
