import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { treinos } from "../../auxiliarDadosCliente/treino";

export interface Exercises {
    id: number;
    nome: String;
    reps: String;
}

export interface Workout {
    id: number;
    nome: String;
    exercicios: Exercises[];
}

export default function Treinos(GET_TREINOS_QUERY:{GET_TREINOS_QUERY:any}) {
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
                                    Treinos
                                </span>
                                <ChevronUpIcon
                                    className={`${
                                        open ? "rotate-180 transform" : ""
                                    } h-5 w-5 text-gray-900 place-self-center`}
                                />
                            </Disclosure.Button>

                            {treinos.map((treino) => {
                                return (
                                    <Disclosure.Panel
                                        key={treino.id}
                                        className="rounded-lg my-2 px-4 pt-4 pb-2 text-gray-800 bg-slate-200"
                                    >
                                        <span className="font-bold text-2xl">
                                            Treino {treino.nome}
                                            <br />
                                        </span>

                                        {treino.exercicios.map((exercise) => {
                                            return (
                                                <div
                                                    className="grid grid-cols-3 mt-1"
                                                    key={exercise.id}
                                                >
                                                    <div className="col-span-2 font-medium text-lg">
                                                        {exercise.nome}
                                                    </div>
                                                    <div className="col-span-1 font-normal text-md">
                                                        {exercise.reps}
                                                    </div>
                                                </div>
                                            );
                                        })}
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
