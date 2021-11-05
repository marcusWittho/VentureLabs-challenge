import styled from "styled-components";

export const SectionForm = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

export const Container = styled.div`
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 2rem;
  display: flex;
  height: 68vh;
  width: 53vw;

  .asideLeft {
    background: rgb(1, 235, 245);
    border: 1px solid #ccc;
    border-radius: 2rem 0 0 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 42%;
  }

  .asideRight {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 42%;
  }

  h1 {
    color: rgb(1, 235, 245);
    font-size: 2rem;
  }

  .logoVenturelabs {
    background: rgb(1, 235, 245);
    width: 21rem;
  }

  .btnContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 12rem;
  }
`;
