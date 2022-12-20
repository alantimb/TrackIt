import styled from "styled-components";

const HabitsPage = styled.div`
  width: 100%;
  margin-top: 70px;
`;

const HabitsHeader = styled.div`
  padding: 30px 18px;
  background-color: #e5e5e5;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-family: "Lexend Deca", sans-serif;
    font-weight: 400;
    font-size: 23px;
    font-style: normal;
    line-height: 30px;
    color: #126ba5;
  }
`;

const AddHabit = styled.div`
  width: 40px;
  height: 35px;

  background-color: #52b6ff;
  color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  ion-icon {
    font-family: "Lexend Deca", sans-serif;
    font-weight: 400;
    font-size: 27px;
    line-height: 35px;
    background-color: #52b6ff;
  }
`;

export { HabitsPage, AddHabit, HabitsHeader };
