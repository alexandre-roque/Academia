import { gql } from "@apollo/client";
import AvaliacaoMedica from "../../components/AvaliacaoMedica";
import Treinos from "../../components/Treinos";
import Turmas from "../../components/Turmas";
import { useAuth } from "../../context/AuthProvider/useAuth";

export const Profile = () => {
    const user = useAuth();

    const GET_TURMAS_QUERY = gql`
        query {
            turmas(where: {usuario: {id: "cl4qyim712tdq0dkd6zoi7hr9" }}) {
                nome
                id
                horarios {
                    id
                    dia
                    horario
                }
            }
        }      
    `;

    const GET_AVALIACOES_QUERY = gql`
        query {
            avaliacoes(where: {usuario: {id: "cl4qyim712tdq0dkd6zoi7hr9" }}) {
                imc
                data
                id
            }
        }  
    `;

    const GET_TREINOS_QUERY = gql`
        query {
            treinos(where: {usuario: {id: "cl4qyim712tdq0dkd6zoi7hr9" }}) {
                nome
                id
                exercicios {
                    nome
                    reps
                    id
                }
            }
        }
    `;

    return (
        <div className="w-full bg-lblack py-16 px-4">
            <div className="max-w-[1240px] mx-auto">
                <AvaliacaoMedica GET_AVALIACOES_QUERY={GET_AVALIACOES_QUERY} />
            </div>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <Treinos GET_TREINOS_QUERY={GET_TREINOS_QUERY} />
                <Turmas GET_TURMAS_QUERY={GET_TURMAS_QUERY} />
            </div>
        </div>
    );
};
