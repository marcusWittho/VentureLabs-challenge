import styled from "styled-components";

export const Button = styled.button`
  width: 25rem;
  height: 3rem;
  color: white;
  letter-spacing: 1.5px;
  font-weight: 600;
  font-size: 1.6rem;
  border: none;
  border: 1px solid lightgray;
  border-radius: 2rem;
  margin-top: 42px;
  box-shadow: 3px 3px 5px rgba(1, 235, 245, 0.4);
  background-image: linear-gradient(to top, rgb(1, 235, 245), rgb(41, 255, 255));
  cursor: pointer;
  &&:hover {
    box-shadow: inset 5px 5px 18px rgba(0, 0, 0, 0.2);
    color: rgba(255, 255, 255, 0.9);
  }
  &&:active {
    background: rgb(1, 230, 240);
    outline: none;
  }
  &&:focus {
    outline: none;
  }
`;
