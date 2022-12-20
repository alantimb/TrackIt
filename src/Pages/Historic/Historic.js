import NavBar from "../../Components/NavBar";
import Menu from "../../Components/Menu";
import { HistoricPage, HistoricHeader } from "./HistoricStyle";

export default function Historic() {
  return (
    <>
      <NavBar />
      <HistoricPage>
        <HistoricHeader>
          <h1>Histórico</h1> {/* dinâmico */}
        </HistoricHeader>
      </HistoricPage>
      <Menu />
    </>
  );
}
