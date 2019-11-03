import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FlexColumn } from "../components/defaults/Flex";
import withAuthUser from "../components/Firebase/Session/withAuthUser";

const NavLink = styled(Link)`
  margin: 0 8px 0 0;
  text-decoration: underline;
`;

function Home({ authUser }) {
  return (
    <FlexColumn>
      welcome on trips
      <br /> <br />
      {authUser ? (
        <NavLink to="/trips">Go to your trips</NavLink>
      ) : (
        <NavLink to="/sign-in">Sign in</NavLink>
      )}
      <br />
      <NavLink to="/public-trips">Browse public trips</NavLink>
    </FlexColumn>
  );
}

export default withAuthUser(Home);
