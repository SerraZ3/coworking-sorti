import React from "react";

import {
  Div,
  OfferContainer,
  OfferContainerBottom,
  OfferContainerTop,
  OfferText,
  OfferTitle,
  TextContainer,
} from "./styles";

const Offers: React.FC = () => {
  return (
    <>
      {/* <OfferContainer> */}
      <OfferContainerTop></OfferContainerTop>
      <OfferContainerBottom>
        <TextContainer>
          <OfferTitle>Planos e preço</OfferTitle>
          <OfferText>Conheça nossas opções e faça um teste gratis</OfferText>
        </TextContainer>
      </OfferContainerBottom>
      {/* </OfferContainer> */}
      <Div />
    </>
  );
};

export default Offers;
