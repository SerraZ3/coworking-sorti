import React from "react";

//css
import { Container, Content, LimitContainer, Image, Link } from "./styles";

//assets
import faceIcon from "../../assets/images/facebookIcon.svg";
import instagramIcon from "../../assets/images/instagramIcon.svg";
import linkedinIcon from "../../assets/images/linkedinIcon.svg";
import whatsappIcon from "../../assets/images/whatsappIcon.svg";
import cellphone2 from "../../assets/images/cellphone2.svg";

const SocialNetworkBar: React.FC = () => {
  return (
    <Container>
      <LimitContainer>
        <Content>
          <Link>
            <Image src={faceIcon} alt="Facebook" />
          </Link>
          <Link>
            <Image src={whatsappIcon} alt="WhatsApp" />
          </Link>
          {/* <Link>
            <Image src={linkedinIcon} alt="Linkedin" />
          </Link> */}
          <Link
            href={"https://www.instagram.com/clinicasorti"}
            target={"_blank"}
          >
            <Image src={instagramIcon} alt="Instagram" />
          </Link>
          <Link href="tel:+557332111648" target={"_blank"}>
            <Image src={cellphone2} alt="Celular" />
          </Link>
        </Content>
      </LimitContainer>
    </Container>
  );
};

export default SocialNetworkBar;
