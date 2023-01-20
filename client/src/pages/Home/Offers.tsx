import React from "react";
import OffersCard from "../../components/OffersCard";

import Sala1 from "../../assets/images/sala1.jpg";
import Sala2 from "../../assets/images/sala2.jpg";
import Maps from "../../assets/images/maps.jpg";

import {
  CardContainer,
  Container,
  OfferContainerBottom,
  OfferContainerCenter,
  OfferContainerTop,
  OfferText,
  OfferTextContrast,
  OfferTitle,
  TextContainer,
} from "./styles";

const Offers: React.FC = () => {
  return (
    <>
      <OfferContainerTop />
      <OfferContainerCenter>
        <Container>
          <TextContainer>
            <OfferTitle>Planos e preço</OfferTitle>
            <OfferText>
              Conheça nossas opções e faça um
              <OfferTextContrast> teste gratis</OfferTextContrast>
            </OfferText>
          </TextContainer>
          <CardContainer>
            <OffersCard
              image={Sala1}
              title="Espaços compartilhados"
              text="Pensado para profissionais autônomos, freelancers e pequenas empresas,
        são os planos mais acessíveis do Coworking Sorti."
            ></OffersCard>
            <OffersCard
              image={Sala2}
              title="Salas Privativas"
              text="Os planos de salas privativas da Sorti contam com todos os benefícios de um coworking, em um espaço reservado."
            ></OffersCard>
            <OffersCard
              image={Maps}
              title="Plano de endereço"
              text="No nosso plano de escritório virtual você conta com endereço fiscal e/ou endereço comercial. Excelente preço e localização."
            ></OffersCard>
          </CardContainer>
        </Container>
      </OfferContainerCenter>
      <OfferContainerBottom />
    </>
    // <Container>
    //   {/* <OfferContainerTop></OfferContainerTop>
    //   <OfferContainerBottom>
    //     <TextContainer>
    //       <OfferTitle>Planos e preço</OfferTitle>
    //       <OfferText>
    //         Conheça nossas opções e faça um
    //         <OfferTextContrast> teste gratis</OfferTextContrast>
    //       </OfferText>
    //     </TextContainer>
    //     <CardContainer>
    //       <OffersCard></OffersCard>
    //       <OffersCard></OffersCard>
    //       <OffersCard></OffersCard>
    //     </CardContainer>
    //   </OfferContainerBottom> */}
    // </Container>
  );
};

export default Offers;
