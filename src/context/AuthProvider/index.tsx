import React, { createContext, useEffect, useState } from "react";
import { IAuthProvider, IContext, IUser } from "./types";
import { getUserLocalStorage, setUserLocalStorage } from "./util";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
    const [user, setUser] = useState<IUser | null>();

    useEffect(() => {
        const user = getUserLocalStorage();

        if (user) {
            setUser(user);
        }
    }, []);

    function authenticate(user: IUser) {
        const payload = {
            email: user.email,
            nome: user.nome,
            vinculo: user.vinculo,
            id: user.id,
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
