import React from "react";
import { Switch, Route } from "react-router-dom";

import Spinner from "./Spinner";
import ErrorBoundary from "./ErrorBoundary";
import Home from "../pages/Home";
import Galerie from "../pages/Galerie";
import About from "../pages/About";

import "./App.style.scss";

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<Spinner />}>
        <ErrorBoundary>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:userId" component={Galerie} />
            <Route exact path="/about" component={About} />
          </Switch>
        </ErrorBoundary>
      </React.Suspense>
    </div>
  );
}

export default App;
