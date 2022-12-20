import imggg from "../Assets/Images/trackit-logo.png";
import { NavBarPage } from "./ComponentStyle";

export default function NavBar() {
  return (
    <NavBarPage>
      <h1>TrackIt</h1>
      <img src={imggg} />
    </NavBarPage>
  );
}
