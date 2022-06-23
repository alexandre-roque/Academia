import React, { createContext, useEffect, useState } from "react";
import { avaliacoes } from "../../auxiliarDadosCliente/avaliacoes";
import { treinos } from "../../auxiliarDadosCliente/treino";
import { turmas } from "../../auxiliarDadosCliente/turmas";
import { IAuthProvider, IContext, IUser } from "./types";
import { getUserLocalStorage, LoginRequest, setUserLocalStorage } from "./util";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
    const [user, setUser] = useState<IUser | null>({
        email: "alexandre@teste.com",
        nome: "Alexandre Teste",
        vinculo: "Admin",
        turmas: turmas,
        treinos: treinos,
        avaliacoes: avaliacoes,
        isLogged: true,
        id: 'cl4qyim712tdq0dkd6zoi7hr9',
    });

    useEffect(() => {
        const user = getUserLocalStorage();

        if (user) {
            setUser(user);
        }
    }, []);

    async function authenticate(email: string, senha: string) {
        const response = await LoginRequest(email, senha);

        if (!response || !response.isLogged) {
            throw "Não foi possível fazer login";
        }

        const payload = {
            email,
            nome: response.nome,
            endereco: response.endereco,
            isLogged: response.isLogged,
            vinculo: response.vinculo,
            turmas: response.turmas,
            treinos: response.treinos,
            avaliacao: response.avaliacao,
            id: response.id,
        };

        setUser(payload);
        setUserLocalStorage(payload);
    }

    function logout() {
        setUser(null);
        setUserLocalStorage(null);
    }

    return (
        <AuthContext.Provider value={{ ...user, authenticate, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
