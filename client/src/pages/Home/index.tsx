import React from "react";
import Banner from "./Banner";
import Offers from "./Offers";

import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Banner />
      <Offers />
    </Container>
  );
};

export default Home;
