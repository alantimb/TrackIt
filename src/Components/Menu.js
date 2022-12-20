import { MenuPage } from "./ComponentStyle";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Link, useLocation } from "react-router-dom";
import useAdvance from "./useAdvance";

export default function Menu() {
  const { advance } = useAdvance();
  const location = useLocation();

  return (
    <MenuPage data-test="menu">
      <Link data-test="habit-link" to="/habits">
        <button>Hábitos</button>
      </Link>
      <CircularProgressbar>
        <Link data-test="today-link" to="/hoje">
          <CircularProgressbar
            value={advance}
            text={"Hoje"}
            background
            backgroundPadding={6}
            styles={buildStyles({
              backgroundColor: "#3e98c7",
              textColor: "#fff",
              pathColor: "#fff",
              trailColor: "transparent",
            })}
          />
        </Link>
      </CircularProgressbar>
      <Link data-test="history-link" to="/historico">
        <button>Histórico</button>
      </Link>
    </MenuPage>
  );
}
