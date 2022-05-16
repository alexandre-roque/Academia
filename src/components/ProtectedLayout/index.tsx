import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider/useAuth";

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
    const auth = useAuth();
    const navigate = useNavigate();

    if(!auth.email){
        return (
            <div>
                Você não tem permissão para acessar esse componente!
            </div>
        )
    }

    return children;
}