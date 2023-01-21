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
              <ContactIcon src={Email} /> Email@gmail.com
<<<<<<< HEAD
            </ContactLink> */}
            {/* <ContactLink>
              <ContactIcon src={WhatsApp} /> (73) 99999-9999
            </ContactLink> */}
=======
            </ContactLink>
            <ContactLink
              href={
                "https://wa.me/5573981188718?text=Ol%C3%A1%2C+quero+fazer+parte+do+Coworking+Sorti%21"
              }
            >
              <ContactIcon src={WhatsApp} /> (73) 98118-8718
            </ContactLink>
>>>>>>> d6eeae5 (started responsive)
            <ContactLink
              href={"https://www.instagram.com/clinicasorti"}
              target={"_blank"}
            >
<<<<<<< HEAD
              <ContactIcon src={Instagram} alt="Instagram" />
              <span> @clinicasorti </span>
            </ContactLink>
            <ContactLink href="tel:+557332111648" target={"_blank"}>
              <ContactIcon src={Cellphone} alt="Telefone" /> (73) 3211-1648
=======
              <ContactIcon src={Instagram} /> @sorticoworking
            </ContactLink>
            <ContactLink>
              <ContactIcon src={Cellphone} /> (73) 3211-1648
>>>>>>> d6eeae5 (started responsive)
            </ContactLink>
          </LinksContacts>
        </LeftContacts>
        <RightSortiLogo>
          <LogoIcon src={Sorti} alt={"Sorti"} />
          <LogoText>Coworking Sorti</LogoText>
        </RightSortiLogo>
      </ContactBannerContainer>
    </Container>
  );
};

export default ContactBanner;
