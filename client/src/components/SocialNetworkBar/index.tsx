import React from "react";

//css
import { Container, Content, Image, Link } from "./styles";

//assets
import FaceIcon from "../../assets/images/facebookIcon.svg";
import instagramIcon from "../../assets/images/instagramIcon.svg";
import linkedinIcon from "../../assets/images/linkedinIcon.svg";
import whatsappIcon from "../../assets/images/whatsappIcon.svg";

const SocialNetworkBar: React.FC = () => {
  return (
    <Container>
      <Content>
        <Link>
          <Image src={FaceIcon} alt="Facebook" />
        </Link>
        <Link>
          <Image src={whatsappIcon} alt="WhatsApp" />
        </Link>
        <Link>
          <Image src={linkedinIcon} alt="Linkedin" />
        </Link>
        <Link href={"https://www.instagram.com/clinicasorti"} target={"_blank"}>
          <Image src={instagramIcon} alt="Instagram" />
        </Link>
      </Content>
    </Container>
  );
};

export default SocialNetworkBar;
