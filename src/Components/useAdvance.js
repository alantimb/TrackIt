import { useContext } from "react";
import AdvanceContext from "../Contexts/AdvanceContext";

export default function useAdvance() {
  return useContext(AdvanceContext);
}
