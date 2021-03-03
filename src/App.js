import React from "react";
import NavBar from "./components/NavBar";
import CardView from "./components/CardView";
import InvestDash from "./components/InvestDash";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={CardView} />
          <Route exact path="/invest" component={InvestDash} />
          {/* <Route exact path="/project" component={Project} />
        <Route exact path="/contact" component={Contact} /> */}
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
