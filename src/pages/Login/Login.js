import logo from "../../assets/images/trackit-logo.png";
import LoginPage from "./LoginStyle";


export default function Login() {
  return (
    <LoginPage>
      <img src={logo} />

      <form>
        <input placeholder="email" />
        <input placeholder="senha" />
        <button>Entrar</button>
        <a href="" >Não tem uma conta? Cadastre-se!</a>
      </form>
    </LoginPage>
  );
}
