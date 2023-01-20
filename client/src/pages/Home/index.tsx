import React from "react";
import Banner from "./Banner";
import ContactBanner from "./ContactBanner";
import ContactForm from "./ContactFom";
import Offers from "./Offers";
import SlidePhotos from "./SlidePhotos";

import { Container, Div } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Banner />
      <Offers />
      <SlidePhotos />
      <ContactForm />
      <ContactBanner />
    </Container>
  );
};

export default Home;
