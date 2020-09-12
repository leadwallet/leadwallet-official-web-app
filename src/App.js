import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ContactUsPage from "./pages/ContactUsPage";
import Tokenpage from "./pages/Tokenpage";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Homepage />
      </Route>
      <Route path="/token" exact>
        <Tokenpage />
      </Route>
      <Route path="/contactus" exact>
        <ContactUsPage />
      </Route>
    </Switch>
  );
};

export default App;
