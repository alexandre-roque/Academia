import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
// import { avaliacoes } from "../../auxiliarDadosCliente/avaliacoes";
import { gql, useQuery } from "@apollo/client";
import { useAuth } from "../../context/AuthProvider/useAuth";

export interface Avaliacao {
    data: string;
    imc: number;
    id: string;
}

const GET_AVALIACOES_QUERY = gql`
    query ($userId: ID) {
        avaliacoes(where: { usuario: { id: $userId } }) {
            imc
            data
            id
        }
    }
`;

export default function AvaliacaoMedica() {
    const user = useAuth();

    const { data } = useQuery<{ avaliacoes: Avaliacao[] }>(
        GET_AVALIACOES_QUERY,
        {
            variables: {
                userId: user.id,
            },
        }
    );

    return (
        <div className="w-full px-4 mb-8">
            <div className="mx-auto w-full rounded-2xl bg-white p-2">
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button
                                className="flex w-full 
                            justify-between rounded-lg bg-gray-100 px-4 py-2 
                            text-center text-sm font-medium text-gray-900 hover:bg-gray-200 
                            focus:outline-none focus-visible:ring focus-visible:ring-gray-500 
                            focus-visible:ring-opacity-75"
                            >
                                <span className="m-auto font-extrabold text-3xl text-center uppercase">
                                    Avaliação médica
                                </span>
                                <ChevronUpIcon
                                    className={`${
                                        open ? "rotate-180 transform" : ""
                                    } h-5 w-5 text-gray-900 place-self-center`}
                                />
                            </Disclosure.Button>
                            {data?.avaliacoes.map((avaliacao) => {
                                return (
                                    <Disclosure.Panel
                                        key={avaliacao.id}
                                        className="rounded-lg my-2 px-4 pt-4 pb-2 text-gray-800 bg-slate-200"
                                    >
                                        <span className="font-bold text-2xl">
                                            {avaliacao.data}
                                            <br />
                                        </span>
                                        <div className="grid grid-cols-3 mt-1">
                                            <div className="col-span-1 font-bold text-lg">
<<<<<<< Updated upstream
                                                IMC: {avaliacao.imc}
=======
                                                imc: {avaliacao.imc}
>>>>>>> Stashed changes
                                            </div>
                                            <div className="col-span-2 font-medium text-lg">
                                                Situação:{" "}
                                                {CalcularSituacao(
                                                    avaliacao.imc
                                                )}
                                            </div>
                                        </div>
                                    </Disclosure.Panel>
                                );
                            })}
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    );
}

function CalcularSituacao(IMC: number) {
    if (IMC < 14.9) return "Extremamente abaixo do peso";
    else if (IMC < 15.9) return "Gravemente abaixo do peso";
    else if (IMC < 18.5) return "Abaixo do peso ideal";
    else if (IMC < 24.9) return "Faixa de peso ideal";
    else if (IMC < 29.9) return "Sobrepeso";
    else if (IMC < 34.9) return "Obesidade grau I";
    else if (IMC < 39.9) return "Obesidade grau II (grave)";
    else return "Obesidade grau III (mórbida)";
}
