import React from "react";
import { VscError } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider/useAuth";

export const ProtectedLayout = ({
    children,
    vinculo,
}: {
    children: JSX.Element;
    vinculo: string;
}) => {
    const auth = useAuth();
    const navigate = useNavigate();

    if (!auth.isLogged || auth.vinculo !== vinculo) {
        return (
            <div className="text-white text-center font-black text-5xl flex justify-center mt-[250px] flex-col items-center">
                Você não tem permissão para acessar esse componente!
                <VscError className="mt-[30px] text-red-700" />
            </div>
        );
    }

    return children;
};
