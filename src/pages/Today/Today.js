import NavBar from "../../components/NavBar";
import Menu from "../../components/Menu";
import { TodayPage, TodayHeader } from "./TodayStyle";

export default function Today() {
  return (
    <>
      <NavBar />
      <TodayPage>
        <TodayHeader>
          <h1>Segunda, 19/12</h1> {/* dinâmico */}
          <p>Nenhum hábito concluído ainda</p> {/* dinâmico */}
        </TodayHeader>
      </TodayPage>
      <Menu />
    </>
  );
}
