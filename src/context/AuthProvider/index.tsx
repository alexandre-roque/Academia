import React, {createContext, useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { changeUser, reduxLogout } from "../../store/ducks/user";
import { IAuthProvider, IContext, IUser } from "./types";
import { getUserLocalStorage, LoginRequest, setUserLocalStorage } from "./util";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({children}: IAuthProvider) => {
    const [user, setUser] = useState<IUser | null>();
    const dispatch = useDispatch();

    useEffect(() => {
        const user = getUserLocalStorage();

        if(user){
            setUser(user);
            dispatch(changeUser(user));
        }
    }, []);

    async function authenticate(email:string, senha: string) {
        const response = await LoginRequest(email, senha);

        console.log(response);

        if(!response || !response.isLogged){
            throw "Não foi possível fazer login";
        }

        const payload = { 
            email, 
            nome: response.nome, 
            endereco: response.endereco,
            isLogged: response.isLogged,
            id: response.id
        };

        setUser(payload);
        setUserLocalStorage(payload);
        dispatch(changeUser(payload));
    }

    function logout () {
        dispatch(reduxLogout());
        setUser(null);
        setUserLocalStorage(null);
    }

    return (
        <AuthContext.Provider value={{...user, authenticate, logout}}>
            {children}
        </AuthContext.Provider>
    )
}