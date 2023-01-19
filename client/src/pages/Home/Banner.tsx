import React from "react";
import {
  BannerContainer,
  BannerLeftContent,
  BannerRedTitle,
  BannerRightContent,
  BannerTitle,
  BigCircle,
  OrangeBigCicle,
  SmallCircle,
} from "./styles";

const Banner: React.FC = () => {
  return (
    <BannerContainer>
      <BannerLeftContent>
        <BannerTitle>
          <BannerRedTitle>Aumente seus resultados </BannerRedTitle>
          sem se preocupar com o espaço!
        </BannerTitle>
      </BannerLeftContent>
      <BannerRightContent>
        <OrangeBigCicle />
        <BigCircle />
        <SmallCircle />
      </BannerRightContent>
    </BannerContainer>
  );
};

export default Banner;
