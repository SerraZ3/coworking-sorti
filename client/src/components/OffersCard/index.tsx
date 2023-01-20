import React from "react";

//css
import { Container, Image, TextContent, Title, TopContent } from "./styles";

//assets
import Sala1 from "../../assets/images/sala1.jpg";

const OffersCard: React.FC = () => {
  return (
    <Container>
      <TopContent>
        <Image src={Sala1} alt="sala1" />
      </TopContent>
      <Title> Espaços compartilhados</Title>
      <TextContent>
        Pensado para profissionais autônomos, freelancers e pequenas empresas,
        são os planos mais acessíveis do Coworking Sorti
      </TextContent>
    </Container>
  );
};

export default OffersCard;
