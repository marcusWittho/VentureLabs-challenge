import styled from "styled-components";

export const LabelField = styled.label`
  font-family: Poppins, sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.6px;
  display: inline-block;
  margin: 25px 0px 3px 16px;
`;

export const InputField = styled.input`
  font-size: 1.3rem;
  border: 2px solid rgba(1, 235, 245, 0.4);
  border-radius: 2rem;
  outline: none;
  padding-left: 10px;
  width: 24rem;
  height: 2.5rem;
  :focus {
    box-shadow: 0px 0px 8px rgba(1, 235, 245, 0.7);
  }
`;
