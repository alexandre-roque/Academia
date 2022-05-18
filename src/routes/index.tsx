import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Home } from "../pages/Home";
import { Error } from "../pages/Error";
import Navbar from "../components/Navbar";

export const AppRoutes = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    );
}