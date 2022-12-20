import logo from "../../Assets/Images/trackit-logo.png";
import RegisterPage from "./RegisterStyle";

export default function Register() {
  return (
    <RegisterPage>
      <img src={logo} />

      <form>
        <input placeholder="email" />
        <input placeholder="senha" />
        <input placeholder="nome" />
        <input placeholder="foto" />
        <button>Cadastrar</button>
        <a href="">Já tem uma conta? Faça login!</a>
      </form>
    </RegisterPage>
  );
}
