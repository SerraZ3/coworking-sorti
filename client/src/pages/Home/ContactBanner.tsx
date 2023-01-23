import React from "react";
import {
  ContactBannerContainer,
  ContactIcon,
  ContactLink,
  ContactsTitle,
  Container,
  LeftContacts,
  LinksContacts,
  LogoIcon,
  LogoText,
  RightSortiLogo,
} from "./styles";

import Email from "../../assets/images/email.svg";
import Cellphone from "../../assets/images/cellphone.svg";
import Instagram from "../../assets/images/instagram.svg";
import WhatsApp from "../../assets/images/whatsapp.svg";
import Sorti from "../../assets/images/sorti.svg";

const ContactBanner: React.FC = () => {
  return (
    <Container id="contato">
      <ContactBannerContainer>
        <LeftContacts>
          <ContactsTitle>Contatos</ContactsTitle>
          <LinksContacts>
            {/* <ContactLink>
              <ContactIcon src={Email} alt={"Email"}/> Email@gmail.com
            </ContactLink> */}
            <ContactLink
              href={
                "https://wa.me/5573981188718?text=Ol%C3%A1%2C+quero+fazer+parte+do+Sorti+Coworking%21"
              }
              target={"_blank"}
            >
              <ContactIcon src={WhatsApp} alt={"WhatsApp"} /> (73) 98118-8718
            </ContactLink>
            <ContactLink
              href={"https://www.instagram.com/sorticoworking/"}
              target={"_blank"}
            >
              <ContactIcon src={Instagram} alt={"Instagram"} /> @sorticoworking
            </ContactLink>
            <ContactLink href="tel:+557332111648" target={"_blank"}>
              <ContactIcon src={Cellphone} alt={"Cellphone"} /> (73) 3211-1648
            </ContactLink>
          </LinksContacts>
        </LeftContacts>
        <RightSortiLogo>
          <LogoIcon src={Sorti} alt={"Sorti"} />
          <LogoText>Sorti Coworking</LogoText>
        </RightSortiLogo>
      </ContactBannerContainer>
    </Container>
  );
};

export default ContactBanner;
