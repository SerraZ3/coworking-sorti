import styled from "styled-components";

export const Div = styled.div`
  height: 900px;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const BannerContainer = styled.div`
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  /* margin-bottom: -300px; */
`;

export const BannerLeftContent = styled.div`
  height: 336px;
  left: 61px;
  /* border: 1px solid black; */
  max-width: 500px;
`;

export const BannerTitle = styled.p`
  font-weight: 500;
  font-size: 56px;
  line-height: 70px;
  letter-spacing: -0.04em;
  color: #433b3b;
`;

export const BannerRedTitle = styled.span`
  color: #af4500;
  font-weight: 600;
`;

export const BannerRightContent = styled.div`
  /* height: 336px;
  left: 61px; */
  position: relative;
  width: 500px;
`;

export const SmallCircle = styled.div`
  width: 274px;
  height: 286px;
  background: #44c9ae;
  border-radius: 50%;
  position: absolute;

  top: -79px;
  left: 181px;
  @media (min-width: 800px) {
    height: 230px;
    width: 230px;
  }
`;

export const BigCircle = styled.div`
  width: 353px;
  height: 358px;
  background: #44c9ae;
  border-radius: 50%;
  position: absolute;
  top: -166px;
  left: 162px;
  @media (min-width: 800px) {
    height: 151px;
    width: 150px;
  }
`;

export const OrangeBigCicle = styled.div`
  width: 353px;
  height: 358px;
  background: #ca753e;
  border-radius: 50%;
  position: absolute;
  top: -156px;
  left: 259px;
  @media (min-width: 800px) {
    height: 230px;
    width: 230px;
  }
`;

export const OfferContainerTop = styled.div`
  height: 250px;
  width: 100%;
  background: linear-gradient(
    183deg,
    #fffafa,
    #fffafa 50%,
    #68b6a6 51%,
    #68b6a6
  );
`;

export const OfferContainerCenter = styled.div`
  height: 500px;
  background-color: #68b6a6;
`;

export const TextContainer = styled.div`
  max-width: 276px;
  margin-left: 50px;
`;

export const OfferTitle = styled.p`
  font-weight: 700;
  font-size: 20px;
  color: #ffffff;
`;

export const OfferText = styled.p`
  font-weight: 400;
  font-size: 25px;
  line-height: 26px;
  color: #433b3b;
`;

export const OfferTextContrast = styled.span`
  font-weight: 700;
  font-size: 25px;
  line-height: 26px;
  color: #ffffff;
`;

export const CardContainer = styled.div`
  /* max-width: 276px; */
  padding-top: 40px;
  width: 1000px;
  max-width: 90vw;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
`;

export const OfferContainerBottom = styled.div`
  padding: 0 40px;
  height: 250px;
  width: 100%;
  background: linear-gradient(
    177deg,
    #68b6a6,
    #68b6a6 51%,
    #fffafa 52%,
    #fffafa
  );
  /* position: relative;
  position: relative; */
`;

export const RightText = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
export const SlideTextContainer = styled.div`
  max-width: 276px;
  margin-left: 50px;
  text-align: right;
  padding: 0 0 50px 0;
`;

export const SlideTitle = styled.p`
  font-weight: 700;
  font-size: 20px;
  color: #68b6a6;
`;
export const SlideText = styled.p`
  font-weight: 400;
  font-size: 25px;
  line-height: 26px;
  color: #000000;
`;

export const SlideContrast = styled.span`
  font-weight: 700;
  font-size: 25px;
  line-height: 26px;
  color: #af4500;
`;

export const SliderContainer = styled.div`
  height: 450px;
`;

export const FormContainer = styled.div`
  width: 100%;
  /* height: 450px; */
  background: #68b6a6;
`;

export const InsideFormContainer = styled.div`
  height: 450px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* justify-content: space-between; mudado para mapa full */
  padding: 0 30px;
`;

export const IframeContaner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  /* width: 500px; mudado para deixar o mapa full */
`;
export const FormContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
`;

export const ContactBannerContainer = styled.div`
  height: 247px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const LeftContacts = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 500px; */
`;

export const LinksContacts = styled.div`
  display: flex;
  width: 500px;
  /* max-width: 50%; */
  flex-wrap: wrap;
`;
export const ContactsTitle = styled.p`
  padding: 15px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  text-align: left;
  color: #433b3b;
`;

export const ContactLink = styled.a`
  font-weight: 600;
  font-size: 17px;
  color: #433b3b;
  padding: 9px 15px;
  width: 250px;
  text-decoration: none;
  display: flex;
`;

export const ContactIcon = styled.img`
  font-size: 15px;
  padding-right: 10px;
`;

export const RightSortiLogo = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoIcon = styled.img`
  padding: 0 10px 0 0;
  height: 60px;
`;

export const LogoText = styled.p`
  /* padding: 10px; */
  font-weight: 600;
  font-size: 24px;
  color: #000000;
`;
