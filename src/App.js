import React from "react";
import GlobalStyle from "./globalStyles";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import PricingPage from "./pages/PricingPage";

function App() {
  return (
    <Router className="App">
      <GlobalStyle />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signup">
          <SignupPage />
        </Route>
        <Route path="/pricingpage">
          <PricingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
