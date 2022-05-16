import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useAuth } from "../../context/AuthProvider/useAuth";

export const Login = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const [emailValue, setEmailValue] = useState("");   
    const [passwordValue, setPasswordValue] = useState("");

    async function onFinish(values: {email: string, senha: string}) {
        try {
           await auth.authenticate(values.email, values.senha);

            navigate('/');
        } catch (error) {
            // message.error("Email ou senha inválidos");
        }
    }

    const onEmailChange = (e: React.FormEvent<HTMLInputElement>) => setEmailValue(e.currentTarget.value);
    const onPasswordChange = (e: React.FormEvent<HTMLInputElement>) => setPasswordValue(e.currentTarget.value);

    return (
            <Navbar />
    );
};