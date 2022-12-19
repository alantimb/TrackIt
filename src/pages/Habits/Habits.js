import NavBar from "../../components/NavBar";
import Menu from "../../components/Menu";
import { HabitsPage, AddHabit, HabitsHeader } from "./HabitStyle";

export default function Habits() {
  return (
    <>
      <NavBar />
      <HabitsPage>
        <HabitsHeader>
          <h1>Meus hábitos</h1>
          <AddHabit>
            <ion-icon name="add-outline"></ion-icon>
          </AddHabit>
        </HabitsHeader>
      </HabitsPage>
      <Menu />
    </>
  );
}
