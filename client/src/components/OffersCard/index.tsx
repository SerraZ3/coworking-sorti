import React from "react";

//css
import { Container, Image } from "./styles";

//assets
import Sala1 from "../../assets/images/sala1.jpg";

const OffersCard: React.FC = () => {
  return (
    <Container>
      <Image src={Sala1} alt="sala1" />
    </Container>
  );
};

export default OffersCard;
