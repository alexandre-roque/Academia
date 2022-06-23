import React, { createContext, useEffect, useState } from "react";
import { IAuthProvider, IContext, IUser } from "./types";
import { LoginRequest } from "./util";
// import { getUserLocalStorage, LoginRequest, setUserLocalStorage } from "./util";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
    const [user, setUser] = useState<IUser | null>({
        email: "alexandre@teste.com",
        nome: "Alexandre Teste",
        vinculo: "Admin",
        id: 'cl4qyim712tdq0dkd6zoi7hr9',
    });

    // useEffect(() => {
    //     const user = getUserLocalStorage();

    //     if (user) {
    //         setUser(user);
    //     }
    // }, []);

    async function authenticate(email: string, senha: string) {

        const { data } = await LoginRequest(email, senha);
        
        if (!data || !data.email) {
            throw "Não foi possível fazer login";
        }

        const payload = {
            email,
            nome: data.nome,
            vinculo: data.vinculo,
            id: data.id,
        };

        setUser(payload);
        // setUserLocalStorage(payload);
    }

    function logout() {
        setUser(null);
        // setUserLocalStorage(null);
    }

    return (
        <AuthContext.Provider value={{ ...user, authenticate, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
