import React from "react";

import { Container, Content, CopyText } from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <Content>
        <CopyText>&#169;2023 Sorti Coworking</CopyText>
      </Content>
    </Container>
  );
};

export default Footer;
