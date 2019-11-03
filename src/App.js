import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import Routes from "./Routes";
import GlobalStyles from "./globalStyles";
import Navigation from "./components/Navigation";
import { FirebaseContext } from "./components/Firebase";
import Firebase from "./components/Firebase";
import { withAuthentication } from "./components/Firebase/Session";

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 400px;
  padding: 20px;
  margin-bottom: 36px;
`;

function FirebaseApp() {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <WithAuthenticationApp />
    </FirebaseContext.Provider>
  );
}

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Wrapper>
        <Navigation />
        <Routes />
      </Wrapper>
    </Router>
  );
}

const WithAuthenticationApp = withAuthentication(App);

export default FirebaseApp;
