import React from "react";

import { Div, OfferContainerBottom, OfferContainerTop } from "./styles";

const Offers: React.FC = () => {
  return (
    <>
      <OfferContainerTop>{/* <h1>ofertas</h1> */}</OfferContainerTop>
      <OfferContainerBottom></OfferContainerBottom>
      <Div />
    </>
  );
};

export default Offers;
