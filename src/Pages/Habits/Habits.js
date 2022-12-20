import NavBar from "../../Components/NavBar";
import Menu from "../../Components/Menu";
import { HabitsPage, AddHabit, HabitsHeader } from "./HabitStyle";
import useAuth from "../../Components/useAuth";
import API from "../../API/API";

export default function Habits({
  id,
  name,
  done,
  currentSequence,
  highestSequence,
  showTodayHabits,
}) {
  const { auth } = useAuth();
  const currentHighestSequence =
    currentSequence > 0 && currentSequence === highestSequence;

  function formatDay(qntt) {
    if (qntt === 1) {
      return "dia";
    }

    return "dias";
  }

  function handleMarkHabit() {
    if (done) {
      const promise = API.unmarkHabit(id, auth.token);
      promise.then(() => {
        showTodayHabits();
      });

      return;
    }

    const promise = API.markHabit(id, auth.token);
    promise.then(() => {
      showTodayHabits();
    });
  }

  return (
    <>
      <NavBar />
      <HabitsPage>
        <HabitsHeader>
          <h1>{name}</h1>
          <AddHabit>
            <ion-icon name="add-outline"></ion-icon>
          </AddHabit>
        </HabitsHeader>
      </HabitsPage>
      <Menu />
    </>
  );
}
