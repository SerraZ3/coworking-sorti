import styled, { css } from "styled-components";
import { FaBars } from "react-icons/fa";

export const Container = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #ffffff;
  position: fixed;
  z-index: 100;
  top: 28px;
  @media (min-width: 576px) {
    display: none;
  }
`;

export const LimiterContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 25px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  /* width: 100%;
  max-width: 1200px;
  padding: 0 20px; */
`;

export const LeftContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 164px;
`;

export const Image = styled.img`
  border-radius: 50%;
  height: 30px;
`;

export const Title = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  text-align: right;
  letter-spacing: -0.04em;
  color: black;
`;

export const MenuIcon = styled(FaBars)`
  color: #000000;
  display: block;
  font-size: 33px;
  padding: 5px;
  cursor: pointer;
  @media (min-width: 576px) {
    display: none;
  }
`;

export const LinksContent = styled.div<{ transform: string }>(
  (props) => css`
    display: block;
    z-index: 10;
    position: fixed;
    top: 78px;
    background-color: #ffffff;
    width: 100%;
    padding: 8px 0;
    transition: all 0.3s;
    transform: translatey(${props.transform});
    @media (min-width: 576px) {
      display: none;
    }
  `
);

export const Paglinks = styled.a`
  display: block;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #433b3b;
  margin: 0 10px;
  padding: 6px 6px;
  border-radius: 5px;
  &:hover {
    color: #ffffff;
    background-color: #433b3b;
    transition: 0.6s;
  }
`;
