import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default function BasicExample() {
  return (
    <Router>
      <div>
        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Forms">
            <Forms />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/chat">
            <Chatfunc />
          </Route>
          <Route path="/chakra">
            <Chakra />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}