import { Avaliacao } from "../../components/AvaliacaoMedica";
import { Workout } from "../../components/Treinos";
import { WorkoutClass } from "../../components/Turmas";

export interface IUser {
    email?: string;
    nome?: string;
    vinculo?: string;
    turmas?: WorkoutClass[];
    treinos?: Workout[];
    avaliacoes?: Avaliacao[];
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
