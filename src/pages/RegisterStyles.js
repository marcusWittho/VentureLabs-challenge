import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 2rem;
  display: flex;
  margin: 10vh auto;
  height: 68vh;
  width: 53vw;

  aside {
    background: rgb(1, 235, 245);
    border: 1px solid #ccc;
    border-radius: 2rem 0 0 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    height: 100%;
    width: 42%;

    .logoVenturelabs {
      position: absolute;
      top: 32%;
      background: rgb(1, 235, 245);
      width: 21rem;
    }
  }
`
