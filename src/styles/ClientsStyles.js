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
  color: rgb(80, 80, 80);
  align-items: center;
  width: 42%;

  h3 {
    height: 1rem;
    font-size: 3rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    width: 100%;
  }
`;

export const ClientList = styled.p`
  cursor: pointer;
  font-size: 1.5rem;
  letter-spacing: 0.5px;
  line-height: 5px;
  &&:hover {
    font-weight: 600;
  }
`;

export const AsideDetails = styled.div`
  margin: 25px auto;
  display: flex;
  font-size: 1.3rem;
  flex-direction: column;
  position: relative;
  justify-content: center;

  img {
    width: 26rem;
  }

  p {
    margin-top: 25px;
    border-bottom: 1px solid gray;
  }
`;

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

