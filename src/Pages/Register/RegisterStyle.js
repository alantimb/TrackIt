import styled from "styled-components";

const RegisterPage = styled.div`
  width: 100%;
  margin: 70px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 180px;
  }

  form {
    margin-top: 30px;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    input {
      width: 300px;
      height: 45px;
      margin-bottom: 6px;
      padding: 10px;

      font-family: "Lexend Deca", sans-serif;
      font-weight: 400;
      line-height: 25px;
      font-size: 20px;
      font-style: normal;
      border: 1px solid #d5d5d5;
      border-radius: 5px;
      color: #dbdbdb;
      background-color: #ffffff;
    }

    button {
      width: 300px;
      height: 45px;

      font-family: "Lexend Deca", sans-serif;
      font-weight: 400;
      line-height: 25px;
      font-size: 21px;
      font-style: normal;
      border: 0 solid #d5d5d5;
      border-radius: 5px;
      color: #ffffff;
      background-color: #52b6ff;

      &:hover {
        cursor: pointer;
      }
    }

    a {
      margin-top: 25px;
      text-align: center;
      text-decoration: underline;

      font-family: "Lexend Deca", sans-serif;
      font-weight: 400;
      line-height: 18px;
      font-size: 14px;
      color: #52b6ff;
    }
  }
`;

export default RegisterPage;
