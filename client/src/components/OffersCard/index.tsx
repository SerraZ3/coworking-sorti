import React from "react";

//css
import { Container, Image, TextContent, Title, TopContent } from "./styles";

//assets
import Sala1 from "../../assets/images/sala1.jpg";

interface IOffersCard {
  title: string;
  text: string;
  image: any;
}

const OffersCard: React.FC<IOffersCard> = ({ title, text, image }) => {
  return (
    <Container>
      <TopContent>
        <Image src={image} alt={title} />
      </TopContent>
      <Title> {title}</Title>
      <TextContent>{text}</TextContent>
    </Container>
  );
};

export default OffersCard;
