import { Avaliacao } from "../../components/AvaliacaoMedica";
import { Workout } from "../../components/Treinos";
import { WorkoutClass } from "../../components/Turmas";

export interface IUser {
    email?: string;
    nome?: string;
    vinculo?: string;
    id?: string;
}
export interface IContext extends IUser {
    authenticate: (email: string, senha: string) => Promise<void>;
    logout: () => void;
}

export interface IAuthProvider {
    children: JSX.Element;
}
