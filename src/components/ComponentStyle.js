import styled from "styled-components";

const NavBarPage = styled.div`
  width: 100%;
  height: 70px;
  padding: 0 18px;
  position: fixed;
  top: 0px;
  left: 0px;

  background-color: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-family: "Playball", cursive;
    font-weight: 400;
    font-size: 40px;
    font-style: normal;
    line-height: 50px;
    color: #ffffff;
    background-color: #126ba5;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 100px;
  }
`;

const MenuPage = styled.div`
  width: 100%;
  height: 70px;
  padding: 0 18px;
  position: fixed;
  bottom: 0px;
  left: 0px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #ffffff;

  button {
    :nth-child(1) {
      color: #126ba5;
      background-color: #ffffff;
      border: 1px solid #ffffff;
      font-family: "Lexend Deca", sans-serif;
      font-weight: 400;
      font-size: 18px;
      font-style: normal;
      line-height: 22px;
    }
    :nth-child(2) {
      color: #ffffff;
      background-color: #52b6ff;
      border: 1px solid #ffffff;
      font-family: "Lexend Deca", sans-serif;
      font-weight: 400;
      font-size: 18px;
      font-style: normal;
      line-height: 22px;
    }
    :nth-child(3) {
      color: #126ba5;
      background-color: #ffffff;
      border: 1px solid #ffffff;
      font-family: "Lexend Deca", sans-serif;
      font-weight: 400;
      font-size: 18px;
      font-style: normal;
      line-height: 22px;
    }
  }
`;

export { NavBarPage, MenuPage };
