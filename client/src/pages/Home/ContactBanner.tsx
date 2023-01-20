import React from "react";
import {
  ContactBannerContainer,
  ContactIcon,
  ContactLink,
  ContactsTitle,
  LeftContacts,
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
    <ContactBannerContainer>
      <LeftContacts>
        {/* <ContactsTitle>Contatos</ContactsTitle> */}
        <ContactLink>
          <ContactIcon src={Email} /> Email@gmail.com
        </ContactLink>
        <ContactLink>
          <ContactIcon src={WhatsApp} /> (73) 99999-9999
        </ContactLink>
        <ContactLink>
          <ContactIcon src={Instagram} /> @clinicasorti
        </ContactLink>
        <ContactLink>
          <ContactIcon src={Cellphone} /> (73) 3333-3333
        </ContactLink>
      </LeftContacts>
      <RightSortiLogo>
        {/* <h1>ContactBanner</h1> */}
        <LogoIcon src={Sorti} alt={"Sorti"} />
        <LogoText>Coworking Sorti</LogoText>
      </RightSortiLogo>
    </ContactBannerContainer>
  );
};

export default ContactBanner;
