import styled from "styled-components";

export const Container = styled.div`
  background: #68b6a6;
  width: 100%;
  height: 29px;
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 100;
`;

export const LimitContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  max-width: 1200px;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  /* width: 150px; */
  width: 100px;
  padding: 0px 56px 0 0;
`;

export const Image = styled.img`
  padding: 0px 5px;
  font-size: 1px;
`;

export const Link = styled.a`
  display: block;
  margin: auto 0;
`;
