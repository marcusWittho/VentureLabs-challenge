import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 2rem;
  display: flex;
  font-family: Poppins, sans-serif;
  margin: 10vh auto;
  height: 68vh;
  width: 940px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
`;

export const AsideRight = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 62%;

  .logoVenturelabs {
    width: 26rem;
  }
`;
