import styled from "styled-components";

export const Aside = styled.aside`
  background: rgb(1, 235, 245);
  border: 1px solid #ccc;
  border-radius: 2rem 0 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 42%;

  .btnContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 12rem;
  }
`;