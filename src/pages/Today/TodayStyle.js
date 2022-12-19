import styled from "styled-components";

const TodayPage = styled.div`
  width: 100%;
  margin-top: 70px;
  background-color: #e5e5e5;
`;

const TodayHeader = styled.div`
  padding: 30px 18px;

  display: flex;
  flex-direction: column;

  h1 {
    font-family: "Lexend Deca", sans-serif;
    font-weight: 400;
    font-size: 23px;
    font-style: normal;
    line-height: 30px;
    color: #126ba5;
  }

  p {
    font-family: "Lexend Deca", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #bababa;
  }
`;

export { TodayPage, TodayHeader };
