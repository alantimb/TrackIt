import { useContext } from "react";
import AppContext from "../Contexts/AppContext";

export default function useAuth() {
  return useContext(AppContext);
}
