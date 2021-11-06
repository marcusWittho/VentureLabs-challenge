import styled from "styled-components";

export const Aside = styled.aside`
  background: white;
  min-height: 100%;
  background: linear-gradient(
    to bottom right,
    rgba(255, 255, 255, 1),
    rgba(1, 235, 245, 1)
    );
    border-radius: 2rem 0 0 2rem;
    backdrop-filter: blur(2rem);
    display: flex;
    width: 42%;

  .logoVenturelabs {
    display: none;
    position: absolute;
    top: 22%;
    background: rgb(1, 235, 245);
    width: 21rem;
  }

  .logoVenturelabs_V3 {
    position: absolute;
    bottom: 5%;
    left: 9%;
    width: 8rem;
  }
`;
