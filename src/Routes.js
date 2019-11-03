import React from "react";
import { Route, Switch } from "react-router";
import SignInPage from "./components/Firebase/SignIn";
import SignUpPage from "./components/Firebase/SignUp";
import ScrollToTop from "./components/defaults/ScrollToTop";
import PasswordForgetPage from "./components/Firebase/PasswordForget";
import NotFound from "./routes/NotFound";
import Home from "./routes/Home";

function Routes() {
  return (
    <ScrollToTop>
      <Switch>
        <Route path="/" exact component={() => <Home />} />
        <Route path="/sign-in" exact component={() => <SignInPage />} />
        <Route path="/sign-up" exact component={() => <SignUpPage />} />
        <Route
          path="/password-forget"
          exact
          component={() => <PasswordForgetPage />}
        />
        {/* <Route path="/week/:id" exact component={() => <WeekDetail />} /> */}
        <Route path="*" component={NotFound} />
      </Switch>
    </ScrollToTop>
  );
}

export default Routes;
