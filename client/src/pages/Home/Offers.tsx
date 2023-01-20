import React from "react";
import OffersCard from "../../components/OffersCard";

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
            <OffersCard></OffersCard>
            <OffersCard></OffersCard>
            <OffersCard></OffersCard>
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
