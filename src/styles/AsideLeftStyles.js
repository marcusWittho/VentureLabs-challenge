import styled from "styled-components";

export const Aside = styled.aside`
  background: linear-gradient(
    to bottom right,
    rgba(255, 255, 255, 1),
    rgba(1, 235, 245, 1)
  );
  border-radius: 2rem 0 0 2rem;
  backdrop-filter: blur(2rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgb(80, 80, 80);
  justify-content: center;
  width: 52%;

  .btnContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 12rem;
  }

  h2 {
    font-size: 6rem;
    margin: 0 auto;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  }

  p {
    font-size: 1.4rem;
  }
`;

export const Button = styled.button`
    width: 18rem;
    height: 3rem;
    letter-spacing: 1.5px;
    font-weight: 600;
    font-size: 1.6rem;
    border: none;
    border: 1px solid lightgray;
    border-radius: 2rem;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
    background: #eee;
    cursor: pointer;
    color: rgb(80, 80, 80);
    &&:hover {
      box-shadow: inset 5px 5px 18px rgba(0, 0, 0, 0.1);
    }
    &&:active {
      background: #fff;
      outline: none;
    }
    &&:focus {
      outline: none;
    }
`;
