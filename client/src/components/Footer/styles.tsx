import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 60px;
  background: #68b6a6;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  padding: 0 80px;
`;

export const CopyText = styled.p`
  font-weight: 700;
  font-size: 15px;
  color: #433b3b;
  margin: auto;
  @media (min-width: 576px) {
    font-size: 20px;
  }
`;
