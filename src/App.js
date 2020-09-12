import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ContactUsPage from "./pages/ContactUsPage";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Homepage />
      </Route>
      <Route path="/contactus" exact>
        <ContactUsPage />
      </Route>
    </Switch>
  );
};

export default App;
