import logo from "../../Assets/Images/trackit-logo.png";
import RegisterPage from "./RegisterStyle";
import API from "../../API/API";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [formRegister, setFormRegister] = useState({
    name: "",
    email: "",
    password: "",
    image: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    const promise = API.signUp({ ...formRegister });
    promise
      .then((res) => {
        navigate("/");
      })
      .catch(() =>
        alert("Algo deu errado. Recarregue a página e tente novamente!")
      );
  }

  function handleChange(e) {
    setFormRegister({ ...formRegister, [e.target.name]: e.target.value });
  }

  return (
    <RegisterPage>
      <img src={logo} />

      <form onSubmit={handleSubmit}>
        <input
          data-test="email-input"
          type="email"
          name="email"
          onChange={handleChange}
          value={formRegister.email}
          placeholder="email"
          required
        />
        <input
          data-test="password-input"
          type="password"
          name="password"
          onChange={handleChange}
          value={formRegister.password}
          placeholder="senha"
          required
        />
        <input
          data-test="user-name-input"
          type="name"
          name="name"
          onChange={handleChange}
          value={formRegister.name}
          placeholder="nome"
          required
        />
        <input
          data-test="user-image-input"
          type="text"
          name="image"
          onChange={handleChange}
          value={formRegister.image}
          placeholder="foto"
          required
        />
        <button data-test="signup-btn" type="submit">
          Cadastrar
        </button>
        <Link data-test="login-link" to="/">
          Já tem uma conta? Faça login!
        </Link>
      </form>
    </RegisterPage>
  );
}
