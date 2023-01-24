import React from "react";
import {
  BannerContainer,
  BannerLeftContent,
  BannerRedTitle,
  BannerRightContent,
  BannerTitle,
  BigCircle,
  Container,
  FirstImage,
  SecondImage,
  ThirdImage,
  OrangeBigCicle,
  SmallCircle,
} from "./styles";

import image1 from "../../assets/images/banner1.png";
import image2 from "../../assets/images/banner2.png";
import image3 from "../../assets/images/banner3.png";

const Banner: React.FC = () => {
  return (
    <Container id="home">
      <BannerContainer>
        <BannerLeftContent>
          <BannerTitle>
            <BannerRedTitle>Aumente seus resultados </BannerRedTitle>
            sem se preocupar com o espaço!
          </BannerTitle>
        </BannerLeftContent>
        <BannerRightContent>
          <SecondImage src={image2} alt={"banner image"} />
          <ThirdImage src={image3} alt={"banner image"} />
          <FirstImage src={image1} alt={"banner image"} />
          <OrangeBigCicle />
          <SmallCircle />
          <BigCircle />
        </BannerRightContent>
      </BannerContainer>
    </Container>
  );
};

export default Banner;
