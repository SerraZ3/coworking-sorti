import React from "react";

//css
import {
  Paglinks,
  Container,
  Content,
  Image,
  LeftContent,
  RightContent,
  Title,
} from "./styles";

//assets
import SotiIcon from "../../assets/images/sorti.svg";

const Navbar: React.FC = () => {
  return (
    <Container>
      <Content>
        <LeftContent>
          <Image src={SotiIcon} alt={"sorti"} />
          <Title>Coworking Sorti</Title>
        </LeftContent>
        <RightContent>
          <Paglinks href="#home">Home</Paglinks>
          <Paglinks href="#planos">Planos</Paglinks>
          <Paglinks href="#estrutura">Estrutura</Paglinks>
          {/* <Paglinks href="#Home">Blog</Paglinks> */}
          <Paglinks href="#contato">Contato</Paglinks>
        </RightContent>
      </Content>
    </Container>
  );
};

export default Navbar;
