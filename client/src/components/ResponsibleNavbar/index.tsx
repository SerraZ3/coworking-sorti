import React, { useState } from "react";

import {
  Container,
  Content,
  Image,
  LeftContent,
  LimiterContainer,
  LinksContent,
  Paglinks,
  MenuIcon,
  Title,
} from "./styles";

import SotiIcon from "../../assets/images/sorti.svg";

const ResponsibleNavbar: React.FC = () => {
  const [renderSidebar, setRenderSidebar] = useState(false);
  const [translate, setTranslate] = useState("-240px");

  const showSiderbar = () => {
    const newState = !renderSidebar;

    newState ? setTranslate("0") : setTranslate("-240px");
    setRenderSidebar(newState);
  };

  return (
    <>
      <Container>
        <LimiterContainer>
          <Content>
            <LeftContent>
              <Image src={SotiIcon} alt={"sorti"} />
              <Title>Coworking Sorti</Title>
            </LeftContent>
            <MenuIcon onClick={showSiderbar} />
          </Content>
        </LimiterContainer>
      </Container>
      <LinksContent transform={translate}>
        <LimiterContainer>
          <Paglinks href="#home">Home</Paglinks>
          <Paglinks href="#planos">Planos</Paglinks>
          <Paglinks href="#estrutura">Estrutura</Paglinks>
          {/* <Paglinks href="#Home">Blog</Paglinks> */}
          <Paglinks href="#contato">Contato</Paglinks>
        </LimiterContainer>
      </LinksContent>
    </>
  );
};

export default ResponsibleNavbar;
