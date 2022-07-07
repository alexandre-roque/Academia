import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { Error } from "../pages/Error";
import Navbar from "../components/Navbar";
import { Profile } from "../pages/Profile";
import { Cadastro } from "../pages/Cadastro";
import { CalendarPage } from "../pages/Calendar";
import { Avaliacao } from "../pages/Avaliacao";
import { RegistroTreino } from "../pages/RegistroTreino";
import { Sobre } from "../pages/Sobre";
import { Footer } from "../components/Footer";

export const AppRoutes = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/calendar" element={<CalendarPage />} />
                <Route path="/avaliacao" element={<Avaliacao />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/registro-treino" element={<RegistroTreino />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    );
};
