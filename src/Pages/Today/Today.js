import NavBar from "../../Components/NavBar";
import Menu from "../../Components/Menu";
import { TodayPage, TodayHeader } from "./TodayStyle";
import API from "../../API/API";
import useAuth from "../../Components/useAuth";
import useAdvance from "../../Components/useAdvance";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import ptBr from "dayjs/locale/pt-br";
import Habits from "../Habits/Habits";

export default function Today() {
  const { advance, upAdvance } = useAdvance();
  const { auth } = useAuth();
  const [habits, setHabits] = useState(null);
  const [finishedHabits, setFinishedHabits] = useState(0);
  let date = dayjs().date();
  let month = dayjs().month() + 1;
  let weekDay = dayjs().day();
  let weekDayPtBr = dayjs(weekDay)
    .locale(ptBr)
    .format("dddd")
    .replace("-feira", "");

  if (date < 10) {
    date = 0 + date.toString();
  }
  if (month < 10) {
    month = 0 + month.toString();
  }

  function showTodayHabits() {
    const promise = API.todayHabits(auth.token);

    promise.then((res) => {
      setHabits(res.data);
      upAdvance(res.data.filter((h) => h.done).length, res.data.length);
      setFinishedHabits(res.data.filter((h) => h.done));
    });
  }

  useEffect(showTodayHabits, []);

  if (habits === null) {
    return <h1> Carregando ... </h1>;
  }

  return (
    <>
      <NavBar />
      <TodayPage>
        <TodayHeader>
          <h1>
            {weekDayPtBr}, {date}/{month}
          </h1>
          <p>
            {finishedHabits === 0
              ? `Nenhum hábito concluído ainda`
              : `${advance.toFixed(0)}% dos hábitos concluídos`}
          </p>

          {habits.map((h) => (
            <Habits
              key={h.id}
              // {...h}
              showTodayHabits={showTodayHabits}
            />
          ))}
        </TodayHeader>
      </TodayPage>
      <Menu />
    </>
  );
}
