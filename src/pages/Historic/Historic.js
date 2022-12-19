import NavBar from "../../components/NavBar";
import Menu from "../../components/Menu";
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
