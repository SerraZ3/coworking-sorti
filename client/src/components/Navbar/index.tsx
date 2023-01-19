import React from "react";

import { Container, Content, LeftContent, RightContent } from "./styles";

const Navbar: React.FC = () => {
  return (
    <Container>
      <Content>
        <LeftContent>
          <h1>Coworking</h1>
        </LeftContent>
        <RightContent>
          <p>home</p>
          <p>home</p>
          <p>home</p>
          <p>home</p>
        </RightContent>
      </Content>
    </Container>
  );
};

export default Navbar;
