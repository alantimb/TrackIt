import imggg from "../Assets/Images/trackit-logo.png";
import { NavBarPage } from "./ComponentStyle";

export default function NavBar() {
  return (
    <NavBarPage data-test="header">
      <h1>TrackIt</h1>
      <img src={imggg} />
    </NavBarPage>
  );
}
