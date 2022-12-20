import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./Assets/Styles/GlobalStyle";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Habits from "./Pages/Habits/Habits";
import Today from "./Pages/Today/Today";
import Historic from "./Pages/Historic/Historic";
import { AppProvider } from "./Contexts/AppContext";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/habitos" element={<Habits />} />
          <Route path="/hoje" element={<Today />} />
          <Route path="/historico" element={<Historic />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
