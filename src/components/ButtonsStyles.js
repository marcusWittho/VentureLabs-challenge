import styled from "styled-components";

export const Button = styled.button`
  width: 17rem;
  height: 3rem;
  font-size: 1.3rem;
  border: 1px solid gray;
  border-radius: 0.6rem;
  outline: none;
  background-image: linear-gradient(to top, #ccc, #fff);
  &&:hover {
    background-image: linear-gradient(to top, #bbb, #eee);
  }
  &&:active {
    background: #bbb;
  }
`;
