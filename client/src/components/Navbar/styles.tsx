import styled from "styled-components";

export const Container = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid #00000017;
  background-color: #ffffff;
  position: fixed;
  z-index: 100;
  top: 29px;
  display: none;
  @media (min-width: 576px) {
    display: block;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  padding: 0 30px;
  margin: 0 auto;
  height: 50px;
`;

export const LeftContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 180px;
`;

export const Image = styled.img`
  border-radius: 50%;
  height: 34px;
`;

export const Title = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  text-align: right;
  letter-spacing: -0.04em;
  color: black;
`;

export const RightContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  max-width: 310px;
`;

export const Paglinks = styled.a`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.01em;
  color: #433b3b;
`;
