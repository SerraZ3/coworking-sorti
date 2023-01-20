import styled from "styled-components";

export const Container = styled.div`
  /* width: 349px;
  height: 483px; */
  width: 263px;
  height: 380px;

  background: #ffffff;
  box-shadow: 1px 3px 19px 3px rgba(0, 0, 0, 0.25);
  border-radius: 45px;
  margin: 0 auto;
  padding-top: 20px;
`;

export const Image = styled.img`
  border-radius: 15px;
  max-width: 80%;
`;

export const TopContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.p`
  padding-top: 22px;
  font-weight: 600;
  font-size: 19px;
  color: #433b3b;
  text-align: center;
`;

export const TextContent = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 80%;
`;
export const Text = styled.p`
  font-weight: 400;
  font-size: 15px;
  color: #433b3b;
`;
