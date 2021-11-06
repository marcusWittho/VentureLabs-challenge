import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 2rem;
  display: flex;
  margin: 10vh auto;
  position: relative;
  height: 68vh;
  width: 940px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);

  form {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 42px;
    right: 81px;
  }

  span {
    color: red;
    margin: 5px 0 0 15px;
  }
`
