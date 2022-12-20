import logo from "../../Assets/Images/trackit-logo.png";
import LoginPage from "./LoginStyle";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../API/API";
import { Link } from "react-router-dom";
import useAuth from "../../Components/useAuth";

export default function Login(body) {
  const [formLogin, setFormLogin] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { auth, login } = useAuth();

  useEffect(() => {
    if (auth && auth.token) {
      navigate("/hoje");
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const promise = API.login({ ...formLogin });
    promise
      .then((res) => {
        login(res.data);
        navigate("/hoje");
      })
      .catch(() => {
        alert("Algo deu errado. Recarregue a página e tente novamente!");
      });
  }

  function handleChange(e) {
    setFormLogin({ ...formLogin, [e.target.name]: e.target.value });
  }

  return (
    <LoginPage>
      <img src={logo} alt="logo trackit" />

      <form onSubmit={handleSubmit}>
        <input
          data-test="email-input"
          type="email"
          name="email"
          value={formLogin.email}
          placeholder="email"
          onChange={handleChange}
          required
        />
        <input
          data-test="password-input"
          type="password"
          name="password"
          value={formLogin.password}
          placeholder="senha"
          onChange={handleChange}
          required
        />
        <button data-test="login-btn" type="submit">
          Entrar
        </button>
        <Link data-test="signup-link" to="/cadastro">
          Não tem uma conta? Cadastre-se!
        </Link>
      </form>
    </LoginPage>
  );
}
