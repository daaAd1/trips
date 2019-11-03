import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FlexRow } from "./defaults/Flex";
import withAuthUser from "./Firebase/Session/withAuthUser";
import SignOutButton from "./Firebase/SignOutButton";

const Wrapper = styled(FlexRow)`
  padding: 20px;
`;

const NavLink = styled(Link)`
  margin: 0 8px 0 0;
  text-decoration: underline;
`;

function Navigation({ authUser }) {
  return (
    <Wrapper>
      <NavLink to="/">Home</NavLink>
      {authUser && <SignOutButton />}
    </Wrapper>
  );
}

export default withAuthUser(Navigation);
