import React from "react";

//css
import { Container, Content, Image } from "./styles";

//assets
import FaceIcon from "../../assets/images/facebookIcon.svg";
import instagramIcon from "../../assets/images/instagramIcon.svg";
import linkedinIcon from "../../assets/images/linkedinIcon.svg";
import whatsappIcon from "../../assets/images/whatsappIcon.svg";

const SocialNetworkBar: React.FC = () => {
  return (
    <Container>
      <Content>
        <Image src={FaceIcon} alt="Facebook" />
        <Image src={whatsappIcon} alt="Whatsaapp" />
        <Image src={linkedinIcon} alt="Linkedin" />
        <Image src={instagramIcon} alt="Instagram" />
      </Content>
    </Container>
  );
};

export default SocialNetworkBar;
