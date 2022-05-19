export interface IUser {
    email?: string;
    nome?: string;
    perfil?: {
        id: string;
        vinculo: string;
    };
    isLogged?: boolean;
    id?: number;
}

export interface IContext extends IUser {
    authenticate: (email: string, senha: string) => Promise<void>;
    logout: () => void;
}

export interface IAuthProvider {
    children: JSX.Element;
}
